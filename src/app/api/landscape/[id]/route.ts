import { NextRequest } from 'next/server'
import { getLandscape } from '@/lib/session-store'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const landscape = await getLandscape(id)

  if (!landscape) {
    return new Response(JSON.stringify({ error: 'Landscape not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return new Response(JSON.stringify(landscape), {
    headers: { 'Content-Type': 'application/json' },
  })
}
