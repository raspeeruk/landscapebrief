import { NextRequest } from 'next/server'
import { nanoid } from 'nanoid'
import { runPipeline } from '@/lib/engine'
import { setSession } from '@/lib/session-store'
import { createClient } from '@/lib/supabase/server'
import type { Session, ColumnMapping } from '@/types'

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

    const sessionId = nanoid(12)
    const encoder = new TextEncoder()

    const stream = new ReadableStream({
      async start(controller) {
        const send = (data: Record<string, unknown>) => {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`))
        }

        try {
          const result = await runPipeline(
            csvContent,
            columnMapping,
            (progress) => {
              send({ type: 'progress', ...progress })
            }
          )

          const session: Session = {
            id: sessionId,
            status: result.questions.length > 0 ? 'reviewing' : 'chart-ready',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            fileName: 'upload.csv',
            rawData: null,
            headers: null,
            columnMapping,
            organization: result.organization,
            questions: result.questions,
            answeredQuestions: [],
            exportSettings: null,
            shareId: null,
          }

          await setSession(session, user?.id)

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
