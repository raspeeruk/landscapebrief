export interface MarketReport {
  id: string
  title: string
  date: string
  organizations: OrgSection[]
  clientBranding?: ClientBranding
}

export interface ClientBranding {
  name: string
  phone?: string
  email?: string
  accentColor?: string
  logoUrl?: string
  logoDataUrl?: string
}

export interface OrgSection {
  id: string
  name: string
  logoUrl?: string
  teamAum?: string
  headcount: number
  locations: LocationGroup[]
  hiringActivity: string
  recentDepartures: string
  generalComments: string
  recentActivity: string
}

export interface LocationGroup {
  name: string
  people: PersonEntry[]
}

export interface PersonEntry {
  id: string
  fullName: string
  jobTitle: string
  level: string
  location: string
  startDate: string
  department?: string
  roleType: 'rm' | 'ia-ic' | 'other'
  departed?: boolean
  departedNote?: string
}
