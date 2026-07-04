import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | CompBrief',
  description: 'How CompBrief collects, uses, and protects your data. Operated by Two Cores Operations Ltd, registered in England and Wales.',
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

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <NavBar />

      <main className="max-w-[768px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Legal
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-[family-name:var(--font-mono)] text-xs text-[#9BA8B4] uppercase tracking-wider mb-6">
            Last updated: 4 July 2026
          </p>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            CompBrief (landscapebrief.com) is operated by Two Cores Operations Ltd, a company registered in England and Wales. This policy explains what personal data we collect when you use CompBrief, why we collect it, how long we keep it, and the rights you have over it. We have tried to keep it short and specific to what the product actually does.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-12">
          <SectionHeading>1. Who we are</SectionHeading>
          <p className="text-[#6B7280] leading-relaxed">
            Two Cores Operations Ltd is the data controller for the personal data described in this policy. You can reach us at any time through our{' '}
            <Link href="/contact" className="text-[#C1440E] hover:text-[#A33A0C] underline underline-offset-2">contact page</Link>.
          </p>
        </section>

        <section className="mb-12">
          <SectionHeading>2. What we collect</SectionHeading>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            We collect only what the service needs to work:
          </p>
          <ul className="space-y-3 text-[#6B7280] leading-relaxed list-disc pl-5 marker:text-[#9BA8B4]">
            <li>
              <span className="font-medium text-[#1B2A4A]">Account data.</span> Your email address and, if you choose to provide it, your company name. We sign you in with magic links, so we never store a password.
            </li>
            <li>
              <span className="font-medium text-[#1B2A4A]">Content you upload.</span> The competitor CSVs you upload (company names and any attributes or notes you include), the column mappings you choose, and the landscapes, maps, and briefs generated from them. If you use branding settings on a paid plan, we also store the company details, accent colour, and logo you provide.
            </li>
            <li>
              <span className="font-medium text-[#1B2A4A]">Payment data.</span> Payments are handled entirely by Stripe. We never see or store your card details. We store only your Stripe customer reference, subscription reference, and subscription status so we know which plan you are on.
            </li>
            <li>
              <span className="font-medium text-[#1B2A4A]">Usage data.</span> We use Google Analytics 4 to understand how the site is used (pages visited, device and browser type, approximate location derived from IP address).
            </li>
            <li>
              <span className="font-medium text-[#1B2A4A]">Newsletter and contact messages.</span> If you subscribe to The Landscape Letter we store your email address. If you use the contact form we store your name, email address, and message. Both forms are handled through Netlify Forms.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <SectionHeading>3. Why we collect it</SectionHeading>
          <ul className="space-y-3 text-[#6B7280] leading-relaxed list-disc pl-5 marker:text-[#9BA8B4]">
            <li>To provide the service you signed up for: generating, saving, sharing, and exporting competitive landscapes (performance of a contract).</li>
            <li>To take payment for paid plans and manage your subscription (performance of a contract).</li>
            <li>To understand how the product is used and improve it (legitimate interests).</li>
            <li>To send the newsletter you asked for (consent, which you can withdraw by unsubscribing at any time).</li>
            <li>To reply when you contact us (legitimate interests).</li>
            <li>To meet legal and accounting obligations (legal obligation).</li>
          </ul>
        </section>

        <section className="mb-12">
          <SectionHeading>4. AI processing</SectionHeading>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            When you generate a landscape, the competitor data in your CSV is sent server-side to Anthropic&apos;s Claude API, which chooses the positioning axes, places each competitor, identifies clusters and whitespace, and writes the brief. This data is used only to generate your output. It is not used to train AI models, and we never share it beyond the processing described in this policy.
          </p>
          <p className="text-[#6B7280] leading-relaxed">
            To display competitor logos, we load favicon images from Google&apos;s public favicon service using the competitor&apos;s domain name. Only the domain name is included in that request.
          </p>
        </section>

        <section className="mb-12">
          <SectionHeading>5. How long we keep it</SectionHeading>
          <ul className="space-y-3 text-[#6B7280] leading-relaxed list-disc pl-5 marker:text-[#9BA8B4]">
            <li>Anonymous demo landscapes are temporary and are deleted after around 2 hours.</li>
            <li>Landscapes and reports saved to your account are kept until you delete them or delete your account.</li>
            <li>Account data is kept while your account is active and deleted when your account is deleted.</li>
            <li>Newsletter emails are kept until you unsubscribe.</li>
            <li>Contact messages are kept only as long as needed to handle your enquiry.</li>
            <li>Billing records are kept as long as tax and accounting law requires.</li>
          </ul>
        </section>

        <section className="mb-12">
          <SectionHeading>6. Who we share it with</SectionHeading>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            We never sell your data. We share it only with the service providers that run CompBrief, each acting under their own data processing terms:
          </p>
          <ul className="space-y-3 text-[#6B7280] leading-relaxed list-disc pl-5 marker:text-[#9BA8B4]">
            <li><span className="font-medium text-[#1B2A4A]">Supabase</span>, which provides our database, authentication, and file storage.</li>
            <li><span className="font-medium text-[#1B2A4A]">Stripe</span>, which processes payments and manages subscriptions.</li>
            <li><span className="font-medium text-[#1B2A4A]">Anthropic</span>, which provides the Claude API used to generate landscapes and briefs.</li>
            <li><span className="font-medium text-[#1B2A4A]">Google</span>, which provides Google Analytics 4 and the favicon service used for competitor logos.</li>
            <li><span className="font-medium text-[#1B2A4A]">Netlify</span>, which hosts the site and handles the newsletter and contact forms.</li>
          </ul>
          <p className="text-[#6B7280] leading-relaxed mt-4">
            Some of these providers store data outside the UK, including in the United States. Where that happens, transfers are covered by appropriate safeguards such as the UK extension to the EU-US Data Privacy Framework or standard contractual clauses.
          </p>
        </section>

        <section className="mb-12">
          <SectionHeading>7. Cookies</SectionHeading>
          <p className="text-[#6B7280] leading-relaxed">
            We use essential cookies to keep you signed in (set by our authentication provider, Supabase) and Google Analytics cookies to measure site usage. We do not use advertising cookies.
          </p>
        </section>

        <section className="mb-12">
          <SectionHeading>8. Your rights</SectionHeading>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Under UK GDPR you have the right to:
          </p>
          <ul className="space-y-3 text-[#6B7280] leading-relaxed list-disc pl-5 marker:text-[#9BA8B4]">
            <li>Access a copy of the personal data we hold about you.</li>
            <li>Correct inaccurate data.</li>
            <li>Have your data deleted.</li>
            <li>Restrict or object to certain processing.</li>
            <li>Receive your data in a portable format.</li>
            <li>Withdraw consent at any time where processing is based on consent.</li>
          </ul>
          <p className="text-[#6B7280] leading-relaxed mt-4">
            To exercise any of these rights, contact us through the{' '}
            <Link href="/contact" className="text-[#C1440E] hover:text-[#A33A0C] underline underline-offset-2">contact page</Link>. You also have the right to complain to the Information Commissioner&apos;s Office (ico.org.uk) if you believe we have mishandled your data.
          </p>
        </section>

        <section className="mb-12">
          <SectionHeading>9. Changes to this policy</SectionHeading>
          <p className="text-[#6B7280] leading-relaxed">
            If we change this policy, we will update it here and revise the date at the top. Material changes will be flagged on the site. Your continued use of CompBrief after a change means you accept the updated policy.
          </p>
        </section>

        <section className="mb-4">
          <SectionHeading>10. Contact</SectionHeading>
          <p className="text-[#6B7280] leading-relaxed">
            Questions about this policy or your data: reach us through the{' '}
            <Link href="/contact" className="text-[#C1440E] hover:text-[#A33A0C] underline underline-offset-2">contact page</Link>. You can also review our{' '}
            <Link href="/terms" className="text-[#C1440E] hover:text-[#A33A0C] underline underline-offset-2">Terms of Service</Link>.
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
