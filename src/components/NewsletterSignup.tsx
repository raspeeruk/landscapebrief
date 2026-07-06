'use client'

import { useState } from 'react'

/** Attribution: current pathname plus utm_source/utm_medium/utm_campaign from the URL. */
function currentAttribution() {
  if (typeof window === 'undefined') return { page: '', source: '' }
  const params = new URLSearchParams(window.location.search)
  const utm = ['utm_source', 'utm_medium', 'utm_campaign']
    .map(key => params.get(key)?.trim())
    .filter(Boolean)
    .join('/')
  return { page: window.location.pathname, source: utm || 'footer' }
}

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website, ...currentAttribution() }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        setError(typeof data.error === 'string' ? data.error : 'Could not subscribe right now')
      }
    } catch {
      setStatus('error')
      setError('Could not subscribe right now')
    }
  }

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-10">
      <div className="h-px bg-[#E2E1DE] mb-8" />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-[440px]">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-widest mb-2">
            The Landscape Letter
          </p>
          <p className="text-sm text-[#6B7280] leading-relaxed">
            One brief a month on reading competitive landscapes. No noise, unsubscribe anytime.
          </p>
        </div>
        {status === 'success' ? (
          <p className="text-sm text-[#166534]" role="status">
            You are on the list. The next brief will find you.
          </p>
        ) : (
          <div className="w-full md:w-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                name="website"
                value={website}
                onChange={e => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', height: '1px', width: '1px', overflow: 'hidden' }}
              />
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full sm:w-[280px] bg-white border border-[#E2E1DE] rounded px-4 py-3 text-sm text-[#1B2A4A] placeholder:text-[#9BA8B4] focus:outline-none focus:border-[#1B2A4A] transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-[#1B2A4A] text-white px-6 py-3 rounded text-sm font-medium hover:bg-[#0F1A2E] transition-colors disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Get the brief'}
              </button>
            </form>
            {status === 'error' && (
              <p className="mt-2 text-sm text-[#991B1B]" role="alert">
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
