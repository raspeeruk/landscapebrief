import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Competitive Analysis Template: How to Map Your Market in 2025',
  description: 'A complete competitive analysis template covering market definition, competitor identification, feature matrix, positioning map, and gap analysis. Free framework inside.',
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
        LandscapeBrief turns your competitor list into a professional competitive landscape map automatically
      </p>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
        Upload a CSV of competitors, and Claude positions each one on a 2×2 quadrant, identifies clusters, spots whitespace, and writes the strategy brief. Board-ready in under 3 minutes.
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
        Skip the spreadsheet. Get the map.
      </h2>
      <p className="text-white/50 text-sm mb-8 max-w-[400px] mx-auto">
        LandscapeBrief does every section of this template automatically — from positioning to gap analysis.
      </p>
      <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitive Landscape Free →
      </Link>
    </div>
  )
}

export default function CompetitiveAnalysisTemplate() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <NavBar />

      <main className="max-w-[768px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Guide · Competitive Analysis
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            Competitive Analysis Template: How to Map Your Market in 2025
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            A competitive analysis isn't about copying competitors — it's about finding the white space they're all ignoring. The companies that win don't obsess over what rivals do well; they obsess over what rivals have left unclaimed. This template gives you the structure to see that gap clearly.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            The 5 components of a competitive analysis
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Most competitive analyses fail because they treat every element with equal weight. In practice, the five components below build on each other in sequence — skip one and the next becomes guesswork.
          </p>
          <div className="space-y-8">
            {[
              {
                n: '01',
                title: 'Market definition',
                body: 'Define the specific market you are competing in before naming a single competitor. Scope it too broadly and everyone is a competitor. Scope it too narrowly and you miss the indirect threats that blindside you. A useful test: if a customer left your category entirely, what would they use instead? That answer defines your real market boundary.',
              },
              {
                n: '02',
                title: 'Competitor identification',
                body: 'Competitors fall into three tiers: direct (same product, same customer), indirect (different product, same job to be done), and substitute (customers do the job themselves or do without). Most analyses only document the first tier. The existential threats usually come from the third.',
              },
              {
                n: '03',
                title: 'Feature matrix',
                body: 'A feature matrix maps what each competitor offers against a standardised attribute list. The goal isn\'t to show that your product has more features — it\'s to reveal which combinations of attributes no competitor currently owns. Blank cells in the matrix are strategy.',
              },
              {
                n: '04',
                title: 'Positioning map',
                body: 'A positioning map (also called a perceptual map) places competitors on two axes that represent the most strategically meaningful dimensions of your market. Common axis pairs include price vs. service level, niche vs. general, or traditional vs. modern. Where no competitor sits is your white space.',
              },
              {
                n: '05',
                title: 'Gap analysis',
                body: 'Gap analysis synthesises the feature matrix and positioning map into a set of concrete opportunities. For each gap, ask: is this gap empty because the market doesn\'t want it, or because no one has built it yet? That distinction separates real opportunities from dead ends.',
              },
            ].map(item => (
              <div key={item.n} className="flex gap-6">
                <span className="font-[family-name:var(--font-mono)] text-sm text-[#C1440E] tracking-widest shrink-0 pt-0.5">{item.n}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1B2A4A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Competitive analysis template: what to include
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Use this structured template as the skeleton for your document. Each section has a brief description of what to fill in.
          </p>
          <div className="space-y-6">
            {[
              {
                section: 'Section 1 — Market Definition',
                items: [
                  'Market description (one paragraph)',
                  'Customer segment(s) in scope',
                  'Geographic scope',
                  'Out-of-scope (what this analysis does NOT cover)',
                ],
              },
              {
                section: 'Section 2 — Competitor List',
                items: [
                  'Direct competitors (name, URL, one-line description)',
                  'Indirect competitors (same customer, different solution)',
                  'Substitute options (what customers do instead)',
                ],
              },
              {
                section: 'Section 3 — Feature Matrix',
                items: [
                  'Rows: each competitor (including your company)',
                  'Columns: key attributes (pricing tier, core features, target segment, distribution)',
                  'Cells: Y/N or rating scale',
                ],
              },
              {
                section: 'Section 4 — Positioning Map',
                items: [
                  'Chosen X axis (e.g. price: low → high)',
                  'Chosen Y axis (e.g. market focus: SMB → enterprise)',
                  'Plot of each competitor',
                  'Whitespace quadrant(s) highlighted',
                ],
              },
              {
                section: 'Section 5 — Gap Analysis',
                items: [
                  'Top 3 whitespace opportunities with supporting evidence',
                  'Hypothesis for why each gap exists',
                  'Recommended positioning for your company',
                ],
              },
            ].map(block => (
              <div key={block.section} className="bg-[#F0EFF5] rounded-lg p-6 border border-[#E2E1DE]">
                <p className="font-[family-name:var(--font-mono)] text-xs text-[#4A6FA5] uppercase tracking-widest mb-4">{block.section}</p>
                <ul className="space-y-2">
                  {block.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#1B2A4A]">
                      <span className="text-[#C1440E] mt-1.5 shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            How to identify all your competitors
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            The biggest mistake in competitor identification is starting with the obvious names. Start instead with your customer's alternatives, then work backwards to who provides them.
          </p>
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                tier: 'Tier 1 — Direct competitors',
                color: '#C1440E',
                desc: 'Same product category, same target customer, similar price point. Find these by searching your exact product category on G2, Capterra, or Product Hunt. Also check who bids on your brand keywords in Google Ads.',
              },
              {
                tier: 'Tier 2 — Indirect competitors',
                color: '#4A6FA5',
                desc: 'Different product, but it solves the same problem your customer is trying to solve. A project management tool might indirectly compete with email. Find these by asking sales lost deals: "What did the customer use instead?"',
              },
              {
                tier: 'Tier 3 — Substitute products',
                color: '#9BA8B4',
                desc: 'Customers who don\'t use your category at all — they do the job manually, hire a consultant, or simply go without. Substitutes rarely appear in analyst reports. Find them by asking churned customers what they switched to.',
              },
            ].map(tier => (
              <div key={tier.tier} className="border border-[#E2E1DE] rounded-lg p-6 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: tier.color }} />
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">{tier.tier}</p>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <CtaBox />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Feature matrix: how to compare competitors objectively
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            A feature matrix only works if the attributes are chosen before you start filling in cells — not retrofitted to make your product look good. Follow these principles:
          </p>
          <div className="space-y-5">
            {[
              {
                rule: 'Choose attributes customers actually use to make decisions',
                detail: 'Look at your own sales calls and the questions buyers ask. If no customer has ever asked about a feature, it doesn\'t belong in the matrix.',
              },
              {
                rule: 'Use consistent measurement',
                detail: 'Don\'t mix binary (yes/no) with subjective ratings. Pick one format per attribute and apply it consistently across every competitor.',
              },
              {
                rule: 'Include your company as a row',
                detail: 'Many teams leave themselves out of the matrix. Including your own company forces an honest assessment and makes the whitespace visible.',
              },
              {
                rule: 'Keep it to 10–15 attributes maximum',
                detail: 'A 40-column matrix is noise. Limit yourself to the attributes that most differentiate players in your market. Everything else is distraction.',
              },
              {
                rule: 'Note the source for each cell',
                detail: 'Feature matrices become political fast. Requiring a source (pricing page, G2 review, product demo) keeps it factual and defensible.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <span className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] tracking-wider shrink-0 pt-1">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="font-semibold text-[#1B2A4A] text-sm mb-1">{item.rule}</p>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Common competitive analysis mistakes
          </h2>
          <div className="space-y-5">
            {[
              {
                mistake: 'Limiting analysis to known competitors',
                fix: 'The threat that closes your company probably isn\'t on your radar yet. Allocate 30% of your analysis to indirect and substitute competitors.',
              },
              {
                mistake: 'Making it a one-time exercise',
                fix: 'Competitive landscapes shift quarterly. Build a lightweight monitoring system — Google Alerts, job posting tracking, product review monitoring — to keep it current.',
              },
              {
                mistake: 'Using vanity attributes in the feature matrix',
                fix: 'Attributes like "easy to use" and "great support" are meaningless without a consistent measurement method. Use verifiable attributes only.',
              },
              {
                mistake: 'Ignoring where competitors are investing',
                fix: 'A competitor\'s current feature set tells you where they\'ve been. Their job postings and recent hires tell you where they\'re going.',
              },
              {
                mistake: 'Confusing market share with market quality',
                fix: 'The market leader serves the average customer. If you can serve a specific customer dramatically better, market share is irrelevant.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#FAFAF8] border border-[#E2E1DE] rounded-lg p-5">
                <p className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A] mb-2">
                  <span className="text-[#C1440E] mr-2">✕</span>{item.mistake}
                </p>
                <p className="text-sm text-[#6B7280] leading-relaxed pl-6">{item.fix}</p>
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
                q: 'How often should you update a competitive analysis?',
                a: 'For fast-moving markets (SaaS, consumer tech), refresh the full analysis quarterly and do lightweight monitoring monthly. For slower-moving markets (professional services, B2B enterprise), semi-annual is sufficient.',
              },
              {
                q: 'How many competitors should be in the analysis?',
                a: 'For the core analysis: 5–10 direct competitors is the right depth. Beyond 15, the signal gets lost in noise. Include indirect and substitute competitors separately — you don\'t need deep analysis on all of them, just enough to understand the shape of the threat.',
              },
              {
                q: 'Should a competitive analysis be internal or shared with investors?',
                a: 'Both, but they serve different purposes. The internal version should be brutally honest about your weaknesses. The investor version should emphasise whitespace and your positioning hypothesis. Never share the internal version externally.',
              },
              {
                q: 'What\'s the difference between a competitive analysis and a competitive intelligence function?',
                a: 'A competitive analysis is a point-in-time document. Competitive intelligence is the ongoing process of monitoring, updating, and synthesising competitor signals. Most startups need a good competitive analysis first, then graduate to a lightweight CI function as they scale.',
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
            <Link href="/guides/competitive-landscape-analysis" className="hover:text-[#1B2A4A] transition-colors">Landscape Analysis</Link>
            <Link href="/guides/competitor-research" className="hover:text-[#1B2A4A] transition-colors">Competitor Research</Link>
            <Link href="/guides/market-positioning-map" className="hover:text-[#1B2A4A] transition-colors">Positioning Map</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
