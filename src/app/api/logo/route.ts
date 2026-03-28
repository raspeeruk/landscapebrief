import { NextRequest, NextResponse } from 'next/server'
import { guessDomain, getLogoUrl, getInitialsPlaceholder } from '@/lib/engine/logo-fetcher'

export async function GET(req: NextRequest) {
  const domain = req.nextUrl.searchParams.get('domain')
  const orgName = req.nextUrl.searchParams.get('org')

  const resolvedDomain = domain || (orgName ? guessDomain(orgName) : '')

  if (!resolvedDomain) {
    // Return initials placeholder
    const fallback = getInitialsPlaceholder(orgName || '?')
    return NextResponse.json({ url: fallback, base64: fallback, domain: '' })
  }

  const logoUrl = getLogoUrl(resolvedDomain)

  try {
    const res = await fetch(logoUrl, { signal: AbortSignal.timeout(5000) })
    if (!res.ok) throw new Error(`Logo fetch failed: ${res.status}`)

    const buffer = await res.arrayBuffer()
    const contentType = res.headers.get('content-type') || 'image/png'
    const base64 = `data:${contentType};base64,${Buffer.from(buffer).toString('base64')}`

    return NextResponse.json({ url: logoUrl, base64, domain: resolvedDomain })
  } catch {
    // Fallback to initials
    const fallback = getInitialsPlaceholder(orgName || resolvedDomain.split('.')[0])
    return NextResponse.json({ url: fallback, base64: fallback, domain: resolvedDomain })
  }
}
