import type { Person, Department, ConfidenceLevel } from '@/types'
import { inferDepartmentFromTitle } from './seniority'

// Colors for departments (visually distinct)
const DEPARTMENT_COLORS = [
  '#0d7377', '#6366f1', '#d97706', '#059669', '#dc2626',
  '#8b5cf6', '#0891b2', '#c026d3', '#65a30d', '#ea580c',
  '#4f46e5', '#0d9488', '#b91c1c', '#7c3aed', '#ca8a04',
]

export function clusterDepartments(people: Map<string, Person>): Map<string, Department> {
  const departments = new Map<string, Department>()
  let colorIndex = 0

  // First pass: assign departments from explicit data or title inference
  for (const [id, person] of people) {
    let dept = person.department

    if (!dept) {
      dept = inferDepartmentFromTitle(person.normalizedTitle || person.rawTitle)
      if (dept) {
        person.department = dept
      }
    }

    if (dept) {
      if (!departments.has(dept)) {
        departments.set(dept, {
          name: dept,
          headId: null,
          memberIds: [],
          color: DEPARTMENT_COLORS[colorIndex % DEPARTMENT_COLORS.length],
          confidence: 'high' as ConfidenceLevel,
        })
        colorIndex++
      }
      departments.get(dept)!.memberIds.push(id)
    }
  }

  // Second pass: identify department heads (highest seniority per department)
  for (const [, dept] of departments) {
    let highestScore = -1
    let headId: string | null = null

    for (const memberId of dept.memberIds) {
      const person = people.get(memberId)
      if (person && person.seniorityScore > highestScore) {
        highestScore = person.seniorityScore
        headId = memberId
      }
    }

    dept.headId = headId
  }

  // Mark people without departments
  for (const [, person] of people) {
    if (!person.department) {
      person.flags.push('missing-department')
    }
  }

  return departments
}
