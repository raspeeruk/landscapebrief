import type { Person, Organization, ConfidenceLevel } from '@/types'
import type { ClarificationQuestion, QuestionPriority } from '@/types'
import { nanoid } from 'nanoid'
import { SENIORITY_SCORES } from './seniority'
import stringSimilarity from 'string-similarity'

export function detectGaps(
  people: Map<string, Person>,
  departments: Map<string, { name: string; headId: string | null; memberIds: string[] }>,
  rootIds: string[]
): ClarificationQuestion[] {
  const questions: ClarificationQuestion[] = []

  questions.push(...detectDuplicates(people))
  questions.push(...detectMissingLayers(people))
  questions.push(...detectOrphans(people, rootIds))
  questions.push(...detectHeadlessDepartments(people, departments))
  questions.push(...detectAmbiguousPeers(people))

  // Sort by priority
  const priorityOrder: Record<QuestionPriority, number> = { high: 0, medium: 1, low: 2 }
  questions.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])

  return questions
}

function detectDuplicates(people: Map<string, Person>): ClarificationQuestion[] {
  const questions: ClarificationQuestion[] = []
  const names = [...people.entries()]
  const checked = new Set<string>()

  for (let i = 0; i < names.length; i++) {
    for (let j = i + 1; j < names.length; j++) {
      const [id1, p1] = names[i]
      const [id2, p2] = names[j]
      const key = [id1, id2].sort().join(':')
      if (checked.has(key)) continue
      checked.add(key)

      const similarity = stringSimilarity.compareTwoStrings(
        p1.name.toLowerCase(),
        p2.name.toLowerCase()
      )

      if (similarity > 0.7) {
        p1.flags.push('possible-duplicate')
        p2.flags.push('possible-duplicate')
        questions.push({
          id: nanoid(),
          type: 'duplicate-resolution',
          priority: 'high',
          question: `Are "${p1.name}" (${p1.normalizedTitle}) and "${p2.name}" (${p2.normalizedTitle}) the same person?`,
          context: `These names are ${Math.round(similarity * 100)}% similar. If they're the same person, we'll merge their data.`,
          relatedPersonIds: [id1, id2],
          options: ['Yes, same person', 'No, different people'],
        })
      }
    }
  }

  return questions
}

function detectMissingLayers(people: Map<string, Person>): ClarificationQuestion[] {
  const questions: ClarificationQuestion[] = []

  for (const [id, person] of people) {
    if (person.directReports.length > 15) {
      questions.push({
        id: nanoid(),
        type: 'gap-resolution',
        priority: 'high',
        question: `${person.name} has ${person.directReports.length} direct reports. Is there a missing management layer?`,
        context: `Typically managers have 5-10 direct reports. ${person.directReports.length} suggests there might be intermediate managers not in the data.`,
        relatedPersonIds: [id, ...person.directReports.slice(0, 5)],
        options: ['Yes, there are missing managers', 'No, this is correct — flat structure'],
      })
    }
  }

  return questions
}

function detectOrphans(people: Map<string, Person>, rootIds: string[]): ClarificationQuestion[] {
  const questions: ClarificationQuestion[] = []

  const orphans = [...people.values()].filter(p =>
    !p.reportsTo &&
    SENIORITY_SCORES[p.seniorityLevel] < 90 &&
    !rootIds.includes(p.id)
  )

  if (orphans.length > 0 && orphans.length <= 10) {
    for (const orphan of orphans) {
      // Find likely managers (same department, one level up)
      const candidates = [...people.values()]
        .filter(p =>
          p.id !== orphan.id &&
          p.seniorityScore > orphan.seniorityScore &&
          (p.department === orphan.department || !orphan.department)
        )
        .sort((a, b) => a.seniorityScore - b.seniorityScore)
        .slice(0, 3)

      if (candidates.length > 0) {
        questions.push({
          id: nanoid(),
          type: 'reporting-line',
          priority: 'medium',
          question: `Who does ${orphan.name} (${orphan.normalizedTitle}) report to?`,
          context: `This person has no reporting line in the data. Based on their title and department, they might report to one of the people listed.`,
          relatedPersonIds: [orphan.id, ...candidates.map(c => c.id)],
          options: candidates.map(c => `${c.name} (${c.normalizedTitle})`),
        })
      }
    }
  }

  return questions
}

function detectHeadlessDepartments(
  people: Map<string, Person>,
  departments: Map<string, { name: string; headId: string | null; memberIds: string[] }>
): ClarificationQuestion[] {
  const questions: ClarificationQuestion[] = []

  for (const [, dept] of departments) {
    if (dept.headId) continue
    if (dept.memberIds.length < 2) continue

    questions.push({
      id: nanoid(),
      type: 'gap-resolution',
      priority: 'medium',
      question: `The ${dept.name} department has ${dept.memberIds.length} members but no clear head. Who leads this team?`,
      context: `We couldn't identify a department head from the titles. Please select the leader or tell us there isn't one in the data.`,
      relatedPersonIds: dept.memberIds.slice(0, 5),
      options: dept.memberIds.slice(0, 5).map(id => {
        const p = people.get(id)!
        return `${p.name} (${p.normalizedTitle})`
      }),
    })
  }

  return questions
}

function detectAmbiguousPeers(people: Map<string, Person>): ClarificationQuestion[] {
  const questions: ClarificationQuestion[] = []

  // Find groups of same-title same-department people who might be peers or have a hierarchy
  const groups = new Map<string, Person[]>()
  for (const [, person] of people) {
    if (!person.department) continue
    const key = `${person.department}:${person.seniorityLevel}`
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key)!.push(person)
  }

  for (const [, group] of groups) {
    if (group.length < 3 || group.length > 8) continue
    // Only ask about mid-level+ groups
    if (group[0].seniorityScore < 40) continue

    // Check if any have reportsTo each other already
    const hasInternalHierarchy = group.some(p =>
      group.some(other => other.reportsTo === p.id)
    )
    if (hasInternalHierarchy) continue

    questions.push({
      id: nanoid(),
      type: 'peer-confirmation',
      priority: 'low',
      question: `Are these ${group.length} ${group[0].normalizedTitle}s in ${group[0].department} all peers, or does one lead the others?`,
      context: `${group.map(p => p.name).join(', ')} all have similar titles in the same department.`,
      relatedPersonIds: group.map(p => p.id),
      options: [
        'All peers — same level',
        `${group[0].name} leads the group`,
        ...(group.length > 1 ? [`${group[1].name} leads the group`] : []),
      ],
    })
  }

  return questions
}
