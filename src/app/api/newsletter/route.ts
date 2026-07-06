import { NextRequest, NextResponse } from 'next/server'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: unknown): string {
  return String(value ?? '')
    .replace(/[\r\n\t]/g, ' ')
    .trim()
    .slice(0, 200)
}

export async function POST(request: NextRequest) {
  let email = ''
  let website = ''
  let page = ''
  let source = ''

  try {
    const contentType = request.headers.get('content-type') || ''
    if (contentType.includes('application/json')) {
      const body = await request.json()
      email = typeof body.email === 'string' ? body.email.trim() : ''
      website = typeof body.website === 'string' ? body.website.trim() : ''
      page = clean(body.page)
      source = clean(body.source)
    } else {
      const form = await request.formData()
      email = String(form.get('email') || '').trim()
      website = String(form.get('website') || '').trim()
      page = clean(form.get('page'))
      source = clean(form.get('source'))
    }
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // Honeypot filled: almost certainly a bot. Report success, forward nothing.
  if (website) {
    return NextResponse.json({ ok: true })
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 })
  }

  try {
    const res = await fetch('https://rogerson-signups.netlify.app/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'newsletter',
        email,
        site: 'landscapebrief.com',
        source: source || 'footer',
        ...(page ? { page } : {}),
      }).toString(),
      signal: AbortSignal.timeout(8000),
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Could not subscribe right now' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Could not subscribe right now' }, { status: 502 })
  }
}
