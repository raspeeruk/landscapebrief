import Link from 'next/link'

// Demo data for the interactive quadrant shown on the landing page
const DEMO_COMPANIES = [
  { name: 'Salesforce', x: 72, y: 65, tier: 'direct' as const },
  { name: 'HubSpot', x: 35, y: 55, tier: 'direct' as const },
  { name: 'Monday.com', x: 20, y: 40, tier: 'indirect' as const },
  { name: 'Notion', x: -10, y: 25, tier: 'emerging' as const },
  { name: 'SAP', x: 85, y: 30, tier: 'aspirational' as const },
  { name: 'Pipedrive', x: 10, y: 45, tier: 'direct' as const },
  { name: 'Zoho CRM', x: -20, y: 55, tier: 'indirect' as const },
  { name: 'Close', x: 5, y: 35, tier: 'emerging' as const },
]

const TIER_COLORS = {
  direct: '#C1440E',
  indirect: '#4A6FA5',
  aspirational: '#1B2A4A',
  emerging: '#9BA8B4',
}

function DemoQuadrant() {
  const W = 520
  const H = 380
  const PAD = 52

  function toX(v: number) { return PAD + ((v + 100) / 200) * (W - PAD * 2) }
  function toY(v: number) { return PAD + ((100 - (v + 100) / 200 * 100) / 100) * (H - PAD * 2) }

  return (
    <div className="bg-[#FAFAF8] border border-[#E2E1DE] rounded-lg overflow-hidden">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 380 }}>
        {/* Quadrant fills */}
        <rect x={PAD} y={PAD} width={(W - PAD * 2) / 2} height={(H - PAD * 2) / 2} fill="#F0EFF5" opacity="0.6" />
        <rect x={PAD + (W - PAD * 2) / 2} y={PAD} width={(W - PAD * 2) / 2} height={(H - PAD * 2) / 2} fill="#FDF8F6" opacity="0.6" />
        <rect x={PAD} y={PAD + (H - PAD * 2) / 2} width={(W - PAD * 2) / 2} height={(H - PAD * 2) / 2} fill="#F8F9FA" opacity="0.4" />
        <rect x={PAD + (W - PAD * 2) / 2} y={PAD + (H - PAD * 2) / 2} width={(W - PAD * 2) / 2} height={(H - PAD * 2) / 2} fill="#FAFAF8" opacity="0.4" />

        {/* Axes */}
        <line x1={PAD} y1={PAD + (H - PAD * 2) / 2} x2={W - PAD} y2={PAD + (H - PAD * 2) / 2} stroke="#1B2A4A" strokeWidth="1" opacity="0.2" />
        <line x1={PAD + (W - PAD * 2) / 2} y1={PAD} x2={PAD + (W - PAD * 2) / 2} y2={H - PAD} stroke="#1B2A4A" strokeWidth="1" opacity="0.2" />
        <rect x={PAD} y={PAD} width={W - PAD * 2} height={H - PAD * 2} fill="none" stroke="#1B2A4A" strokeWidth="0.75" opacity="0.1" />

        {/* Axis labels */}
        <text x={PAD + 4} y={PAD + (H - PAD * 2) / 2 - 6} fill="#9BA8B4" fontSize="9" fontFamily="monospace">← Lower Cost</text>
        <text x={W - PAD - 4} y={PAD + (H - PAD * 2) / 2 - 6} fill="#9BA8B4" fontSize="9" textAnchor="end" fontFamily="monospace">Higher Cost →</text>
        <text x={PAD + (W - PAD * 2) / 2 + 6} y={H - PAD - 4} fill="#9BA8B4" fontSize="9" fontFamily="monospace">SMB Focus</text>
        <text x={PAD + (W - PAD * 2) / 2 + 6} y={PAD + 12} fill="#9BA8B4" fontSize="9" fontFamily="monospace">Enterprise Focus</text>

        {/* Competitor dots */}
        {DEMO_COMPANIES.map(co => (
          <g key={co.name}>
            <circle
              cx={toX(co.x)}
              cy={toY(co.y)}
              r={6}
              fill={TIER_COLORS[co.tier]}
              stroke="white"
              strokeWidth="1.5"
              opacity="0.9"
            />
            <text
              x={toX(co.x) + 9}
              y={toY(co.y) + 4}
              fill="#1B2A4A"
              fontSize="9"
              fontFamily="monospace"
            >
              {co.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Nav */}
      <nav className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between border-b border-[#E2E1DE]">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#C1440E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3zm9 0v18M3 12h18" />
          </svg>
          <span className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1B2A4A]">
            CompBrief
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/auth/login" className="text-sm font-medium text-[#9BA8B4] hover:text-[#1B2A4A] transition-colors">
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="text-sm font-medium bg-[#1B2A4A] text-white px-5 py-2 rounded hover:bg-[#0F1A2E] transition-colors"
          >
            Start free
          </Link>
        </div>
      </nav>

      {/* Hero — split layout */}
      <section className="max-w-[1200px] mx-auto px-6 pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-6">
              Competitive intelligence
            </p>
            <h1 className="hero-heading text-[#1B2A4A] mb-6">
              Competitive landscapes that look like McKinsey slides.
            </h1>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8 max-w-[480px]">
              Upload a competitor CSV. Claude positions them on a 2×2 quadrant, identifies clusters, spots whitespace, and writes the strategy brief. Product managers and CMOs get board-ready analysis in under 3 minutes.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/auth/signup"
                className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors"
              >
                Build your first landscape
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <span className="text-sm text-[#9BA8B4]">Free up to 10 competitors</span>
            </div>
          </div>

          {/* Right: demo quadrant */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="font-[family-name:var(--font-mono)] text-xs text-[#9BA8B4] uppercase tracking-wider">Live demo — CRM market</span>
            </div>
            <DemoQuadrant />
            <div className="mt-3 flex items-center gap-5">
              {Object.entries(TIER_COLORS).map(([tier, color]) => (
                <div key={tier} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#9BA8B4] capitalize">{tier}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6"><div className="h-px bg-[#E2E1DE]" /></div>

      {/* How it works */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-widest uppercase text-[#9BA8B4] mb-6">
              How it works
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-[#1B2A4A] leading-tight">
              CSV in.<br />Strategy out.
            </h2>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                step: '01',
                title: 'Upload CSV',
                desc: 'One row per competitor. Add any columns — pricing tier, market share, employee count, founded year, NPS. Headers don\'t need to be standardised.',
              },
              {
                step: '02',
                title: 'Map columns',
                desc: 'Tell us which column is the company name. Select which attributes to use for positioning. Add your own company name to see where you sit.',
              },
              {
                step: '03',
                title: 'Claude analyses',
                desc: 'Determines the most strategically meaningful axes. Positions every competitor. Groups them into clusters. Identifies whitespace.',
              },
              {
                step: '04',
                title: 'Export or share',
                desc: 'Download the quadrant as PDF for your board deck. Or share a live link with your team. Pro users get the full strategy brief.',
              },
            ].map(item => (
              <div key={item.step}>
                <span className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] tracking-widest">
                  {item.step}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6"><div className="h-px bg-[#E2E1DE]" /></div>

      {/* Sample output preview */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-[#1B2A4A] mb-3">
          The output your deck needs
        </h2>
        <p className="text-[#6B7280] mb-12 max-w-[560px]">
          Clean information design. No AI-looking charts. The kind of analysis that makes your committee say yes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Quadrant preview */}
          <div className="md:col-span-2 bg-white border border-[#E2E1DE] rounded-lg overflow-hidden">
            <div className="bg-[#1B2A4A] px-5 py-3 flex items-center justify-between">
              <span className="font-[family-name:var(--font-mono)] text-xs text-white/60 uppercase tracking-wider">
                2×2 Positioning Map
              </span>
              <span className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E]">
                AI-generated axes
              </span>
            </div>
            <div className="p-4">
              <DemoQuadrant />
            </div>
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-5">
            <div className="bg-white border border-[#E2E1DE] rounded-lg p-5">
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[#9BA8B4] mb-3">
                Executive Summary
              </p>
              <p className="text-sm text-[#1B2A4A] leading-relaxed">
                The CRM market is bifurcated between enterprise incumbents with deep vertical integrations and agile SMB tools competing on ease-of-use. A clear whitespace exists in the mid-market segment combining enterprise-grade analytics with consumer-grade UX.
              </p>
            </div>
            <div className="bg-[#F0EFF5] border border-[#E2E1DE] rounded-lg p-5">
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[#9BA8B4] mb-3">
                Whitespace Opportunities
              </p>
              <ul className="space-y-2 text-sm text-[#1B2A4A]">
                {[
                  'Mid-market with enterprise analytics',
                  'Vertical CRM for professional services',
                  'AI-native workflow automation',
                ].map((o, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#C1440E] font-[family-name:var(--font-mono)] mt-0.5 text-xs">{String(i + 1).padStart(2, '0')}</span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6"><div className="h-px bg-[#E2E1DE]" /></div>

      {/* Social proof */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-[#1B2A4A] mb-14">
          Built for the people who present to boards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: 'I used to spend half a day in PowerPoint drawing this by hand. CompBrief does it in three minutes and the axes are actually smarter than mine.',
              role: 'Head of Product Strategy',
              sector: 'Series B SaaS',
            },
            {
              quote: 'Our strategy consultant charged £8K for a competitive landscape deck. This produced the same map — with better axis choices — from a CSV I already had.',
              role: 'CMO',
              sector: 'PE-backed Retailer',
            },
            {
              quote: 'The whitespace identification is the killer feature. It found a positioning gap we hadn\'t considered and it became the core of our Q3 pitch.',
              role: 'VP Product',
              sector: 'Enterprise Software',
            },
          ].map((t, i) => (
            <div key={i} className="bg-white border border-[#E2E1DE] rounded-lg p-8">
              <svg className="w-7 h-7 text-[#C1440E]/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>
              <p className="text-sm text-[#1B2A4A] leading-relaxed mb-6">{t.quote}</p>
              <p className="text-sm font-medium text-[#1B2A4A]">{t.role}</p>
              <p className="text-xs text-[#9BA8B4]">{t.sector}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6"><div className="h-px bg-[#E2E1DE]" /></div>

      {/* Pricing */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-[#1B2A4A] mb-4">
          Pricing
        </h2>
        <p className="text-[#6B7280] mb-14 max-w-[500px]">
          Free to start. Pay when it's worth it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[880px]">
          {[
            {
              name: 'Free',
              price: '£0',
              per: 'forever',
              highlight: false,
              features: [
                'Up to 10 competitors per landscape',
                '2×2 quadrant map',
                'Cluster identification',
                'Whitespace opportunities',
                'Landscape expires after 2 hours',
              ],
              cta: 'Start free',
              href: '/auth/signup',
            },
            {
              name: 'Pro',
              price: '£29',
              per: '/month',
              highlight: true,
              features: [
                'Unlimited competitors',
                'All Free features',
                'Landscapes saved permanently',
                'PDF export',
                'Executive summary brief',
                'Priority AI processing',
              ],
              cta: 'Start Pro trial',
              href: '/auth/signup?plan=pro',
            },
            {
              name: 'Agency',
              price: '£79',
              per: '/month',
              highlight: false,
              features: [
                'Everything in Pro',
                'Up to 5 team members',
                'White-label PDF export',
                'Client sharing links',
                'Custom axis labels',
                'Priority support',
              ],
              cta: 'Start Agency trial',
              href: '/auth/signup?plan=agency',
            },
          ].map(plan => (
            <div
              key={plan.name}
              className={`rounded-lg p-7 ${
                plan.highlight
                  ? 'bg-[#1B2A4A] border-2 border-[#1B2A4A]'
                  : 'bg-white border border-[#E2E1DE]'
              }`}
            >
              <p className={`font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest mb-4 ${
                plan.highlight ? 'text-[#C1440E]' : 'text-[#9BA8B4]'
              }`}>
                {plan.name}
              </p>
              <div className="mb-5">
                <span className={`font-[family-name:var(--font-heading)] text-4xl font-semibold ${
                  plan.highlight ? 'text-white' : 'text-[#1B2A4A]'
                }`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-1 ${plan.highlight ? 'text-white/50' : 'text-[#9BA8B4]'}`}>
                  {plan.per}
                </span>
              </div>
              <ul className="space-y-2.5 mb-7">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-[#C1440E]' : 'text-[#4A6FA5]'}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-[#6B7280]'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`block text-center px-5 py-3 rounded text-sm font-medium transition-colors ${
                  plan.highlight
                    ? 'bg-[#C1440E] text-white hover:bg-[#A33A0C]'
                    : 'bg-[#1B2A4A] text-white hover:bg-[#0F1A2E]'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6"><div className="h-px bg-[#E2E1DE]" /></div>

      {/* FAQ */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-[#1B2A4A] mb-12">
          Frequently asked questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-[900px]">
          {[
            {
              q: 'What columns should my CSV have?',
              a: 'At minimum, a Name column. Everything else is optional — but the more attributes you include (pricing tier, market share, employee count, founded year), the better Claude can choose meaningful positioning axes.',
            },
            {
              q: 'How does Claude choose the axes?',
              a: 'Claude analyses which attributes vary most across competitors and which would be most strategically meaningful for positioning. You can also guide it by including specific attributes that matter in your market.',
            },
            {
              q: 'Can I edit the quadrant after it\'s generated?',
              a: 'On Pro and Agency plans, you can re-run the analysis with different attribute selections or axis labels. PDF export captures the final state.',
            },
            {
              q: 'How many competitors can I include?',
              a: 'Free tier: up to 10 competitors. Pro and Agency: unlimited. Most useful landscapes have 8–20 competitors — beyond that, the map becomes cluttered.',
            },
            {
              q: 'Is my data used for AI training?',
              a: 'No. Your CSV data is processed server-side and used only to generate your landscape. We never share it or use it for training.',
            },
            {
              q: 'What does the "whitespace" feature do?',
              a: 'After positioning competitors, Claude identifies strategic gaps in the landscape — areas where no current competitor is positioned strongly, representing potential differentiation opportunities.',
            },
          ].map(faq => (
            <div key={faq.q}>
              <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A] mb-2">{faq.q}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6"><div className="h-px bg-[#E2E1DE]" /></div>

      {/* Final CTA */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="bg-[#1B2A4A] rounded-lg p-16 text-center">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-widest mb-6">
            Ready?
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-white mb-4">
            Your CSV is already the brief.<br />Let Claude build the map.
          </h2>
          <p className="text-white/50 mb-10 max-w-[480px] mx-auto">
            Free up to 10 competitors. No credit card. Under 3 minutes from upload to board-ready quadrant.
          </p>
          <Link
            href="/auth/signup"
            className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-8 py-4 rounded font-medium hover:bg-[#A33A0C] transition-colors"
          >
            Build your first landscape
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="h-px bg-[#E2E1DE] mb-8" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#9BA8B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3zm9 0v18M3 12h18" />
            </svg>
            <span className="font-[family-name:var(--font-heading)] text-lg text-[#9BA8B4]">CompBrief</span>
          </div>
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
