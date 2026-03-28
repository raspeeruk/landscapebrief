import type { Person, ConfidenceLevel, RelationshipSource, Organization } from '@/types'
import { SENIORITY_SCORES } from './seniority'

interface HierarchyResult {
  people: Map<string, Person>
  rootIds: string[]
}

/**
 * Build the hierarchy tree from people data.
 * Priority: explicit > seniority-inferred > department-inferred > AI-suggested
 */
export function buildHierarchy(
  people: Map<string, Person>,
  departments: Map<string, { name: string; headId: string | null; memberIds: string[] }>
): HierarchyResult {
  // Step 1: Process explicit "reports to" relationships
  resolveExplicitRelationships(people)

  // Step 2: Within each department, chain by seniority
  for (const [, dept] of departments) {
    inferDepartmentHierarchy(people, dept)
  }

  // Step 3: Connect department heads to C-suite
  connectDepartmentHeadsToCSuite(people, departments)

  // Step 4: Handle orphan nodes
  handleOrphans(people)

  // Step 5: Build direct reports lists
  buildDirectReports(people)

  // Step 6: Find root nodes
  const rootIds = findRoots(people)

  // Step 7: Flag issues
  flagIssues(people)

  return { people, rootIds }
}

function resolveExplicitRelationships(people: Map<string, Person>) {
  for (const [, person] of people) {
    if (!person.reportsTo) continue

    // reportsTo might be a name — resolve to ID
    const managerId = findPersonByName(people, person.reportsTo)
    if (managerId) {
      person.reportsTo = managerId
      person.reportsToConfidence = 'high'
      person.reportsToSource = 'explicit'
    } else {
      // Name didn't match anyone — flag it
      person.reportsTo = null
      person.flags.push('missing-manager')
    }
  }
}

function findPersonByName(people: Map<string, Person>, nameOrId: string): string | null {
  // Direct ID match
  if (people.has(nameOrId)) return nameOrId

  // Name match (case-insensitive)
  const lower = nameOrId.toLowerCase().trim()
  for (const [id, person] of people) {
    if (person.name.toLowerCase().trim() === lower) return id
  }

  // Partial name match (last name)
  for (const [id, person] of people) {
    const parts = person.name.toLowerCase().split(/\s+/)
    if (parts.some(p => p === lower)) return id
  }

  return null
}

function inferDepartmentHierarchy(
  people: Map<string, Person>,
  dept: { name: string; headId: string | null; memberIds: string[] }
) {
  // Get unassigned members (no reportsTo yet), sorted by seniority descending
  const unassigned = dept.memberIds
    .map(id => people.get(id)!)
    .filter(p => !p.reportsTo)
    .sort((a, b) => b.seniorityScore - a.seniorityScore)

  if (unassigned.length <= 1) return

  // Group by seniority level
  const levels = new Map<number, Person[]>()
  for (const person of unassigned) {
    const score = person.seniorityScore
    if (!levels.has(score)) levels.set(score, [])
    levels.get(score)!.push(person)
  }

  const sortedScores = [...levels.keys()].sort((a, b) => b - a)

  // Chain: each level reports to the level above
  for (let i = 1; i < sortedScores.length; i++) {
    const currentLevel = levels.get(sortedScores[i])!
    const aboveLevel = levels.get(sortedScores[i - 1])!

    for (const person of currentLevel) {
      if (person.reportsTo) continue // already assigned

      // If there's exactly one person above, report to them
      if (aboveLevel.length === 1) {
        setReportsTo(person, aboveLevel[0].id, 'high', 'inferred-seniority')
      } else {
        // Multiple people at the level above — pick the department head or first one
        const head = aboveLevel.find(p => p.id === dept.headId) || aboveLevel[0]
        setReportsTo(person, head.id, 'medium', 'inferred-seniority')
      }
    }
  }
}

function connectDepartmentHeadsToCSuite(
  people: Map<string, Person>,
  departments: Map<string, { name: string; headId: string | null; memberIds: string[] }>
) {
  // Find C-suite members
  const cSuite = [...people.values()].filter(p =>
    SENIORITY_SCORES[p.seniorityLevel] >= 90
  )

  if (cSuite.length === 0) return

  // Map C-suite to likely departments
  const cSuiteDeptMap: Record<string, string[]> = {
    'Engineering': ['cto', 'chief technology officer', 'chief tech'],
    'Product': ['cpo', 'chief product officer'],
    'Marketing': ['cmo', 'chief marketing officer'],
    'Sales': ['cro', 'chief revenue officer', 'chief commercial'],
    'Finance': ['cfo', 'chief financial officer'],
    'Human Resources': ['chro', 'chief human resources', 'chief people officer', 'chief hr'],
    'Operations': ['coo', 'chief operating officer'],
    'Legal': ['clo', 'chief legal officer', 'general counsel'],
    'Data': ['cdo', 'chief data officer'],
    'IT': ['cio', 'chief information officer', 'ciso'],
  }

  for (const [deptName, dept] of departments) {
    if (!dept.headId) continue
    const head = people.get(dept.headId)
    if (!head || head.reportsTo) continue // already has a manager

    // Find matching C-suite
    const keywords = cSuiteDeptMap[deptName] || []
    const matchingCSuite = cSuite.find(c => {
      const lower = c.normalizedTitle.toLowerCase()
      return keywords.some(k => lower.includes(k))
    })

    if (matchingCSuite && matchingCSuite.id !== head.id) {
      setReportsTo(head, matchingCSuite.id, 'medium', 'inferred-department')
    }
  }

  // C-suite members without reportsTo → report to CEO
  const ceo = cSuite.find(p => {
    const lower = p.normalizedTitle.toLowerCase()
    return lower.includes('chief executive') || lower === 'ceo' || lower.includes('president')
  })

  if (ceo) {
    for (const exec of cSuite) {
      if (exec.id === ceo.id) continue
      if (exec.reportsTo) continue
      setReportsTo(exec, ceo.id, 'medium', 'inferred-seniority')
    }
  }
}

function handleOrphans(people: Map<string, Person>) {
  const orphans = [...people.values()].filter(p =>
    !p.reportsTo && SENIORITY_SCORES[p.seniorityLevel] < 90
  )

  for (const orphan of orphans) {
    orphan.flags.push('orphan')
  }
}

function buildDirectReports(people: Map<string, Person>) {
  // Clear existing
  for (const [, person] of people) {
    person.directReports = []
  }

  // Build from reportsTo
  for (const [id, person] of people) {
    if (person.reportsTo && people.has(person.reportsTo)) {
      people.get(person.reportsTo)!.directReports.push(id)
    }
  }
}

function findRoots(people: Map<string, Person>): string[] {
  return [...people.entries()]
    .filter(([, p]) => !p.reportsTo)
    .sort((a, b) => b[1].seniorityScore - a[1].seniorityScore)
    .map(([id]) => id)
}

function flagIssues(people: Map<string, Person>) {
  for (const [, person] of people) {
    // Too many direct reports (> 15 suggests missing management layer)
    if (person.directReports.length > 15) {
      person.flags.push('too-many-reports')
    }
  }
}

function setReportsTo(
  person: Person,
  managerId: string,
  confidence: ConfidenceLevel,
  source: RelationshipSource
) {
  person.reportsTo = managerId
  person.reportsToConfidence = confidence
  person.reportsToSource = source
}
