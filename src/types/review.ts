export type QuestionType =
  | 'peer-confirmation'
  | 'reporting-line'
  | 'org-type'
  | 'gap-resolution'
  | 'duplicate-resolution'

export type QuestionPriority = 'high' | 'medium' | 'low'

export interface ClarificationQuestion {
  id: string
  type: QuestionType
  priority: QuestionPriority
  question: string
  context: string
  relatedPersonIds: string[]
  options?: string[]
  answer?: string
}
