import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Write an Industry Landscape Report',
  description: 'A complete guide to writing an industry landscape report. Covers structure, data collection, competitive mapping, trend analysis, and how to present findings to executives and investors.',
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
        Generate the competitive map section of your landscape report automatically
      </p>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
        Upload your competitor data and LandscapeBrief builds the quadrant map, identifies clusters and whitespace, and writes the positioning analysis. Drop it directly into your landscape report.
      </p>
      <Link href="/app" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-6 py-3 rounded text-sm font-medium hover:bg-[#A33A0C] transition-colors">
        Generate Your Competitive Map Free &rarr;
      </Link>
    </div>
  )
}

function FinalCta() {
  return (
    <div className="my-14 bg-[#1B2A4A] rounded-lg p-12 text-center">
      <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-widest mb-4">Ready?</p>
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white mb-3">
        Start with the competitive map. Build the report around it.
      </h2>
      <p className="text-white/50 text-sm mb-8 max-w-[400px] mx-auto">
        LandscapeBrief generates the hardest part of any landscape report — the competitive positioning map and whitespace analysis.
      </p>
      <Link href="/app" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitive Landscape Free &rarr;
      </Link>
    </div>
  )
}

export default function IndustryLandscapeReport() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <NavBar />

      <main className="max-w-[768px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Guide &middot; Landscape Report
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            How to Write an Industry Landscape Report
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            An industry landscape report is the definitive document for understanding a market — who the players are, how they compete, where the market is heading, and where the opportunities sit. It is used by founders entering a new market, investors evaluating opportunities, product teams planning roadmaps, and corporate strategy teams assessing competitive threats. The best landscape reports share one quality: they help the reader make a better decision. Every section should be in service of that goal.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            The anatomy of a landscape report
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            A well-structured landscape report has seven sections. Each builds on the previous one. The order matters — do not rearrange it.
          </p>
          <div className="space-y-8">
            {[
              { n: '01', title: 'Executive summary', body: 'One page maximum. Summarise the market size, key players, competitive dynamics, and the 2-3 most important strategic insights. This section should be readable by someone who has no time for the rest of the report. Most executives read only this section. Make it count.' },
              { n: '02', title: 'Market definition and scope', body: 'Define the boundaries of the market precisely. What customer segments are included? What geographic scope? What product categories? Be explicit about what is out of scope. A landscape report that covers "the software industry" is useless. One that covers "project management software for 50-500 person B2B companies in North America" is actionable.' },
              { n: '03', title: 'Market sizing and growth', body: 'Total addressable market (TAM), serviceable addressable market (SAM), and serviceable obtainable market (SOM). Use bottom-up sizing where possible (number of potential customers x average revenue per customer) rather than top-down estimates from analyst reports. Show the growth rate and the drivers of growth.' },
              { n: '04', title: 'Competitive landscape map', body: 'The visual centrepiece of the report. A 2x2 quadrant map showing where each competitor sits relative to the most strategically meaningful dimensions. Include a category map if the market has multiple sub-segments. Label clusters and whitespace. This is the section that LandscapeBrief automates.' },
              { n: '05', title: 'Competitor profiles', body: 'Detailed profiles for 5-10 key players. Each profile should cover: company overview, product offering, target segment, pricing model, estimated revenue/scale, key strengths, key weaknesses, and recent strategic moves. Keep each profile to one page. Consistency across profiles is more important than depth on any single one.' },
              { n: '06', title: 'Trend analysis', body: 'The 3-5 most significant trends shaping the market over the next 2-3 years. For each trend, explain what is happening, why it matters, which companies are best positioned, and which are most at risk. Good trend analysis goes beyond the obvious (AI, automation) to identify the specific mechanisms through which trends will change competitive dynamics.' },
              { n: '07', title: 'Strategic implications and recommendations', body: 'The conclusion translates everything above into specific recommendations. For founders: where to position, which segment to target, which competitors to worry about. For investors: which companies are best positioned for the trends identified. For product teams: which features and capabilities will matter most in 12-18 months.' },
            ].map(step => (
              <div key={step.n} className="flex gap-6">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="font-[family-name:var(--font-mono)] text-sm text-[#C1440E] tracking-widest">{step.n}</span>
                  <div className="w-px flex-1 bg-[#E2E1DE]" />
                </div>
                <div className="pb-8">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1B2A4A] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CtaBox />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Data collection playbook
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            The biggest bottleneck in writing a landscape report is data collection. Here is a systematic approach that covers the essential data sources in priority order.
          </p>
          <div className="space-y-5">
            {[
              {
                phase: 'Phase 1 — Desk research (2-3 hours)',
                tasks: [
                  'Search G2/Capterra for your market category — this gives you the competitor list and review data',
                  'Check Crunchbase for funding data on each competitor',
                  'Scan competitor websites for pricing, positioning, and target segment',
                  'Read the most recent analyst reports if available (Gartner, Forrester, IDC)',
                  'Search Google News for recent competitor announcements',
                ],
              },
              {
                phase: 'Phase 2 — Digital intelligence (2-3 hours)',
                tasks: [
                  'Run SimilarWeb on each competitor for traffic estimates and channel mix',
                  'Check SEMrush for keyword positioning and paid search activity',
                  'Scan LinkedIn for competitor employee counts and recent hires',
                  'Review job postings for strategic direction signals',
                  'Check Product Hunt and Hacker News for launch reception and community sentiment',
                ],
              },
              {
                phase: 'Phase 3 — Primary research (4-8 hours)',
                tasks: [
                  'Interview 3-5 customers who have evaluated multiple competitors',
                  'Interview 1-2 industry experts or analysts',
                  'Talk to your sales team about competitive win/loss patterns',
                  'If possible, sign up for competitor free trials to evaluate the product firsthand',
                  'Attend competitor webinars or events to understand their messaging',
                ],
              },
              {
                phase: 'Phase 4 — Synthesis (4-6 hours)',
                tasks: [
                  'Build the competitive landscape map from collected data',
                  'Write competitor profiles using a consistent template',
                  'Identify trends from the patterns across all data sources',
                  'Draft the executive summary and strategic recommendations',
                  'Review with stakeholders and iterate',
                ],
              },
            ].map(phase => (
              <div key={phase.phase} className="bg-[#F0EFF5] rounded-lg p-6 border border-[#E2E1DE]">
                <p className="font-[family-name:var(--font-mono)] text-xs text-[#4A6FA5] uppercase tracking-widest mb-4">{phase.phase}</p>
                <ul className="space-y-2">
                  {phase.tasks.map(task => (
                    <li key={task} className="flex items-start gap-2 text-sm text-[#1B2A4A]">
                      <span className="text-[#C1440E] mt-1.5 shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                      </span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Writing the competitive landscape map section
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            The competitive landscape map is the most-referenced section of any landscape report. It needs to be visually clear and strategically insightful. Here is the structure.
          </p>
          <div className="space-y-5">
            {[
              { rule: 'Lead with the map visual', detail: 'Place the 2x2 quadrant map at the top of the section. Label every competitor clearly. Use colour or size to encode an additional dimension (e.g., funding amount or market share). The map should be interpretable without reading the accompanying text.' },
              { rule: 'Explain the axis choice', detail: 'Dedicate one paragraph to why you chose these specific axes. What strategic question do they answer? What alternative axis pairs did you consider and reject? This justification is critical for credibility — readers need to trust that the axes were chosen for strategic insight, not to flatter a particular company.' },
              { rule: 'Describe each cluster', detail: 'Identify the 2-3 main clusters on the map and describe what unifies the companies in each cluster. What strategic choice do they share? Why have they converged on similar positioning? Clusters reveal industry conventions and assumptions.' },
              { rule: 'Analyse the whitespace', detail: 'For each empty or sparse quadrant, explain why it is empty. Is there genuinely no customer demand in that position? Is there a structural reason no company has succeeded there? Or has it simply not been attempted? This is the highest-value analysis in the entire report.' },
              { rule: 'State the positioning thesis', detail: 'End the section with a clear positioning recommendation: where should a new entrant (or the report sponsor) position themselves on this map, and why? Support the recommendation with evidence from the cluster and whitespace analysis.' },
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
            Common landscape report mistakes
          </h2>
          <div className="space-y-5">
            {[
              {
                mistake: 'Writing a report instead of building a tool',
                fix: 'The best landscape reports are living documents that get updated regularly, not 80-page PDFs that are read once and forgotten. Build it in a format that supports updates — a slide deck with linked data sources, or a Notion/Coda document with embedded charts.',
              },
              {
                mistake: 'Burying the insight under data',
                fix: 'Most landscape reports have too much data and not enough analysis. For every data point, ask: "So what?" If a competitor raised $50M, what does that mean for the market? If traffic to a category is growing 30% year-over-year, who benefits? Data without interpretation is just noise.',
              },
              {
                mistake: 'Being diplomatic instead of honest',
                fix: 'A landscape report that says every competitor is "strong in some areas and weak in others" is useless. Take positions. Name the most dangerous competitor. Identify the company most likely to fail. Readers want a clear-eyed assessment, not a balanced one.',
              },
              {
                mistake: 'Confusing comprehensiveness with quality',
                fix: 'A landscape report with 50 competitor profiles is not better than one with 10. It is worse, because the signal is buried in noise. Focus on the competitors that matter most to the strategic decision at hand.',
              },
              {
                mistake: 'Skipping the "so what" section',
                fix: 'Every landscape report should end with 3-5 specific, actionable recommendations. "This market is competitive" is not a recommendation. "Enter the SMB segment first because the three strongest competitors all focus on enterprise" is a recommendation.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#FAFAF8] border border-[#E2E1DE] rounded-lg p-5">
                <p className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A] mb-2">
                  <span className="text-[#C1440E] mr-2">&times;</span>{item.mistake}
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
                q: 'How long should an industry landscape report be?',
                a: 'The executive summary should be one page. The full report should be 15-25 pages (or 20-30 slides if in deck format). Anything longer than 30 pages is unlikely to be read in full. Put detailed competitor profiles in an appendix so the core report stays focused on strategic insight.',
              },
              {
                q: 'How often should a landscape report be updated?',
                a: 'Do a full refresh annually. Do a lightweight update (check for new competitors, major funding rounds, and market sizing changes) quarterly. If a significant market event occurs (major acquisition, new well-funded entrant, regulatory change), do an ad hoc update of the affected sections.',
              },
              {
                q: 'Who should write the landscape report?',
                a: 'In larger companies: product marketing or corporate strategy. In startups: the founder or head of product. The writer needs to understand both the market dynamics and the strategic context of the reader. Do not outsource it to a junior analyst who lacks market context.',
              },
              {
                q: 'How is a landscape report different from a competitive analysis?',
                a: 'A competitive analysis focuses specifically on the competitive dynamics — who the competitors are, how they position, and where you have advantages and disadvantages. A landscape report is broader — it includes market sizing, trend analysis, ecosystem mapping, and strategic recommendations in addition to the competitive analysis. A competitive analysis is one section of a landscape report.',
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
            <Link href="/guides/market-map-template" className="hover:text-[#1B2A4A] transition-colors">Market Map</Link>
            <Link href="/guides/competitive-benchmarking-guide" className="hover:text-[#1B2A4A] transition-colors">Benchmarking</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
