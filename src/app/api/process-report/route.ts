import { NextRequest } from 'next/server'
import { buildMarketReport } from '@/lib/engine/report-pipeline'
import { resolveLogoUrl } from '@/lib/engine/logo-fetcher'
import { setReport } from '@/lib/session-store'
import { createClient } from '@/lib/supabase/server'
import type { ColumnMapping } from '@/types'

export async function POST(req: NextRequest) {
  try {
    const { csvContent, columnMapping } = await req.json() as {
      csvContent: string
      columnMapping: ColumnMapping
    }

    if (!csvContent || !columnMapping) {
      return new Response(
        JSON.stringify({ error: 'csvContent and columnMapping required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Get current user (optional — demo mode if no auth)
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const encoder = new TextEncoder()

    const stream = new ReadableStream({
      async start(controller) {
        const send = (data: Record<string, unknown>) => {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`))
        }

        try {
          const report = buildMarketReport(
            csvContent,
            columnMapping,
            (progress) => {
              send({ type: 'progress', ...progress })
            }
          )

          // Fetch logos as base64
          send({ type: 'progress', step: 'Fetching logos', progress: 85 })
          for (const org of report.organizations) {
            const logo = resolveLogoUrl(org.name)
            if (logo.logoUrl) {
              try {
                const res = await fetch(logo.logoUrl, { signal: AbortSignal.timeout(4000) })
                if (res.ok) {
                  const buffer = await res.arrayBuffer()
                  const contentType = res.headers.get('content-type') || 'image/png'
                  org.logoUrl = `data:${contentType};base64,${Buffer.from(buffer).toString('base64')}`
                } else {
                  org.logoUrl = logo.fallbackDataUrl
                }
              } catch {
                org.logoUrl = logo.fallbackDataUrl
              }
            } else {
              org.logoUrl = logo.fallbackDataUrl
            }
          }

          await setReport(report, user?.id)

          send({ type: 'progress', step: 'Complete', progress: 100 })
          send({ type: 'complete', reportId: report.id })
        } catch (error) {
          send({ type: 'error', error: error instanceof Error ? error.message : 'Processing failed' })
        } finally {
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Processing failed' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
