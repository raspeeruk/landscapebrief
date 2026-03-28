export type StandardField =
  | 'name' | 'title' | 'department' | 'reports_to'
  | 'email' | 'location' | 'employee_id'
  | 'account_name' | 'level' | 'start_date'
  | 'ignore'

export interface ColumnMapping {
  [csvHeader: string]: StandardField
}

export interface ParsedCSV {
  headers: string[]
  rows: string[][]
  totalRows: number
  preview: string[][] // first 5 rows
}

export interface ColumnDetectionResult {
  mapping: ColumnMapping
  confidence: Record<string, number>
  unmappedHeaders: string[]
}
