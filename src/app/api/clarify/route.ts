import { NextRequest, NextResponse } from 'next/server'
import { getSession, setSession } from '@/lib/session-store'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const { sessionId, answers } = await req.json() as {
      sessionId: string
      answers: Record<string, string>
    }

    if (!sessionId || !answers) {
      return NextResponse.json({ error: 'sessionId and answers required' }, { status: 400 })
    }

    const session = await getSession(sessionId)
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    if (!session.organization) {
      return NextResponse.json({ error: 'No organization data' }, { status: 400 })
    }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // Apply answers
    const answeredIds = Object.keys(answers)
    const updatedQuestions = session.questions.map(q => {
      if (answeredIds.includes(q.id)) {
        return { ...q, answer: answers[q.id] }
      }
      return q
    })

    // Process answers — update org based on user responses
    const org = { ...session.organization }
    const people = { ...org.people }

    for (const question of updatedQuestions) {
      if (!question.answer) continue

      switch (question.type) {
        case 'duplicate-resolution': {
          if (question.answer === 'Yes, same person' && question.relatedPersonIds.length >= 2) {
            const [keepId, removeId] = question.relatedPersonIds
            const keepPerson = people[keepId]
            const removePerson = people[removeId]
            if (keepPerson && removePerson) {
              for (const [id, p] of Object.entries(people)) {
                if (p.reportsTo === removeId) {
                  people[id] = { ...p, reportsTo: keepId, reportsToSource: 'user-confirmed', reportsToConfidence: 'high' }
                }
              }
              delete people[removeId]
            }
          }
          break
        }

        case 'reporting-line': {
          if (question.relatedPersonIds.length > 0) {
            const personId = question.relatedPersonIds[0]
            const person = people[personId]
            if (person) {
              const managerName = question.answer.replace(/\s*\(.*?\)\s*$/, '')
              const manager = Object.values(people).find(p => p.name === managerName)
              if (manager) {
                people[personId] = {
                  ...person,
                  reportsTo: manager.id,
                  reportsToConfidence: 'high',
                  reportsToSource: 'user-confirmed',
                  flags: person.flags.filter(f => f !== 'orphan' && f !== 'missing-manager'),
                }
              }
            }
          }
          break
        }

        case 'gap-resolution': {
          break
        }

        case 'peer-confirmation': {
          if (question.answer && !question.answer.includes('peers') && question.relatedPersonIds.length > 0) {
            const leaderName = question.answer.replace(/\s*leads.*$/, '')
            const leader = Object.values(people).find(p => p.name === leaderName)
            if (leader) {
              for (const id of question.relatedPersonIds) {
                if (id !== leader.id && people[id]) {
                  people[id] = {
                    ...people[id],
                    reportsTo: leader.id,
                    reportsToConfidence: 'high',
                    reportsToSource: 'user-confirmed',
                  }
                }
              }
            }
          }
          break
        }
      }
    }

    // Rebuild direct reports
    for (const id of Object.keys(people)) {
      people[id] = { ...people[id], directReports: [] }
    }
    for (const [id, person] of Object.entries(people)) {
      if (person.reportsTo && people[person.reportsTo]) {
        people[person.reportsTo] = {
          ...people[person.reportsTo],
          directReports: [...people[person.reportsTo].directReports, id],
        }
      }
    }

    // Update root IDs
    const rootIds = Object.entries(people)
      .filter(([, p]) => !p.reportsTo)
      .sort((a, b) => b[1].seniorityScore - a[1].seniorityScore)
      .map(([id]) => id)

    const updatedSession = {
      ...session,
      organization: {
        ...org,
        people,
        rootIds,
      },
      questions: updatedQuestions,
      answeredQuestions: [...session.answeredQuestions, ...answeredIds],
    }

    await setSession(updatedSession, user?.id)
    return NextResponse.json(updatedSession)
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Clarification failed' },
      { status: 500 }
    )
  }
}
