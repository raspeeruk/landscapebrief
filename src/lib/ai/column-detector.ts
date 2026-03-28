import { getClient } from './client'
import { COLUMN_DETECTION_PROMPT } from './prompts'
import type { ColumnMapping, StandardField } from '@/types'

const VALID_FIELDS: StandardField[] = ['name', 'title', 'department', 'reports_to', 'email', 'location', 'employee_id', 'ignore']

export async function detectColumnsWithAI(headers: string[]): Promise<ColumnMapping> {
  const client = getClient()

  const prompt = COLUMN_DETECTION_PROMPT.replace('{headers}', JSON.stringify(headers))

  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }],
  })

  const text = response.content[0].type === 'text' ? response.content[0].text : ''

  try {
    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) throw new Error('No JSON found in response')

    const parsed = JSON.parse(jsonMatch[0]) as Record<string, string>

    // Validate and clean
    const mapping: ColumnMapping = {}
    for (const header of headers) {
      const value = parsed[header]?.toLowerCase() as StandardField
      mapping[header] = VALID_FIELDS.includes(value) ? value : 'ignore'
    }

    return mapping
  } catch {
    // Fallback: return empty mapping
    const mapping: ColumnMapping = {}
    for (const header of headers) {
      mapping[header] = 'ignore'
    }
    return mapping
  }
}
