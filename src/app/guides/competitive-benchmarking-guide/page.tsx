import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Competitive Benchmarking Guide: Metrics That Matter',
  description: 'A practical guide to competitive benchmarking. Covers which metrics to benchmark, data sources, how to build a benchmarking framework, and how to present benchmark data to leadership.',
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
        Benchmark positioning, not just metrics
      </p>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
        Upload your competitor data to LandscapeBrief and see where each competitor sits on a positioning map. The quadrant reveals whether you are benchmarking against the right peers and where the whitespace sits.
      </p>
      <Link href="/app" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-6 py-3 rounded text-sm font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitive Landscape Free &rarr;
      </Link>
    </div>
  )
}

function FinalCta() {
  return (
    <div className="my-14 bg-[#1B2A4A] rounded-lg p-12 text-center">
      <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-widest mb-4">Ready?</p>
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white mb-3">
        Benchmark smarter. Position better.
      </h2>
      <p className="text-white/50 text-sm mb-8 max-w-[400px] mx-auto">
        LandscapeBrief turns your competitive data into a visual positioning map. See where you stand, where they stand, and where nobody stands.
      </p>
      <Link href="/app" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitive Landscape Free &rarr;
      </Link>
    </div>
  )
}

export default function CompetitiveBenchmarkingGuide() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <NavBar />

      <main className="max-w-[768px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Guide &middot; Competitive Benchmarking
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            Competitive Benchmarking Guide: Metrics That Matter
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Competitive benchmarking compares your company&apos;s performance against competitors using specific, measurable metrics. Unlike qualitative competitive analysis (which asks &quot;how do they position?&quot;), benchmarking asks &quot;how do they perform?&quot; The purpose is to identify performance gaps, set realistic targets, and prioritise improvements based on where you lag most behind the market. This guide covers which metrics to benchmark, where to find the data, and how to build a benchmarking framework that your team will actually use.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            The four categories of competitive benchmarks
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Not all benchmarks are equally useful. The four categories below are ordered from most actionable to least. Most teams make the mistake of starting with financial benchmarks (the hardest to collect and act on) when they should start with product and go-to-market benchmarks (the easiest to influence).
          </p>
          <div className="space-y-6">
            {[
              {
                category: 'Product benchmarks',
                color: '#C1440E',
                desc: 'How your product compares to competitors on features, quality, and user experience. These are the most actionable benchmarks because your product team can directly influence them.',
                metrics: [
                  { metric: 'Feature parity score', how: 'Build a feature matrix of the top 10 features customers care about. Score each competitor 0-3 (absent, basic, good, best-in-class). Your parity score is the percentage of features where you match or exceed the category average.' },
                  { metric: 'G2/Capterra satisfaction score', how: 'Track overall satisfaction rating and the ratings for specific categories (ease of use, support quality, value for money). Compare your ratings to each competitor quarterly.' },
                  { metric: 'Product release velocity', how: 'Count the number of meaningful product updates per quarter (from changelogs or product blogs). A competitor shipping 3x more frequently has a compounding advantage.' },
                  { metric: 'Time-to-value (onboarding)', how: 'Sign up for competitor free trials and measure how long it takes to reach the "aha moment." If a competitor gets users to value in 5 minutes and you take 30, that is a critical gap.' },
                ],
              },
              {
                category: 'Go-to-market benchmarks',
                color: '#4A6FA5',
                desc: 'How your marketing and sales efforts compare. These benchmarks reveal distribution advantages and disadvantages.',
                metrics: [
                  { metric: 'Organic search visibility', how: 'Use SEMrush or Ahrefs to compare domain authority, ranking keywords, and estimated organic traffic. A competitor with 5x your organic traffic has a structural acquisition advantage.' },
                  { metric: 'Share of voice', how: 'Track brand mentions across social media, press, and industry publications. Use Google Trends to compare search interest over time. Growing share of voice precedes growing market share.' },
                  { metric: 'Pricing position', how: 'Map competitor pricing tiers against yours. Are you the cheapest, the most expensive, or somewhere in the middle? Does your pricing model (per-seat, per-usage, flat fee) match what the market expects?' },
                  { metric: 'Sales model efficiency', how: 'Compare self-serve vs. sales-led approaches. If competitors are growing with self-serve and you require a sales team, your customer acquisition cost is likely higher. Track where competitors invest — hiring SDRs vs. building product-led growth features.' },
                ],
              },
              {
                category: 'Operational benchmarks',
                color: '#1B2A4A',
                desc: 'How your internal operations compare. These benchmarks are harder to collect for competitors but reveal structural advantages.',
                metrics: [
                  { metric: 'Team size and composition', how: 'Use LinkedIn to track competitor headcount by department. A competitor with 50 engineers vs. your 10 has more development capacity. A competitor with 30 salespeople vs. your 5 has a distribution machine you may not be able to match.' },
                  { metric: 'Hiring velocity', how: 'Track open positions on competitor career pages monthly. A competitor adding 20 positions per month is scaling aggressively. The roles they hire for reveal their strategic priorities.' },
                  { metric: 'Technology stack', how: 'Use BuiltWith or Wappalyzer to identify competitor tech stacks. A competitor running on a modern stack (Vercel, Next.js) may iterate faster than one on legacy infrastructure.' },
                  { metric: 'Customer support responsiveness', how: 'Test competitor support channels. Email a question to their support team and measure response time and quality. Check G2 reviews for support satisfaction ratings.' },
                ],
              },
              {
                category: 'Financial benchmarks',
                color: '#9BA8B4',
                desc: 'How your financial performance compares. These are the most commonly requested benchmarks but the hardest to collect for private competitors.',
                metrics: [
                  { metric: 'Revenue (estimated)', how: 'For private companies, estimate using: employee count x revenue-per-employee benchmark ($200-400k for SaaS). Cross-reference with traffic data and average contract value from pricing pages. Accuracy is low but directional estimates are useful.' },
                  { metric: 'Funding raised', how: 'Use Crunchbase or PitchBook. Total funding tells you the cash available for growth. The round size and investor quality signals market confidence in the company.' },
                  { metric: 'Burn rate indicators', how: 'If a competitor raised $20M two years ago and has 80 employees, their burn rate is roughly $800k-1.2M per month. This tells you how long their runway is and how aggressively they can invest.' },
                  { metric: 'Pricing and margin indicators', how: 'Compare pricing tiers and packages. If a competitor offers a lower price with a larger team, they are either subsidising growth with venture capital, have a more efficient cost structure, or are losing money.' },
                ],
              },
            ].map(cat => (
              <div key={cat.category} className="bg-white border border-[#E2E1DE] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1B2A4A]">{cat.category}</h3>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{cat.desc}</p>
                <div className="space-y-4">
                  {cat.metrics.map(m => (
                    <div key={m.metric} className="bg-[#F0EFF5] rounded p-4">
                      <p className="font-semibold text-[#1B2A4A] text-sm mb-1">{m.metric}</p>
                      <p className="text-xs text-[#6B7280] leading-relaxed">{m.how}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <CtaBox />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            How to build a benchmarking framework
          </h2>
          <div className="space-y-8">
            {[
              { n: '01', title: 'Select your benchmark peer set', body: 'Choose 3-5 competitors that are the most relevant to benchmark against. "Relevant" means similar stage, similar target segment, and similar market. Do not benchmark a 10-person startup against Salesforce — it tells you nothing actionable. If you must include an aspirational benchmark, label it clearly as such.' },
              { n: '02', title: 'Choose 8-12 metrics across categories', body: 'Select 2-3 metrics from each of the four categories above. Pick metrics where (a) you can reliably collect data for competitors, and (b) you can actually take action on the gap. A benchmark that reveals a gap you cannot close is interesting but not useful.' },
              { n: '03', title: 'Establish your baseline', body: 'Collect data for all metrics for all competitors and for yourself at the same point in time. This is your baseline snapshot. Document your sources and methodology so the data is reproducible. Inconsistent measurement methods between periods make trend data meaningless.' },
              { n: '04', title: 'Score and rank', body: 'For each metric, score every company (including yourself) on a consistent scale. A simple approach: rank order within the peer set (1st through 5th). A more nuanced approach: normalise each metric to a 0-100 scale where the best performer = 100 and the worst = 0.' },
              { n: '05', title: 'Identify gap priorities', body: 'The most important gaps are where you rank lowest on metrics that matter most to customers. Not all gaps are worth closing. A competitor may lead on a metric that your target segment does not care about. Focus on the gaps that would change customer behaviour if closed.' },
              { n: '06', title: 'Set targets and track quarterly', body: 'For each priority gap, set a target: "Close the G2 satisfaction gap from 0.4 points behind to parity within 6 months." Track quarterly. The value of benchmarking is not the snapshot — it is the trajectory. Are you closing gaps or are they widening?' },
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

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Presenting benchmark data to leadership
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            The way you present benchmarks determines whether they drive action or get filed away. Here are the presentation formats that work.
          </p>
          <div className="space-y-5">
            {[
              {
                format: 'The gap chart',
                desc: 'A horizontal bar chart showing your score vs. the peer set average for each metric. Bars that extend to the right show where you lead; bars extending left show where you lag. This immediately focuses attention on the biggest gaps.',
              },
              {
                format: 'The radar/spider chart',
                desc: 'A radar chart with one spoke per metric category. Overlay your shape on the competitor average shape. Where your shape is smaller, you are underperforming. This format works well for showing the overall competitive position at a glance.',
              },
              {
                format: 'The trajectory table',
                desc: 'A table showing each metric over 4 quarters with an arrow indicating direction (improving, stable, declining). This format is best for board presentations because it shows momentum, not just position. An improving trajectory on a lagging metric is more encouraging than a static lead.',
              },
              {
                format: 'The "one metric that matters" spotlight',
                desc: 'For operational reviews, highlight the single most important benchmark gap and the specific plan to close it. Leadership does not need to see all 12 metrics every time. They need to see the one that matters most right now and know that someone owns the improvement plan.',
              },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-[#4A6FA5] pl-6 py-2">
                <p className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A] mb-2">{item.format}</p>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Common benchmarking mistakes
          </h2>
          <div className="space-y-5">
            {[
              {
                mistake: 'Benchmarking against the wrong peers',
                fix: 'The most common error. Benchmarking against companies that are 10x your size, in a different segment, or at a fundamentally different stage tells you nothing actionable. Your peer set should be companies your customers actually consider as alternatives.',
              },
              {
                mistake: 'Treating estimated data as precise',
                fix: 'Traffic estimates, revenue estimates, and market share numbers for private companies are directional at best. Present them with appropriate uncertainty. "Competitor X has approximately 2-3x our organic traffic" is honest. "Competitor X has 147,000 monthly visitors" implies false precision.',
              },
              {
                mistake: 'Benchmarking too many metrics',
                fix: 'A benchmarking framework with 30 metrics paralyses decision-making. Start with 8-12 and ruthlessly cut any metric where (a) you cannot reliably collect competitor data, or (b) closing the gap would not change your strategy.',
              },
              {
                mistake: 'Benchmarking as a one-time exercise',
                fix: 'A single benchmark snapshot is mildly interesting. A quarterly benchmark that shows your trajectory relative to competitors is strategically valuable. The commitment is to track trends, not just measure once.',
              },
              {
                mistake: 'Focusing on where you lag instead of where you lead',
                fix: 'Benchmarking naturally draws attention to weaknesses, but your leading metrics are just as important. They tell you what to protect and double down on. A metric where you lead by 2x may be more strategically important than a metric where you lag by 10%.',
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
                q: 'How is competitive benchmarking different from competitive analysis?',
                a: 'Competitive analysis is qualitative — it examines how competitors position, their strengths and weaknesses, and the market structure. Competitive benchmarking is quantitative — it compares specific, measurable metrics. Think of it this way: competitive analysis tells you who the competitors are and how they play. Benchmarking tells you how fast they are running. Both are needed for a complete picture.',
              },
              {
                q: 'What is the minimum number of competitors needed for useful benchmarks?',
                a: 'Three is the minimum for meaningful comparison. With two competitors, you have a comparison but no context. With three or more, you can calculate averages, identify outliers, and spot industry norms. Five is ideal — enough for statistical patterns without overwhelming data collection.',
              },
              {
                q: 'How do you benchmark when competitors are private companies?',
                a: 'You estimate. Use employee count (LinkedIn) x revenue-per-employee benchmarks. Use SimilarWeb for traffic. Use G2 for product quality. Use Crunchbase for funding. Use job postings for hiring velocity. The estimates will not be precise, but they will be directional — which is sufficient for strategic benchmarking.',
              },
              {
                q: 'Should competitive benchmarks be shared with the whole company?',
                a: 'Share selectively. The full benchmarking framework should be available to leadership and department heads. Specific benchmark results should go to the team that owns that metric — product benchmarks to the product team, GTM benchmarks to marketing and sales. Do not overwhelm the organisation with data they cannot act on.',
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
            <Link href="/guides/competitor-swot-analysis" className="hover:text-[#1B2A4A] transition-colors">Competitor SWOT</Link>
            <Link href="/guides/industry-landscape-report" className="hover:text-[#1B2A4A] transition-colors">Landscape Report</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
