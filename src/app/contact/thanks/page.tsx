import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Message Sent | CompBrief' }

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#FAFAF8] border border-[#E2E1DE] rounded-lg p-8 text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-2">Thanks for reaching out</h1>
        <p className="text-sm text-[#9BA8B4] mb-6">We've received your message and will get back to you within 24 hours.</p>
        <Link href="/" className="text-sm font-medium bg-[#1B2A4A] text-white px-6 py-2.5 rounded-md hover:bg-[#0F1A2E] transition-colors inline-block">Back to homepage</Link>
      </div>
    </div>
  )
}
