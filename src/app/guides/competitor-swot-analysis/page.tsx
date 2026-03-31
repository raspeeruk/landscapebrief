import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Competitor SWOT Analysis: Template + Real Examples',
  description: 'How to run a SWOT analysis on your competitors. Includes a fill-in template, real competitor SWOT examples, data sources for each quadrant, and how to turn competitor SWOTs into your own strategy.',
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
        See every competitor&apos;s position at a glance
      </p>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
        Before running individual competitor SWOTs, map the entire competitive landscape. Upload a CSV to LandscapeBrief and get a visual quadrant showing who your real threats are and where the gaps sit.
      </p>
      <Link href="/app" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-6 py-3 rounded text-sm font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitors Free &rarr;
      </Link>
    </div>
  )
}

function FinalCta() {
  return (
    <div className="my-14 bg-[#1B2A4A] rounded-lg p-12 text-center">
      <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-widest mb-4">Ready?</p>
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white mb-3">
        Know your competitors. Then out-position them.
      </h2>
      <p className="text-white/50 text-sm mb-8 max-w-[400px] mx-auto">
        LandscapeBrief maps the competitive landscape and writes the positioning brief. Your competitor SWOT analysis starts here.
      </p>
      <Link href="/app" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitive Landscape Free &rarr;
      </Link>
    </div>
  )
}

