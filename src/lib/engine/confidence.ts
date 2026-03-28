import type { Person, Organization, InferenceStats, ConfidenceLevel } from '@/types'
import { SENIORITY_SCORES } from './seniority'

export function calculateConfidence(
  people: Map<string, Person>,
  rootIds: string[]
): { completenessScore: number; stats: InferenceStats } {
  let explicit = 0
  let inferred = 0
  let aiSuggested = 0
  let userConfirmed = 0
  let orphans = 0
  let flagged = 0
  let totalConfidence = 0
  let confidenceCount = 0

  for (const [, person] of people) {
    if (person.reportsToSource === 'explicit') explicit++
    else if (person.reportsToSource === 'inferred-seniority' || person.reportsToSource === 'inferred-department') inferred++
    else if (person.reportsToSource === 'ai-suggested') aiSuggested++
    else if (person.reportsToSource === 'user-confirmed') userConfirmed++

    if (person.flags.includes('orphan')) orphans++
    if (person.flags.length > 0) flagged++

    if (person.reportsTo) {
      const confScore = person.reportsToConfidence === 'high' ? 1 : person.reportsToConfidence === 'medium' ? 0.7 : 0.4
      totalConfidence += confScore
      confidenceCount++
    }
  }

  const total = people.size
  const connected = total - orphans - rootIds.length
  const completenessScore = total > 0 ? Math.round((connected / Math.max(total - rootIds.length, 1)) * 100) : 0

  return {
    completenessScore: Math.min(completenessScore, 100),
    stats: {
      totalPeople: total,
      explicitRelationships: explicit,
      inferredRelationships: inferred,
      aiSuggestedRelationships: aiSuggested,
      userConfirmedRelationships: userConfirmed,
      orphanNodes: orphans,
      flaggedPeople: flagged,
      averageConfidence: confidenceCount > 0 ? Math.round((totalConfidence / confidenceCount) * 100) : 0,
    }
  }
}

export function getConfidenceColor(confidence: ConfidenceLevel): string {
  switch (confidence) {
    case 'high': return '#059669'
    case 'medium': return '#D97706'
    case 'low': return '#DC2626'
  }
}
