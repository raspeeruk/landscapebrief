import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | CompBrief',
  description: 'Get in touch with the CompBrief team.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A]">CompBrief</Link>
        </div>
        <div className="bg-[#FAFAF8] border border-[#E2E1DE] rounded-lg p-8">
          <h1 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1B2A4A] mb-1">Get in touch</h1>
          <p className="text-sm text-[#9BA8B4] mb-6">Have a question or need help? We'll get back to you within 24 hours.</p>

          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/contact/thanks">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>

            <label className="block text-xs font-medium text-[#9BA8B4] uppercase tracking-wide mb-1.5">Name</label>
            <input name="name" type="text" required placeholder="Your name" className="w-full text-sm border border-[#E2E1DE] rounded-md px-3 py-2.5 bg-white text-[#1B2A4A] placeholder:text-[#9BA8B4]/50 focus:outline-none focus:ring-2 focus:ring-[#C1440E] mb-4" />

            <label className="block text-xs font-medium text-[#9BA8B4] uppercase tracking-wide mb-1.5">Email</label>
            <input name="email" type="email" required placeholder="you@company.com" className="w-full text-sm border border-[#E2E1DE] rounded-md px-3 py-2.5 bg-white text-[#1B2A4A] placeholder:text-[#9BA8B4]/50 focus:outline-none focus:ring-2 focus:ring-[#C1440E] mb-4" />

            <label className="block text-xs font-medium text-[#9BA8B4] uppercase tracking-wide mb-1.5">Message</label>
            <textarea name="message" rows={5} required placeholder="How can we help?" className="w-full text-sm border border-[#E2E1DE] rounded-md px-3 py-2.5 bg-white text-[#1B2A4A] placeholder:text-[#9BA8B4]/50 focus:outline-none focus:ring-2 focus:ring-[#C1440E] resize-none mb-6" />

            <button type="submit" className="bg-[#1B2A4A] text-white text-sm font-medium rounded-md px-8 py-2.5 hover:bg-[#0F1A2E] transition-colors">Send message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
