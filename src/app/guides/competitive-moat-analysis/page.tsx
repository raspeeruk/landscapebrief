import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Competitive Moats: How to Assess Yours (And Your Competitors\')',
  description: 'A complete guide to competitive moats — the 7 moat types, how to test moat strength, moats by company stage, and how to map competitor moats on a landscape chart.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can a startup have a moat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, but early-stage moats are narrower. The most accessible startup moats are: a tight community or network in a niche that doesn't scale (early network effect), proprietary data from an insight competitors don't have yet, a regulatory relationship or certification that takes time to acquire, or a founding team with irreplaceable domain expertise. None of these last forever without reinforcement, but they buy you the time to build a harder moat as you scale.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a moat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Network effect moats typically take 2–4 years to become defensible. Switching cost moats build faster — often within 12–18 months of deep product integrations. Brand moats take the longest — 5–10 years for a brand that genuinely repels competitors. Cost advantage moats depend entirely on scale. Data flywheel moats are the most variable: if you have exclusive data sources, they can become defensible in 18 months; if you're competing for the same public data, never.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the weakest type of moat?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "First-mover advantage is the weakest, and it's frequently misidentified as a moat. Being first gives you time, not defensibility. Google wasn't the first search engine. Facebook wasn't the first social network. Amazon wasn't the first online bookstore. What each of them built after being first — network effects, switching costs, cost advantages — became the actual moats. Confusing the head start with the moat is how market leaders get disrupted.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you show a moat to investors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Show evidence, not assertion. Investors hear 'we have strong network effects' in every deck. What they want to see: NRR above 120% (switching cost evidence), user growth curves that accelerate rather than flatten (network effect evidence), gross margins above category benchmarks (cost advantage evidence), or win rates rising against well-funded competitors (brand/positioning evidence). A competitive landscape map that shows you in uncrowded white space supports the moat narrative visually.",
      },
    },
  ],
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

function CtaBox() {
  return (
    <div className="my-12 border-l-4 border-[#C1440E] bg-[#FDF8F6] p-7 rounded-r-lg">
      <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#C1440E] mb-2">LandscapeBrief</p>
      <p className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1B2A4A] mb-3">
        Map your competitors' moat positions on a quadrant chart
      </p>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
        LandscapeBrief turns your competitor list into a visual landscape map — showing where each player sits, what white space exists, and where your moat-building opportunity is strongest. Board-ready in under 3 minutes.
      </p>
      <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-6 py-3 rounded text-sm font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitive Landscape Free →
      </Link>
    </div>
  )
}

function FinalCta() {
  return (
    <div className="my-14 bg-[#1B2A4A] rounded-lg p-12 text-center">
      <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-widest mb-4">Ready?</p>
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white mb-3">
        See your competitive position clearly.
      </h2>
      <p className="text-white/50 text-sm mb-8 max-w-[400px] mx-auto">
        LandscapeBrief maps your competitive landscape in under 3 minutes and shows you where the moat-building opportunity is. Free to start.
      </p>
      <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitive Landscape Free →
      </Link>
    </div>
  )
}

