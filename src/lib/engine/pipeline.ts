import type { Person, Organization, OrganizationDTO, ConfidenceLevel } from '@/types'
import type { ParsedCSV, ColumnMapping } from '@/types'
import type { ClarificationQuestion } from '@/types'
import { parseCSV, csvToRecords } from './csv-parser'
import { normalizeTitle, classifySeniority, getSeniorityScore } from './seniority'
import { clusterDepartments } from './department-clustering'
import { buildHierarchy } from './hierarchy'
import { detectGaps } from './gap-detector'
import { calculateConfidence } from './confidence'
import { nanoid } from 'nanoid'

export interface PipelineResult {
  organization: OrganizationDTO
  questions: ClarificationQuestion[]
}

export interface PipelineProgress {
  step: string
  progress: number
  detail?: string
}

/**
 * Run the full processing pipeline on CSV data
 */
export async function runPipeline(
  csvContent: string,
  columnMapping: ColumnMapping,
  onProgress?: (p: PipelineProgress) => void,
  existingAnswers?: Map<string, string>
): Promise<PipelineResult> {
  // Step 1: Parse CSV
  onProgress?.({ step: 'Parsing CSV', progress: 10 })
  const parsed = parseCSV(csvContent)
  const records = csvToRecords(parsed)

  // Step 2: Build people from mapped columns
  onProgress?.({ step: 'Building people records', progress: 20 })
  const people = buildPeople(records, columnMapping)

  // Step 3: Normalize titles + classify seniority
  onProgress?.({ step: 'Normalizing titles', progress: 35, detail: `Processing ${people.size} people` })
  for (const [, person] of people) {
    person.normalizedTitle = normalizeTitle(person.rawTitle)
    person.seniorityLevel = classifySeniority(person.normalizedTitle)
    person.seniorityScore = getSeniorityScore(person.seniorityLevel)
  }

  // Step 4: Cluster departments
  onProgress?.({ step: 'Clustering departments', progress: 50 })
  const departments = clusterDepartments(people)

  // Step 5: Build hierarchy
  onProgress?.({ step: 'Inferring hierarchy', progress: 65, detail: 'Analyzing reporting relationships' })
  const { rootIds } = buildHierarchy(people, departments)

  // Step 6: Calculate confidence
  onProgress?.({ step: 'Calculating confidence', progress: 80 })
  const { completenessScore, stats } = calculateConfidence(people, rootIds)

  // Step 7: Detect gaps and generate questions
  onProgress?.({ step: 'Detecting gaps', progress: 90 })
  const questions = detectGaps(people, departments, rootIds)

  onProgress?.({ step: 'Complete', progress: 100 })

  // Convert to serializable format
  const org: OrganizationDTO = {
    people: Object.fromEntries(people),
    departments: Object.fromEntries(departments),
    rootIds,
    completenessScore,
    inferenceStats: stats,
  }

  return { organization: org, questions }
}

function buildPeople(
  records: Record<string, string>[],
  mapping: ColumnMapping
): Map<string, Person> {
  const people = new Map<string, Person>()

  // Find which CSV columns map to which fields
  const nameCol = Object.entries(mapping).find(([, v]) => v === 'name')?.[0]
  const titleCol = Object.entries(mapping).find(([, v]) => v === 'title')?.[0]
  const deptCol = Object.entries(mapping).find(([, v]) => v === 'department')?.[0]
  const reportsToCol = Object.entries(mapping).find(([, v]) => v === 'reports_to')?.[0]
  const emailCol = Object.entries(mapping).find(([, v]) => v === 'email')?.[0]
  const locationCol = Object.entries(mapping).find(([, v]) => v === 'location')?.[0]
  const idCol = Object.entries(mapping).find(([, v]) => v === 'employee_id')?.[0]

  if (!nameCol) throw new Error('No name column mapped')

  for (const record of records) {
    const name = record[nameCol]?.trim()
    if (!name) continue

    const id = (idCol && record[idCol]?.trim()) || nanoid(10)

    const person: Person = {
      id,
      name,
      rawTitle: (titleCol && record[titleCol]?.trim()) || '',
      normalizedTitle: '',
      seniorityLevel: 'unknown',
      seniorityScore: 0,
      department: (deptCol && record[deptCol]?.trim()) || null,
      reportsTo: (reportsToCol && record[reportsToCol]?.trim()) || null,
      reportsToConfidence: 'low' as ConfidenceLevel,
      reportsToSource: 'explicit',
      directReports: [],
      flags: [],
      email: (emailCol && record[emailCol]?.trim()) || undefined,
      location: (locationCol && record[locationCol]?.trim()) || undefined,
      rawData: record,
    }

    people.set(id, person)
  }

  return people
}

/**
 * Auto-detect column mapping from header names
 */
export function autoDetectColumns(headers: string[]): ColumnMapping {
  const mapping: ColumnMapping = {}

  const patterns: Record<string, RegExp> = {
    name: /^(name|full\s*name|employee\s*name|person|employee|staff\s*name|worker)$/i,
    title: /^(title|job\s*title|position|role|designation|job\s*role|job\s*position)$/i,
    department: /^(department|dept|team|division|group|unit|function|org|organization|organisation|business\s*unit)$/i,
    reports_to: /^(reports?\s*to|manager|line\s*manager|mgr|supervisor|boss|reporting\s*to|direct\s*manager|manager\s*name)$/i,
    email: /^(email|e-?mail|email\s*address|work\s*email)$/i,
    location: /^(location|office|city|site|region|country|base)$/i,
    employee_id: /^(id|employee\s*id|emp\s*id|staff\s*id|worker\s*id|number|employee\s*number|emp\s*no)$/i,
    account_name: /^(account|account\s*name|company|company\s*name|org|firm|bank|employer|institution)$/i,
    level: /^(level|grade|rank|seniority|band|tier)$/i,
    start_date: /^(start\s*date|joined|hire\s*date|from|date\s*joined|start|joining\s*date)$/i,
  }

  for (const header of headers) {
    let matched = false
    for (const [field, pattern] of Object.entries(patterns)) {
      if (pattern.test(header.trim())) {
        mapping[header] = field as any
        matched = true
        break
      }
    }
    if (!matched) {
      mapping[header] = 'ignore'
    }
  }

  return mapping
}
