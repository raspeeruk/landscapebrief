'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ConfidenceDot } from '@/components/ui/confidence-dot'
import type { Session } from '@/types'

export default function ReviewPage() {
  const params = useParams()
  const router = useRouter()
  const sessionId = params.id as string
  const [session, setSession] = useState<Session | null>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/session/${sessionId}`)
        if (res.ok) {
          const data = await res.json()
          setSession(data)
        }
      } catch {
        // ignore
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [sessionId])

  const org = session?.organization
  const questions = session?.questions?.filter(q => !session.answeredQuestions.includes(q.id)) || []

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const handleSubmitAnswers = async () => {
    if (Object.keys(answers).length === 0) return
    setSubmitting(true)
    try {
      const res = await fetch('/api/clarify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, answers }),
      })
      if (res.ok) {
        const data = await res.json()
        setSession(data)
        setAnswers({})
      }
    } catch {
      // ignore
    } finally {
      setSubmitting(false)
    }
  }

  const handleSkipToChart = () => {
    router.push(`/app/chart/${sessionId}`)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="text-center">
          <div className="w-8 h-8 mx-auto mb-3 border-2 border-[#0D7377] border-t-transparent rounded-full animate-spin" />
          <p className="text-[#6B7280]">Loading session...</p>
        </div>
      </div>
    )
  }

  if (!session || !org) {
    return (
      <div className="text-center py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold mb-2">Session not found</h2>
        <p className="text-[#6B7280] mb-6">This session may have expired.</p>
        <Button onClick={() => router.push('/app/upload')}>Upload new CSV</Button>
      </div>
    )
  }

  return (
    <div className="max-w-[900px] mx-auto">
      <div className="flex items-start justify-between mb-10">
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-[#1A1A1A] mb-3">
            Review structure
          </h1>
          <p className="text-[#6B7280]">
            Answer questions to improve accuracy, or skip straight to the chart.
          </p>
        </div>
        <Button variant="secondary" onClick={handleSkipToChart}>
          Skip to chart
        </Button>
      </div>

      {/* Stats bar */}
      <Card className="mb-8">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-[#6B7280]">People</p>
            <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold">{org.inferenceStats.totalPeople}</p>
          </div>
          <div>
            <p className="text-sm text-[#6B7280]">Completeness</p>
            <div className="flex items-center gap-2">
              <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold">{org.completenessScore}%</p>
              <ConfidenceDot
                confidence={org.completenessScore > 80 ? 'high' : org.completenessScore > 50 ? 'medium' : 'low'}
                size="md"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-[#6B7280]">Explicit</p>
            <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold">{org.inferenceStats.explicitRelationships}</p>
          </div>
          <div>
            <p className="text-sm text-[#6B7280]">Inferred</p>
            <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold">{org.inferenceStats.inferredRelationships}</p>
          </div>
        </div>
      </Card>

      {/* Questions */}
      {questions.length > 0 ? (
        <div className="space-y-4 mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold">
            {questions.length} question{questions.length !== 1 ? 's' : ''} to improve accuracy
          </h2>
          {questions.slice(0, 5).map(q => (
            <Card key={q.id} padding="lg">
              <div className="flex items-start gap-3 mb-4">
                <Badge variant={q.priority === 'high' ? 'danger' : q.priority === 'medium' ? 'warning' : 'default'}>
                  {q.priority}
                </Badge>
                <Badge variant="teal">{q.type.replace(/-/g, ' ')}</Badge>
              </div>
              <h3 className="font-medium text-[#1A1A1A] mb-2">{q.question}</h3>
              <p className="text-sm text-[#6B7280] mb-4">{q.context}</p>
              {q.options && (
                <div className="flex flex-wrap gap-2">
                  {q.options.map(opt => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(q.id, opt)}
                      className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
                        answers[q.id] === opt
                          ? 'border-[#0D7377] bg-[#0D7377]/10 text-[#0D7377]'
                          : 'border-[#E2E1DE] text-[#6B7280] hover:border-[#0D7377]/50'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </Card>
          ))}
          {Object.keys(answers).length > 0 && (
            <div className="flex justify-end">
              <Button onClick={handleSubmitAnswers} loading={submitting}>
                Submit {Object.keys(answers).length} answer{Object.keys(answers).length !== 1 ? 's' : ''} and re-process
              </Button>
            </div>
          )}
        </div>
      ) : (
        <Card padding="lg" className="mb-8 text-center">
          <div className="py-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#059669]/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-1">All clear</h3>
            <p className="text-[#6B7280]">No questions remaining. Your chart is ready to view.</p>
          </div>
        </Card>
      )}

      {/* People list */}
      <Card padding="lg">
        <CardHeader>
          <CardTitle>People ({org.inferenceStats.totalPeople})</CardTitle>
        </CardHeader>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#E2E1DE]">
                <th className="text-left py-2 px-3 font-[family-name:var(--font-heading)] font-semibold">Name</th>
                <th className="text-left py-2 px-3 font-[family-name:var(--font-heading)] font-semibold">Title</th>
                <th className="text-left py-2 px-3 font-[family-name:var(--font-heading)] font-semibold">Department</th>
                <th className="text-left py-2 px-3 font-[family-name:var(--font-heading)] font-semibold">Reports To</th>
                <th className="text-left py-2 px-3 font-[family-name:var(--font-heading)] font-semibold">Confidence</th>
                <th className="text-left py-2 px-3 font-[family-name:var(--font-heading)] font-semibold">Flags</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(org.people).slice(0, 50).map(person => (
                <tr key={person.id} className="border-b border-[#E2E1DE]/50 hover:bg-[#F0EFEC]/50">
                  <td className="py-2 px-3 font-medium">{person.name}</td>
                  <td className="py-2 px-3 text-[#6B7280]">{person.normalizedTitle || person.rawTitle}</td>
                  <td className="py-2 px-3 text-[#6B7280]">{person.department || '\u2014'}</td>
                  <td className="py-2 px-3 text-[#6B7280]">
                    {person.reportsTo ? (org.people[person.reportsTo]?.name || '\u2014') : '\u2014'}
                  </td>
                  <td className="py-2 px-3">
                    {person.reportsTo && (
                      <ConfidenceDot
                        confidence={person.reportsToConfidence}
                        reasoning={`Source: ${person.reportsToSource}`}
                      />
                    )}
                  </td>
                  <td className="py-2 px-3">
                    {person.flags.map(f => (
                      <Badge key={f} variant={f === 'orphan' ? 'warning' : f === 'possible-duplicate' ? 'danger' : 'default'} className="mr-1">
                        {f.replace(/-/g, ' ')}
                      </Badge>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="flex justify-end mt-8">
        <Button size="lg" onClick={handleSkipToChart}>
          View chart
        </Button>
      </div>
    </div>
  )
}