export default function CompetitiveMoatAnalysis() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NavBar />

      <main className="max-w-[768px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Guide · Competitive Defensibility
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            Competitive Moats: How to Assess Yours (And Your Competitors')
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            A moat is a durable structural advantage — something competitors can't easily copy even if they have more money and more engineers. Most companies confuse features with moats. Features get copied in a sprint cycle. Moats take years to erode. This guide shows you how to identify which moats exist in your market, how strong they are, and how to build one that lasts.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            What a moat actually is
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            The concept comes from Warren Buffett: a company with a wide moat can maintain above-average returns because competitors can't profitably take market share even if they try. In startup terms, a moat is why your best customer would stay with you even if a well-funded competitor built an equivalent product and charged 20% less.
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Three things are not moats, even though they're frequently called moats:
          </p>
          <div className="space-y-4 mb-6">
            {[
              { label: 'Technology advantage', reason: 'Technology can be reverse-engineered or rebuilt. It becomes a moat only when combined with something structural (a patent, a proprietary data set, or a process that requires years of operational experience to replicate).' },
              { label: 'First-mover advantage', reason: 'Being first gives you time, not defensibility. The first mover wins only if they use the time advantage to build something structural — typically a network effect, a brand, or locked-in switching costs.' },
              { label: 'Team quality', reason: 'A great team is a competitive advantage, not a moat. Teams can be poached. The moat is the compounding output of that team — the data flywheel they built, the network they assembled, the brand they created.' },
            ].map(item => (
              <div key={item.label} className="bg-[#FAFAF8] border border-[#E2E1DE] rounded-lg p-5">
                <p className="font-semibold text-[#1B2A4A] text-sm mb-2">
                  <span className="text-[#C1440E] mr-2">✕</span>Not a moat: {item.label}
                </p>
                <p className="text-sm text-[#6B7280] leading-relaxed pl-6">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            The 7 moat types
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Every durable competitive advantage traces back to one or more of these structural sources. The strongest companies compound multiple moat types over time.
          </p>
          <div className="space-y-8">
            {[
              {
                n: '01',
                title: 'Network effects',
                body: 'The product becomes more valuable as more users join. Direct network effects: the product is better when you can interact with more people on it (Slack, WhatsApp). Indirect network effects: more users on one side of a marketplace attracts more users on the other side (Airbnb, eBay). Data network effects: more users generate more data that improves the product for everyone (Waze, recommendation engines).',
                example: 'Strong when: user-to-user interaction is core to the value. Weak when: users derive value independently and don\'t need the network to get that value.',
              },
              {
                n: '02',
                title: 'Switching costs',
                body: 'The cost — financial, operational, or psychological — of moving to a competitor is high enough that customers stay even if a slightly better or cheaper alternative exists. Switching costs compound with product depth: the more integrations, workflows, and historical data a customer has in your product, the higher the cost to leave.',
                example: 'Strong when: product is deeply embedded in operations (payroll, CRM, ERP). Weak when: product is a single-use tool with no data lock-in.',
              },
              {
                n: '03',
                title: 'Cost advantage',
                body: 'You can produce or deliver at a lower cost than competitors, allowing you to either undercut on price or maintain higher margins. Cost advantages come from proprietary processes, geographic access, scale economies (fixed costs spread over more units), or negotiating power with suppliers.',
                example: 'Strong when: you\'ve reached a scale where unit economics are fundamentally better than competitors. Weak when: the cost advantage depends on assumptions that don\'t scale.',
              },
              {
                n: '04',
                title: 'Intangible assets (brand and IP)',
                body: 'A brand that commands a price premium, creates trust, or attracts customers unprompted. A patent that prevents direct replication. Regulatory approvals that took years to obtain. These are intangible but quantifiably real: a strong brand reduces CAC, increases conversion rates, and allows price premiums that competitors without the brand cannot match.',
                example: 'Strong when: brand drives organic demand and customers actively choose it over cheaper alternatives. Weak when: brand recognition exists but doesn\'t translate to purchase preference.',
              },
              {
                n: '05',
                title: 'Efficient scale',
                body: 'A market is naturally limited in size, and serving it profitably requires a scale that makes entry unattractive for new competitors. Local monopolies (the only crematorium in a small town, the only newspaper in a city) and natural infrastructure monopolies (pipelines, rail lines) operate on efficient scale. In software, niche B2B markets often exhibit this: the total addressable market is small enough that two or three players saturate it.',
                example: 'Strong when: the market size doesn\'t justify a second entrant at minimum viable scale. Weak when: the market can profitably support multiple competitors at your size.',
              },
              {
                n: '06',
                title: 'Data flywheel',
                body: 'Proprietary data that improves your product, and using the product generates more proprietary data. The flywheel compounds over time: you have data competitors can\'t buy or scrape. This is the dominant moat in AI-era businesses. It requires exclusive data acquisition — if every competitor has access to the same data sources, there\'s no flywheel.',
                example: 'Strong when: your data is proprietary, hard to replicate, and directly feeds product improvement. Weak when: your data is publicly available or can be acquired by a competitor with more resources.',
              },
              {
                n: '07',
                title: 'Regulatory and certification moats',
                body: 'Licences, certifications, compliance relationships, or regulatory approvals that take years to obtain and that are required to operate. Common in fintech, healthcare, defence, and professional services. The regulatory moat doesn\'t prevent new entrants forever, but the time and cost to clear the same hurdles can be prohibitive enough to create durable advantage.',
                example: 'Strong when: the regulatory requirement is genuinely expensive and slow to obtain. Weak when: regulators are expanding the number of licences issued or the certification can be achieved quickly.',
              },
            ].map(item => (
              <div key={item.n} className="flex gap-6">
                <span className="font-[family-name:var(--font-mono)] text-sm text-[#C1440E] tracking-widest shrink-0 pt-0.5">{item.n}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1B2A4A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-2">{item.body}</p>
                  <p className="text-xs text-[#9BA8B4] font-[family-name:var(--font-mono)] italic">{item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CtaBox />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            How to assess moat strength: the attack test
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            The most reliable method for assessing a moat's strength is the attack test: imagine a well-funded, technically excellent competitor decides to enter your specific niche tomorrow. They have $50M in the bank and your best engineers' equivalent talent. What could they NOT replicate in 24 months, even with those resources?
          </p>
          <div className="bg-[#F0EFF5] rounded-lg p-6 border border-[#E2E1DE] mb-8">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#4A6FA5] uppercase tracking-widest mb-4">Attack test questions</p>
            <div className="space-y-3">
              {[
                'Could they replicate your product functionality within 18 months? (if yes, technology is not a moat)',
                'Could they acquire your customer relationships by offering a 20% price discount? (if yes, switching costs are low)',
                'Could they achieve your network density by acquiring one of your smaller competitors? (if yes, network effect is fragile)',
                'Could they achieve your brand recognition within 3 years with a significant marketing spend? (if yes, brand moat is thin)',
                'Could they acquire your data sources? (if yes, data flywheel is not proprietary)',
                'What would still be true about your position in 5 years, assuming they executed perfectly?',
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[#1B2A4A]">
                  <span className="text-[#C1440E] mt-1.5 shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                  </span>
                  {q}
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-[#6B7280] leading-relaxed">
            The answers that survive the attack test are your real moats. Everything else is a temporary advantage that deserves a plan to convert it into something structural.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Moat by company stage
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            The moats available to you depend heavily on where you are in your growth curve. Trying to build a scale-based cost advantage at seed stage is a distraction. Relying on founder expertise at Series B is a liability.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1B2A4A]">
                  <th className="text-left py-3 pr-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">Stage</th>
                  <th className="text-left py-3 pr-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">Accessible moats</th>
                  <th className="text-left py-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">Moats to build toward</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E1DE]">
                {[
                  { stage: 'Pre-seed / Seed', accessible: 'Domain expertise, proprietary insight, niche community access, early regulatory relationship', build: 'Data accumulation, early network seeding, switching cost architecture' },
                  { stage: 'Series A', accessible: 'Switching costs (if integration depth exists), early network effects, data collection', build: 'Brand recognition in target segment, scale economics, data flywheel acceleration' },
                  { stage: 'Series B+', accessible: 'Network effects (if product is working), brand in segment, data flywheel', build: 'Category leadership brand, cost advantage from scale, efficient scale in niche' },
                  { stage: 'Scale / IPO', accessible: 'All moat types if built correctly', build: 'Multi-moat reinforcement (each moat type protecting the others)' },
                ].map(row => (
                  <tr key={row.stage}>
                    <td className="py-4 pr-6 font-semibold text-[#1B2A4A] align-top text-sm">{row.stage}</td>
                    <td className="py-4 pr-6 text-[#6B7280] leading-relaxed align-top text-sm">{row.accessible}</td>
                    <td className="py-4 text-[#6B7280] leading-relaxed align-top text-sm">{row.build}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Mapping competitor moats on a landscape chart
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Understanding competitor moats requires more than listing them — you need to see how moat strength distributes across the competitive landscape. A quadrant chart with axes representing moat type and moat strength gives you a strategic picture that a spreadsheet doesn't.
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Useful axis pairs for moat mapping:
          </p>
          <div className="space-y-4">
            {[
              { axes: 'Network effect strength vs. switching cost depth', insight: 'Shows which competitors are most defensible at scale and which are most vulnerable to early-stage disruption.' },
              { axes: 'Brand recognition vs. cost efficiency', insight: 'Reveals whether competitors win on premium positioning or on cost — and whether anyone holds both simultaneously.' },
              { axes: 'Data proprietary-ness vs. product intelligence', insight: 'Maps who has the best data flywheel in AI-driven markets, showing where commoditisation risk is highest.' },
            ].map((item, i) => (
              <div key={i} className="border border-[#E2E1DE] rounded-lg p-5 bg-white">
                <p className="font-semibold text-[#1B2A4A] text-sm mb-2">Axis pair {i + 1}: {item.axes}</p>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.insight}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: 'Can a startup have a moat?',
                a: "Yes, but early-stage moats are narrower. The most accessible startup moats are: a tight community or network in a niche that doesn't scale (early network effect), proprietary data from an insight competitors don't have yet, a regulatory relationship or certification that takes time to acquire, or a founding team with irreplaceable domain expertise. None of these last forever without reinforcement, but they buy you the time to build a harder moat as you scale.",
              },
              {
                q: 'How long does it take to build a moat?',
                a: "Network effect moats typically take 2–4 years to become defensible. Switching cost moats build faster — often within 12–18 months of deep product integrations. Brand moats take the longest — 5–10 years for a brand that genuinely repels competitors. Cost advantage moats depend entirely on scale. Data flywheel moats are the most variable: if you have exclusive data sources, they can become defensible in 18 months; if you're competing for the same public data, never.",
              },
              {
                q: "What's the weakest type of moat?",
                a: "First-mover advantage is the weakest, and it's frequently misidentified as a moat. Being first gives you time, not defensibility. Google wasn't the first search engine. Facebook wasn't the first social network. Amazon wasn't the first online bookstore. What each of them built after being first — network effects, switching costs, cost advantages — became the actual moats. Confusing the head start with the moat is how market leaders get disrupted.",
              },
              {
                q: 'How do you show a moat to investors?',
                a: "Show evidence, not assertion. Investors hear 'we have strong network effects' in every deck. What they want to see: NRR above 120% (switching cost evidence), user growth curves that accelerate rather than flatten (network effect evidence), gross margins above category benchmarks (cost advantage evidence), or win rates rising against well-funded competitors (brand/positioning evidence). A competitive landscape map that shows you in uncrowded white space supports the moat narrative visually.",
              },
            ].map(faq => (
              <div key={faq.q} className="border-l-2 border-[#E2E1DE] pl-6">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <FinalCta />
      </main>

      <footer className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="h-px bg-[#E2E1DE] mb-8" />
        <div className="flex items-center justify-between">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-lg text-[#9BA8B4] hover:text-[#1B2A4A] transition-colors">CompBrief</Link>
          <div className="flex items-center gap-6 text-sm text-[#9BA8B4]">
            <Link href="/guides/competitive-analysis-template" className="hover:text-[#1B2A4A] transition-colors">Analysis Template</Link>
            <Link href="/guides/go-to-market-strategy" className="hover:text-[#1B2A4A] transition-colors">GTM Strategy</Link>
            <Link href="/guides/swot-analysis-guide" className="hover:text-[#1B2A4A] transition-colors">SWOT Analysis</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
