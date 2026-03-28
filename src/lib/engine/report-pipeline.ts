import type { ColumnMapping } from '@/types'
import type { MarketReport, OrgSection, LocationGroup, PersonEntry } from '@/types'
import { parseCSV, csvToRecords } from './csv-parser'
import { nanoid } from 'nanoid'

// Location suffixes to strip when grouping by parent org
const LOCATION_SUFFIXES = [
  'Geneva', 'London', 'Zurich', 'Tel Aviv', 'Luxembourg', 'New York',
  'Monaco', 'Singapore', 'Hong Kong', 'Dubai', 'Miami', 'Paris',
  'Frankfurt', 'Milan', 'Madrid', 'Amsterdam', 'Brussels', 'Vienna',
  'Sydney', 'Tokyo', 'Shanghai', 'Mumbai', 'São Paulo', 'Toronto',
  'Chicago', 'Los Angeles', 'San Francisco', 'Boston', 'Washington',
  'Abu Dhabi', 'Bahrain', 'Doha', 'Riyadh', 'Jeddah',
]

// Seniority sort order (lower = more senior)
const LEVEL_ORDER: Record<string, number> = {
  'chairman': 0,
  'managing director': 1,
  'md': 1,
  'executive director': 2,
  'ed': 2,
  'senior vice president': 3,
  'svp': 3,
  'director': 4,
  'vice president': 5,
  'vp': 5,
  'associate director': 6,
  'senior associate': 7,
  'associate': 8,
  'analyst': 9,
}

// RM keywords
const RM_PATTERNS = [
  /\brelationship\s*manager\b/i,
  /\brm\b/i,
  /\bclient\s*advisor\b/i,
  /\bclient\s*relationship\b/i,
  /\bprivate\s*banker\b/i,
  /\bbanker\b/i,
  /\bwealth\s*advisor\b/i,
]

// IA/IC keywords
const IA_IC_PATTERNS = [
  /\binvestment\s*advis[oe]r\b/i,
  /\binvestment\s*counsel?l?or\b/i,
  /\b(?:ia|ic)\b/i,
  /\bportfolio\s*manager\b/i,
  /\binvestment\s*manager\b/i,
  /\bdiscretionary\b/i,
  /\basset\s*manager\b/i,
]

function classifyRoleType(jobTitle: string): 'rm' | 'ia-ic' | 'other' {
  for (const p of RM_PATTERNS) {
    if (p.test(jobTitle)) return 'rm'
  }
  for (const p of IA_IC_PATTERNS) {
    if (p.test(jobTitle)) return 'ia-ic'
  }
  return 'other'
}

function stripLocationSuffix(accountName: string): string {
  let cleaned = accountName.trim()
  for (const loc of LOCATION_SUFFIXES) {
    // Remove trailing location with various separators
    const patterns = [
      new RegExp(`[\\s,\\-–—]+${loc}\\s*$`, 'i'),
      new RegExp(`\\(${loc}\\)\\s*$`, 'i'),
      new RegExp(`\\[${loc}\\]\\s*$`, 'i'),
    ]
    for (const p of patterns) {
      cleaned = cleaned.replace(p, '').trim()
    }
  }
  return cleaned
}

function getLevelSortOrder(level: string): number {
  const normalized = level.toLowerCase().trim()
  return LEVEL_ORDER[normalized] ?? 99
}

function abbreviateTitle(title: string): string {
  return title
    .replace(/\bRelationship Manager\b/i, 'RM')
    .replace(/\bInvestment Advis[oe]r\b/i, 'IA')
    .replace(/\bInvestment Counsel?l?or\b/i, 'IC')
    .replace(/\bPortfolio Manager\b/i, 'PM')
    .replace(/\bManaging Director\b/i, 'MD')
    .replace(/\bExecutive Director\b/i, 'ED')
    .replace(/\bVice President\b/i, 'VP')
    .replace(/\bSenior Vice President\b/i, 'SVP')
    .replace(/\bAssociate Director\b/i, 'AD')
}

