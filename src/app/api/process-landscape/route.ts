import { NextRequest } from 'next/server'
import { nanoid } from 'nanoid'
import { runLandscapePipeline } from '@/lib/engine/landscape-pipeline'
import { setLandscape } from '@/lib/session-store'
import { createClient } from '@/lib/supabase/server'

export interface LandscapeProcessRequest {
  csvContent: string
  nameColumn: string
  descriptionColumn?: string
  attributeColumns: string[]
  yourCompanyName?: string
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as LandscapeProcessRequest

    if (!body.csvContent || !body.nameColumn) {
      return new Response(
        JSON.stringify({ error: 'csvContent and nameColumn required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Parse CSV into rows
    const Papa = (await import('papaparse')).default
    const parsed = Papa.parse<Record<string, string>>(body.csvContent, {
      header: true,
      skipEmptyLines: true,
    })

    const rows = parsed.data as Record<string, string>[]
    if (rows.length === 0) {
      return new Response(
        JSON.stringify({ error: 'CSV has no data rows' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const sessionId = nanoid(12)
    const encoder = new TextEncoder()

    const stream = new ReadableStream({
      async start(controller) {
        const send = (data: Record<string, unknown>) => {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`))
        }

        try {
          const landscape = await runLandscapePipeline(
            {
              rows,
              nameColumn: body.nameColumn,
              descriptionColumn: body.descriptionColumn,
              attributeColumns: body.attributeColumns,
              yourCompanyName: body.yourCompanyName,
            },
            (progress) => {
              send({ type: 'progress', ...progress })
            }
          )

          // Store landscape
          await setLandscape(sessionId, landscape, user?.id)

          send({ type: 'complete', sessionId })
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