export default function CompetitorSwotAnalysis() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <NavBar />

      <main className="max-w-[768px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Guide &middot; Competitor SWOT
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            Competitor SWOT Analysis: Template + Real Examples
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            A regular SWOT analysis looks inward at your own company. A competitor SWOT analysis turns the lens outward — you build a Strengths, Weaknesses, Opportunities, and Threats grid for each of your key competitors. The purpose is not academic. A well-executed competitor SWOT tells you exactly where a competitor is vulnerable, where they are strong, and — most importantly — where they are about to move next. This guide gives you the template, the data sources, and real examples to build one that is actually useful.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Why competitor SWOTs are different from regular SWOTs
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            When you SWOT your own company, you have access to internal data — revenue numbers, churn rates, team morale, product roadmap. When you SWOT a competitor, you are working from the outside in. This changes both the methodology and the mindset.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#FDF8F6] border border-[#E2E1DE] rounded-lg p-5">
              <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-widest mb-3">Internal SWOT (your company)</p>
              <ul className="space-y-2 text-sm text-[#1B2A4A]">
                {['Based on internal data and firsthand knowledge', 'Weaknesses are known precisely', 'Opportunities are evaluated against real capabilities', 'Threats are felt directly through revenue impact'].map(i => (
                  <li key={i} className="flex items-start gap-2"><span className="text-[#C1440E] mt-1">-</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F0EFF5] border border-[#E2E1DE] rounded-lg p-5">
              <p className="font-[family-name:var(--font-mono)] text-xs text-[#4A6FA5] uppercase tracking-widest mb-3">Competitor SWOT (external)</p>
              <ul className="space-y-2 text-sm text-[#1B2A4A]">
                {['Based on public signals and inference', 'Weaknesses must be deduced from reviews, churn signals, job postings', 'Opportunities are inferred from market gaps and strategic moves', 'Threats are identified from funding, partnerships, and product roadmap hints'].map(i => (
                  <li key={i} className="flex items-start gap-2"><span className="text-[#4A6FA5] mt-1">-</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Competitor SWOT template
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Use this template for each competitor you want to analyse. Focus on your top 3-5 direct competitors. Going beyond 5 produces diminishing returns — the analysis becomes a research project instead of a strategy tool.
          </p>
          <div className="space-y-6">
            {[
              {
                section: 'Competitor Profile',
                items: [
                  'Company name and URL',
                  'Founded date and funding stage/amount',
                  'Estimated revenue range (use SimilarWeb traffic + pricing to estimate)',
                  'Target customer segment(s)',
                  'Core product description (one sentence)',
                  'Key differentiator (what they claim makes them unique)',
                ],
              },
              {
                section: 'Strengths (what they do well)',
                items: [
                  'Product strengths (from G2/Capterra reviews rated 4-5 stars)',
                  'Market position strengths (brand recognition, market share, partnerships)',
                  'Technical strengths (platform, integrations, performance)',
                  'Team strengths (notable hires, leadership experience, domain expertise)',
                  'Financial strengths (funding runway, revenue growth, profitability)',
                ],
              },
              {
                section: 'Weaknesses (where they fall short)',
                items: [
                  'Product weaknesses (from G2/Capterra reviews rated 1-2 stars)',
                  'Customer complaints (common themes in negative reviews)',
                  'Market gaps (segments they do not serve well)',
                  'Operational signals (frequent job postings for the same role = retention issues)',
                  'Technical debt indicators (slow feature releases, outdated UI, migration issues)',
                ],
              },
              {
                section: 'Opportunities (market tailwinds they could capture)',
                items: [
                  'Market trends moving in their favour',
                  'Adjacent markets they could expand into',
                  'Technology shifts they are positioned to exploit',
                  'Regulatory changes that benefit their model',
                  'Partnership or acquisition opportunities',
                ],
              },
              {
                section: 'Threats (external pressures on them)',
                items: [
                  'New entrants specifically targeting their segment',
                  'Technology substitutes (AI, automation) that could disrupt their approach',
                  'Customer behaviour shifts away from their model',
                  'Key person risk (over-reliance on a specific leader or engineer)',
                  'Funding risk (running out of runway, unfavourable market for fundraising)',
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

        <CtaBox />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Data sources for each SWOT quadrant
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            The quality of a competitor SWOT depends entirely on the quality of your data. Here are the most reliable public data sources for each quadrant, ranked by usefulness.
          </p>
          <div className="space-y-6">
            {[
              {
                quadrant: 'Strengths',
                color: '#C1440E',
                sources: [
                  { source: 'G2/Capterra 4-5 star reviews', use: 'What customers love. Look for recurring themes across multiple reviews — these are genuine strengths, not anomalies.' },
                  { source: 'LinkedIn employee posts', use: 'Employees publicly celebrating wins, product launches, or customer milestones. Happy employees are a strength signal.' },
                  { source: 'Funding announcements', use: 'Recent fundraise = financial strength. The investor names and round size tell you how the market values the company.' },
                  { source: 'Product changelog / blog', use: 'Frequent, meaningful product releases signal strong engineering velocity and product focus.' },
                ],
              },
              {
                quadrant: 'Weaknesses',
                color: '#4A6FA5',
                sources: [
                  { source: 'G2/Capterra 1-2 star reviews', use: 'The most honest assessment of a competitor you will ever find. Customers who leave 1-star reviews describe precise pain points.' },
                  { source: 'Glassdoor reviews', use: 'Internal culture problems surface here. Recurring complaints about leadership, direction, or work-life balance indicate structural weaknesses.' },
                  { source: 'Job postings (repeated roles)', use: 'If they have been hiring for the same VP of Engineering for 6 months, something is wrong. Persistent job postings signal retention problems.' },
                  { source: 'Reddit / Hacker News threads', use: 'Developer and user communities are brutally honest about product shortcomings. Search for the competitor name in relevant subreddits.' },
                ],
              },
              {
                quadrant: 'Opportunities',
                color: '#1B2A4A',
                sources: [
                  { source: 'Job postings (new roles)', use: 'If they are hiring their first enterprise sales team, they are moving upmarket. New role types reveal strategic direction.' },
                  { source: 'Partnership announcements', use: 'New integrations and partnerships signal which markets they are pursuing next.' },
                  { source: 'Conference talks and blog content', use: 'Topics they write about reveal which markets they believe are growing. Content strategy is a proxy for business strategy.' },
                  { source: 'Patent filings', use: 'For larger competitors, recent patents reveal technology investments and future product direction.' },
                ],
              },
              {
                quadrant: 'Threats',
                color: '#9BA8B4',
                sources: [
                  { source: 'Competitor funding announcements', use: 'New well-funded entrants in the same space are a direct threat. Track who is getting funded to do what they do.' },
                  { source: 'Technology news', use: 'AI announcements, platform shifts, and new developer tools can threaten existing approaches. Monitor for technology substitutes.' },
                  { source: 'Customer review trends', use: 'If their average G2 rating is declining over time, customers are becoming less satisfied. This makes them vulnerable to a better alternative.' },
                  { source: 'Leadership changes', use: 'CEO departures, co-founder conflicts, and executive turnover create strategic uncertainty and execution risk.' },
                ],
              },
            ].map(q => (
              <div key={q.quadrant} className="bg-white border border-[#E2E1DE] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: q.color }} />
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">{q.quadrant}</p>
                </div>
                <div className="space-y-3">
                  {q.sources.map(s => (
                    <div key={s.source}>
                      <p className="text-sm font-semibold text-[#1B2A4A] mb-1">{s.source}</p>
                      <p className="text-sm text-[#6B7280] leading-relaxed">{s.use}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Turning competitor SWOTs into your strategy
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            A competitor SWOT is only useful if it changes what you do. Here is how to convert each quadrant into strategic actions for your own company.
          </p>
          <div className="space-y-5">
            {[
              {
                from: 'Their Strengths',
                action: 'Avoid competing head-to-head on their strengths. If a competitor has 10x your brand recognition, trying to outspend them on brand marketing is a losing strategy. Instead, identify the customer segments that value something their strength does not address.',
              },
              {
                from: 'Their Weaknesses',
                action: 'Target their weaknesses in your positioning. If G2 reviews consistently complain about their onboarding experience, make onboarding your differentiator. If they are weak with enterprise customers, build the enterprise features they cannot. Their weaknesses are your positioning opportunities.',
              },
              {
                from: 'Their Opportunities',
                action: 'Decide whether to race them or let them have it. If a competitor is well-positioned for a market opportunity, you have two choices: get there first, or concede that market and focus on an opportunity they are not pursuing. Trying to compete for every opportunity leads to strategic exhaustion.',
              },
              {
                from: 'Their Threats',
                action: 'Consider whether their threats are your opportunities. If AI is threatening their manual workflow approach, and you are building an AI-native product, their threat is your opportunity. Competitive dynamics are often zero-sum — what hurts them can help you.',
              },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-[#4A6FA5] pl-6 py-2">
                <p className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A] mb-2">{item.from} &rarr; Your action</p>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.action}</p>
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
                q: 'How often should you update competitor SWOTs?',
                a: 'Full competitor SWOTs should be refreshed every 6 months. Between full refreshes, maintain a lightweight monitoring system (Google Alerts on competitor names, monthly G2 review checks, quarterly job posting scans) and update specific quadrants when you see significant changes.',
              },
              {
                q: 'How many competitors should you SWOT?',
                a: 'Do full SWOTs for your top 3-5 direct competitors. For indirect competitors and substitutes, a lighter version (just Strengths and Threats) is sufficient. Going beyond 5 full SWOTs creates a research burden that most teams cannot sustain.',
              },
              {
                q: 'Should you share competitor SWOTs with the whole company?',
                a: 'Share a summarised version. The full analysis should be available to product, marketing, and sales leadership. A one-page summary highlighting key competitor strengths (for sales battlecards), weaknesses (for positioning), and strategic direction (for product roadmap) should go to the broader team.',
              },
              {
                q: 'How is a competitor SWOT different from a competitive battlecard?',
                a: 'A competitor SWOT is a strategic analysis tool — it helps you understand the competitive landscape and make positioning decisions. A battlecard is a sales enablement tool — it gives sales reps specific talking points, objection handlers, and comparison data for active deals. The SWOT feeds into the battlecard, but they serve different audiences and purposes.',
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
            <Link href="/guides/swot-analysis-guide" className="hover:text-[#1B2A4A] transition-colors">SWOT Guide</Link>
            <Link href="/guides/competitive-analysis-template" className="hover:text-[#1B2A4A] transition-colors">Analysis Template</Link>
            <Link href="/guides/competitive-benchmarking-guide" className="hover:text-[#1B2A4A] transition-colors">Benchmarking</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