export interface ReportPipelineProgress {
  step: string
  progress: number
  detail?: string
}

export function buildMarketReport(
  csvContent: string,
  columnMapping: ColumnMapping,
  onProgress?: (p: ReportPipelineProgress) => void,
): MarketReport {
  // Step 1: Parse CSV
  onProgress?.({ step: 'Parsing CSV', progress: 10 })
  const parsed = parseCSV(csvContent)
  const records = csvToRecords(parsed)

  // Find mapped columns
  const findCol = (field: string) =>
    Object.entries(columnMapping).find(([, v]) => v === field)?.[0]

  const nameCol = findCol('name')
  const titleCol = findCol('title')
  const accountCol = findCol('account_name')
  const levelCol = findCol('level')
  const locationCol = findCol('location')
  const startDateCol = findCol('start_date')
  const deptCol = findCol('department')

  if (!nameCol) throw new Error('No name column mapped')
  if (!accountCol) throw new Error('No account/company column mapped for market report')

  // Step 2: Build person entries from records
  onProgress?.({ step: 'Building person records', progress: 25 })
  const entries: (PersonEntry & { rawAccountName: string; rawLocation: string })[] = []

  for (const record of records) {
    const fullName = record[nameCol]?.trim()
    if (!fullName) continue

    const rawAccountName = (accountCol && record[accountCol]?.trim()) || 'Unknown'
    const jobTitle = (titleCol && record[titleCol]?.trim()) || ''
    const level = (levelCol && record[levelCol]?.trim()) || ''
    const location = (locationCol && record[locationCol]?.trim()) || 'Unknown'
    const startDate = (startDateCol && record[startDateCol]?.trim()) || ''
    const department = (deptCol && record[deptCol]?.trim()) || undefined

    entries.push({
      id: nanoid(10),
      fullName,
      jobTitle: abbreviateTitle(jobTitle),
      level,
      location,
      startDate,
      department,
      roleType: classifyRoleType(jobTitle),
      rawAccountName,
      rawLocation: location,
    })
  }

  // Step 3: Group by parent org (strip location suffixes from account names)
  onProgress?.({ step: 'Grouping by organization', progress: 40, detail: `${entries.length} people found` })

  const orgMap = new Map<string, typeof entries>()
  for (const entry of entries) {
    const parentOrg = stripLocationSuffix(entry.rawAccountName)
    const existing = orgMap.get(parentOrg) || []
    existing.push(entry)
    orgMap.set(parentOrg, existing)
  }

  // Step 4: Within each org, group by location
  onProgress?.({ step: 'Building location groups', progress: 60 })

  const organizations: OrgSection[] = []
  for (const [orgName, people] of orgMap) {
    const locationMap = new Map<string, PersonEntry[]>()
    for (const person of people) {
      const loc = person.rawLocation || 'Unknown'
      const existing = locationMap.get(loc) || []
      existing.push({
        id: person.id,
        fullName: person.fullName,
        jobTitle: person.jobTitle,
        level: person.level,
        location: person.location,
        startDate: person.startDate,
        department: person.department,
        roleType: person.roleType,
      })
      locationMap.set(loc, existing)
    }

    // Sort locations alphabetically, sort people within by seniority
    const locations: LocationGroup[] = [...locationMap.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([name, ppl]) => ({
        name,
        people: ppl.sort((a, b) => getLevelSortOrder(a.level) - getLevelSortOrder(b.level)),
      }))

    organizations.push({
      id: nanoid(10),
      name: orgName,
      headcount: people.length,
      locations,
      hiringActivity: '',
      recentDepartures: '',
      generalComments: '',
      recentActivity: '',
    })
  }

  // Sort orgs alphabetically
  organizations.sort((a, b) => a.name.localeCompare(b.name))

  onProgress?.({ step: 'Complete', progress: 100 })

  const now = new Date()
  const monthYear = now.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })

  return {
    id: nanoid(12),
    title: 'Market Report',
    date: monthYear,
    organizations,
  }
}
