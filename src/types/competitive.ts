export type CompetitorTier = 'direct' | 'indirect' | 'aspirational' | 'emerging'

export interface Competitor {
  id: string
  name: string
  description: string
  tier: CompetitorTier
  attributes: Record<string, string | number> // flexible key-value pairs from CSV
  // Calculated by AI:
  axisX: number // -100 to 100, position on X axis
  axisY: number // -100 to 100, position on Y axis
  cluster: string // cluster/category name
  strengths: string[]
  weaknesses: string[]
  differentiators: string[]
  confidence: 'high' | 'medium' | 'low'
}

export interface LandscapeDTO {
  id: string
  title: string
  axisXLabel: string // e.g. "Price" or "Feature Depth"
  axisYLabel: string // e.g. "Market Share" or "Ease of Use"
  competitors: Record<string, Competitor>
  clusters: { id: string; name: string; competitorIds: string[] }[]
  whitespaceOpportunities: string[] // gaps in the landscape
  executiveSummary: string
  yourPosition?: { axisX: number; axisY: number; name: string }
}
