import Anthropic from '@anthropic-ai/sdk'
import { nanoid } from 'nanoid'
import type { LandscapeDTO, Competitor, CompetitorTier } from '@/types/competitive'

function getClient() {
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
}

export interface LandscapeInput {
  yourCompanyName?: string
  rows: Record<string, string>[]  // parsed CSV rows
  nameColumn: string
  descriptionColumn?: string
  attributeColumns: string[] // user-labelled attribute columns
}

export interface LandscapePipelineProgress {
  step: string
  progress: number
  detail?: string
}

export async function runLandscapePipeline(
  input: LandscapeInput,
  onProgress?: (p: LandscapePipelineProgress) => void
): Promise<LandscapeDTO> {
  onProgress?.({ step: 'Parsing competitors', progress: 10 })

  // Build competitor list from CSV rows
  const competitorInputs = input.rows
    .filter(row => row[input.nameColumn]?.trim())
    .map(row => {
      const attrs: Record<string, string> = {}
      for (const col of input.attributeColumns) {
        if (row[col]?.trim()) {
          attrs[col] = row[col].trim()
        }
      }
      return {
        name: row[input.nameColumn].trim(),
        description: input.descriptionColumn ? (row[input.descriptionColumn]?.trim() || '') : '',
        attributes: attrs,
      }
    })

  if (competitorInputs.length === 0) {
    throw new Error('No valid competitors found in CSV')
  }

  onProgress?.({ step: 'Analysing competitive landscape', progress: 30, detail: `Processing ${competitorInputs.length} competitors` })

  const prompt = `You are a strategy consultant building a competitive landscape analysis.

Competitors:
${JSON.stringify(competitorInputs, null, 2)}

${input.yourCompanyName ? `User's company (to position separately): ${input.yourCompanyName}` : ''}

Tasks:
1. Determine the best X and Y axes for positioning (based on what attributes vary most and are most strategically meaningful). Name them clearly (e.g. "Price Point", "Feature Depth", "Market Share", "Ease of Use").
2. Position each competitor on the 2×2 grid (-100 to 100 on each axis, where -100 is low/left and 100 is high/right).
3. Classify each competitor as one of: direct, indirect, aspirational, emerging.
4. Group competitors into 3-5 meaningful named clusters.
5. Identify 2-4 whitespace opportunities (strategic gaps visible in the landscape).
6. Write a 3-sentence executive summary.
7. Identify 2-3 strengths, weaknesses, and differentiators for each competitor.
8. Assign a confidence score (high/medium/low) based on available data.
${input.yourCompanyName ? `9. Position "${input.yourCompanyName}" on the grid too.` : ''}

Return ONLY valid JSON matching this exact structure:
{
  "title": "Competitive Landscape: [Market/Industry]",
  "axisXLabel": "...",
  "axisYLabel": "...",
  "competitors": {
    "id_here": {
      "id": "id_here",
      "name": "...",
      "description": "...",
      "tier": "direct|indirect|aspirational|emerging",
      "attributes": {},
      "axisX": 0,
      "axisY": 0,
      "cluster": "...",
      "strengths": ["...", "..."],
      "weaknesses": ["...", "..."],
      "differentiators": ["...", "..."],
      "confidence": "high|medium|low"
    }
  },
  "clusters": [
    { "id": "c1", "name": "...", "competitorIds": ["..."] }
  ],
  "whitespaceOpportunities": ["...", "..."],
  "executiveSummary": "...",
  ${input.yourCompanyName ? `"yourPosition": { "axisX": 0, "axisY": 0, "name": "${input.yourCompanyName}" }` : '"yourPosition": null'}
}`

  onProgress?.({ step: 'Claude is positioning competitors', progress: 50 })

  const message = await getClient().messages.create({
    model: 'claude-opus-4-5',
    max_tokens: 4096,
    messages: [{ role: 'user', content: prompt }],
  })

  const responseText = message.content[0].type === 'text' ? message.content[0].text : ''

  onProgress?.({ step: 'Processing AI response', progress: 80 })

  // Extract JSON from response (strip any surrounding markdown)
  const jsonMatch = responseText.match(/\{[\s\S]*\}/)
  if (!jsonMatch) {
    throw new Error('AI returned invalid response — no JSON found')
  }

  let parsed: Omit<LandscapeDTO, 'id'>
  try {
    parsed = JSON.parse(jsonMatch[0])
  } catch {
    throw new Error('AI returned malformed JSON')
  }

  // Ensure all competitors have IDs
  const competitors: Record<string, Competitor> = {}
  for (const [key, comp] of Object.entries(parsed.competitors)) {
    const id = comp.id || nanoid(10)
    competitors[id] = {
      ...comp,
      id,
      tier: (comp.tier as CompetitorTier) || 'indirect',
      attributes: comp.attributes || {},
      strengths: comp.strengths || [],
      weaknesses: comp.weaknesses || [],
      differentiators: comp.differentiators || [],
    }
  }

  onProgress?.({ step: 'Complete', progress: 100 })

  return {
    id: nanoid(10),
    title: parsed.title || 'Competitive Landscape',
    axisXLabel: parsed.axisXLabel || 'X Axis',
    axisYLabel: parsed.axisYLabel || 'Y Axis',
    competitors,
    clusters: parsed.clusters || [],
    whitespaceOpportunities: parsed.whitespaceOpportunities || [],
    executiveSummary: parsed.executiveSummary || '',
    yourPosition: parsed.yourPosition || undefined,
  }
}
