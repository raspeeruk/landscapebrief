export type SeniorityLevel =
  | 'board' | 'c-suite' | 'evp' | 'svp' | 'vp'
  | 'sr-director' | 'director' | 'sr-manager' | 'manager'
  | 'lead' | 'senior-ic' | 'ic' | 'unknown'

export type ConfidenceLevel = 'high' | 'medium' | 'low'

export type RelationshipSource = 'explicit' | 'inferred-seniority' | 'inferred-department' | 'ai-suggested' | 'user-confirmed'

export type PersonFlag = 'too-many-reports' | 'orphan' | 'possible-duplicate' | 'missing-department' | 'ambiguous-title' | 'missing-manager'

export interface Person {
  id: string
  name: string
  rawTitle: string
  normalizedTitle: string
  seniorityLevel: SeniorityLevel
  seniorityScore: number
  department: string | null
  reportsTo: string | null
  reportsToConfidence: ConfidenceLevel
  reportsToSource: RelationshipSource
  directReports: string[]
  flags: PersonFlag[]
  email?: string
  location?: string
  rawData: Record<string, string>
}

export interface Department {
  name: string
  headId: string | null
  memberIds: string[]
  color: string
  confidence: ConfidenceLevel
}

export interface InferenceStats {
  totalPeople: number
  explicitRelationships: number
  inferredRelationships: number
  aiSuggestedRelationships: number
  userConfirmedRelationships: number
  orphanNodes: number
  flaggedPeople: number
  averageConfidence: number
}

export interface Organization {
  people: Map<string, Person>
  departments: Map<string, Department>
  rootIds: string[]
  completenessScore: number
  inferenceStats: InferenceStats
}

// Serializable version for JSON transport
export interface OrganizationDTO {
  people: Record<string, Person>
  departments: Record<string, Department>
  rootIds: string[]
  completenessScore: number
  inferenceStats: InferenceStats
}
