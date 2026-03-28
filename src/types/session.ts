import type { OrganizationDTO } from './org'
import type { ColumnMapping } from './csv'
import type { ClarificationQuestion } from './review'

export type SessionStatus =
  | 'uploading' | 'mapping' | 'processing' | 'reviewing'
  | 'chart-ready' | 'exporting'

export interface Session {
  id: string
  status: SessionStatus
  createdAt: string
  updatedAt: string
  fileName: string
  rawData: string[][] | null
  headers: string[] | null
  columnMapping: ColumnMapping | null
  organization: OrganizationDTO | null
  questions: ClarificationQuestion[]
  answeredQuestions: string[]
  exportSettings: ExportSettings | null
  shareId: string | null
}

export interface ExportSettings {
  template: TemplateId
  clientName?: string
  clientLogo?: string
  primaryColor?: string
  accentColor?: string
  includeConfidence: boolean
  includeCoverPage: boolean
  includeTableOfContents: boolean
}

export type TemplateId = 'executive-dark' | 'clean-minimal' | 'editorial-classic' | 'branded-report'
