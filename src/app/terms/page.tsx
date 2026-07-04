import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | CompBrief',
  description: 'The terms that govern your use of CompBrief, the competitive landscape tool operated by Two Cores Operations Ltd.',
}

function NavBar() {
  return (
    <nav className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between border-b border-[#E2E1DE]">
      <Link href="/" className="flex items-center gap-2">
        <svg className="w-5 h-5 text-[#C1440E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3zm9 0v18M3 12h18" />
        </svg>
        <span className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1B2A4A]">CompBrief</span>
      </Link>
      <Link href="/auth/signup" className="text-sm font-medium bg-[#1B2A4A] text-white px-5 py-2 rounded hover:bg-[#0F1A2E] transition-colors">
        Start free
      </Link>
    </nav>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-4">
      {children}
    </h2>
  )
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <NavBar />

      <main className="max-w-[768px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Legal
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="font-[family-name:var(--font-mono)] text-xs text-[#9BA8B4] uppercase tracking-wider mb-6">
            Last updated: 4 July 2026
          </p>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            These terms govern your use of CompBrief (landscapebrief.com), operated by Two Cores Operations Ltd, a company registered in England and Wales. By creating an account or using the service you agree to them. If you do not agree, please do not use CompBrief.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-12">
          <SectionHeading>1. The service</SectionHeading>
          <p className="text-[#6B7280] leading-relaxed">
            CompBrief turns a CSV of competitors into a competitive landscape. You upload competitor data, map the columns, and AI positions each competitor on a 2x2 quadrant map, groups them into clusters, identifies whitespace, and writes a strategy brief. Depending on your plan, you can save landscapes, export them, and share them with your team or clients via a link.
          </p>
        </section>

        <section className="mb-12">
          <SectionHeading>2. Your account</SectionHeading>
          <ul className="space-y-3 text-[#6B7280] leading-relaxed list-disc pl-5 marker:text-[#9BA8B4]">
            <li>You must provide an accurate email address. We sign you in with magic links sent to that address, so keep access to your inbox secure.</li>
            <li>You are responsible for all activity under your account and for anyone you share a landscape link with.</li>
            <li>You must be able to enter a binding contract (for example, be at least 18 or use the service on behalf of a business).</li>
          </ul>
        </section>

        <section className="mb-12">
          <SectionHeading>3. Free tier and paid plans</SectionHeading>
          <ul className="space-y-3 text-[#6B7280] leading-relaxed list-disc pl-5 marker:text-[#9BA8B4]">
            <li>The free tier supports up to 10 competitors per landscape, and free landscapes expire after around 2 hours.</li>
            <li>Paid subscriptions unlock features such as unlimited competitors, permanently saved landscapes, exports, and team or client sharing. The current prices and plan features are those shown at checkout.</li>
            <li>Payments and subscriptions are processed by Stripe. Subscriptions renew automatically until cancelled.</li>
            <li>You can cancel at any time from your billing settings. Your plan stays active until the end of the period you have paid for. Except where the law requires otherwise, fees already paid are not refunded.</li>
            <li>Where a trial is offered, you can cancel before the trial ends to avoid being charged.</li>
            <li>We may change prices for future billing periods and will give you reasonable notice before any change takes effect.</li>
          </ul>
        </section>

        <section className="mb-12">
          <SectionHeading>4. Acceptable use</SectionHeading>
          <p className="text-[#6B7280] leading-relaxed mb-4">You agree not to:</p>
          <ul className="space-y-3 text-[#6B7280] leading-relaxed list-disc pl-5 marker:text-[#9BA8B4]">
            <li>Upload data you do not have the right to use, including confidential information obtained unlawfully.</li>
            <li>Use the service for anything unlawful, or to harass, defame, or harm others.</li>
            <li>Attempt to break, overload, probe, or reverse engineer the service, or access other users&apos; data.</li>
            <li>Resell or white-label the service beyond what your plan explicitly allows.</li>
            <li>Use automated tools to scrape the service or generate landscapes at abusive volume.</li>
          </ul>
        </section>

        <section className="mb-12">
          <SectionHeading>5. Your content</SectionHeading>
          <p className="text-[#6B7280] leading-relaxed">
            You keep all rights to the data you upload and to the landscapes, maps, and briefs generated from it. You grant us a limited licence to store and process that data solely to provide the service to you, as described in our{' '}
            <Link href="/privacy" className="text-[#C1440E] hover:text-[#A33A0C] underline underline-offset-2">Privacy Policy</Link>. Your data is not used to train AI models. We and our licensors keep all rights to the CompBrief software, design, and brand.
          </p>
        </section>

        <section className="mb-12">
          <SectionHeading>6. AI output and no advice</SectionHeading>
          <p className="text-[#6B7280] leading-relaxed">
            The competitive information in your landscapes comes from data you provide or from publicly available sources, and the analysis is generated by AI. Landscapes, clusters, whitespace suggestions, and briefs are informational only. They are not financial, legal, investment, or professional advice, and they may contain errors or omissions. Verify anything important before you rely on it for a business decision. We are not responsible for decisions you make based on the output.
          </p>
        </section>

        <section className="mb-12">
          <SectionHeading>7. Availability</SectionHeading>
          <p className="text-[#6B7280] leading-relaxed">
            We work to keep CompBrief fast and available, but the service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not guarantee uninterrupted or error-free operation, and we may modify or discontinue features with reasonable notice where practical.
          </p>
        </section>

        <section className="mb-12">
          <SectionHeading>8. Liability</SectionHeading>
          <p className="text-[#6B7280] leading-relaxed">
            To the fullest extent permitted by law, our total liability to you for all claims arising out of or relating to the service is limited to the fees you paid us in the 12 months before the claim arose (or zero if you use only the free tier). We are not liable for indirect or consequential losses, lost profits, or lost data. Nothing in these terms excludes or limits liability that cannot be excluded under the law of England and Wales, including liability for death or personal injury caused by negligence, or for fraud.
          </p>
        </section>

        <section className="mb-12">
          <SectionHeading>9. Termination</SectionHeading>
          <ul className="space-y-3 text-[#6B7280] leading-relaxed list-disc pl-5 marker:text-[#9BA8B4]">
            <li>You can stop using CompBrief and request deletion of your account and data at any time via the{' '}
              <Link href="/contact" className="text-[#C1440E] hover:text-[#A33A0C] underline underline-offset-2">contact page</Link>.</li>
            <li>We may suspend or terminate your access if you materially breach these terms, and will tell you why unless the law prevents it.</li>
            <li>Sections that by their nature should survive termination (including your content rights, liability limits, and governing law) survive it.</li>
          </ul>
        </section>

        <section className="mb-12">
          <SectionHeading>10. Changes to these terms</SectionHeading>
          <p className="text-[#6B7280] leading-relaxed">
            We may update these terms from time to time. When we do, we will update this page and the date at the top, and flag material changes on the site. Continued use of the service after a change means you accept the updated terms.
          </p>
        </section>

        <section className="mb-4">
          <SectionHeading>11. Governing law and contact</SectionHeading>
          <p className="text-[#6B7280] leading-relaxed">
            These terms are governed by the law of England and Wales, and the courts of England and Wales have exclusive jurisdiction over any dispute arising from them. Questions about these terms: reach us through the{' '}
            <Link href="/contact" className="text-[#C1440E] hover:text-[#A33A0C] underline underline-offset-2">contact page</Link>.
          </p>
        </section>
      </main>

      <footer className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="h-px bg-[#E2E1DE] mb-8" />
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#9BA8B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3zm9 0v18M3 12h18" />
            </svg>
            <span className="font-[family-name:var(--font-heading)] text-lg text-[#9BA8B4]">CompBrief</span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-[#9BA8B4]">
            <Link href="/auth/login" className="hover:text-[#1B2A4A] transition-colors">Login</Link>
            <Link href="/privacy" className="hover:text-[#1B2A4A] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#1B2A4A] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
