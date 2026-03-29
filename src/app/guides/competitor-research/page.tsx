import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Competitor Research: How to Build Competitive Intelligence Without a Budget',
  description: 'You don\'t need a $50K competitive intelligence firm. The best competitor data is publicly available. Here are 10 free sources and how to extract intelligence from each.',
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
        LandscapeBrief organizes your competitor research into a quadrant map and professional PDF report
      </p>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
        Once you have your competitor data, upload it as a CSV. LandscapeBrief positions each competitor on a 2×2 quadrant, identifies the whitespace, and generates the executive brief.
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
        You have the research. Now build the map.
      </h2>
      <p className="text-white/50 text-sm mb-8 max-w-[400px] mx-auto">
        Turn your competitor spreadsheet into a board-ready quadrant map in under 3 minutes.
      </p>
      <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitive Landscape Free →
      </Link>
    </div>
  )
}

export default function CompetitorResearch() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <NavBar />

      <main className="max-w-[768px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Guide · Competitive Intelligence
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            Competitor Research: How to Build Competitive Intelligence Without a Budget
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            You don't need a $50K competitive intelligence firm. The best competitor data is publicly available — in job postings, product reviews, pricing pages, and Google Ads. The companies that win at competitor research don't spend more money; they look in better places and know what signals to track.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            10 places to find competitor data (and what to extract from each)
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Each source below gives you a different type of intelligence. Used together, they build a surprisingly complete picture of how a competitor operates, where they are investing, and where they are weak.
          </p>
          <div className="space-y-6">
            {[
              {
                n: '01',
                source: 'LinkedIn',
                extract: 'Headcount, team structure, hiring velocity, executive backgrounds',
                how: 'Check the "People" tab for size and growth rate. Look at how they describe themselves in their company description — the language they use publicly is the positioning they\'re committed to.',
              },
              {
                n: '02',
                source: 'Job postings',
                extract: 'Strategic priorities, technology stack, target customers, growth areas',
                how: 'A company building AI features will post for ML engineers before anyone outside hears about it. A company entering enterprise will post for enterprise account executives 6–12 months before the product is ready. Read job postings as strategy signals.',
              },
              {
                n: '03',
                source: 'Product Hunt',
                extract: 'Original positioning, early community feedback, feature history',
                how: 'Search for their product launch page. Read the first 50 comments — this is unfiltered early customer reaction. Also note the tagline they launched with vs. how they describe themselves now. The drift reveals a pivot.',
              },
              {
                n: '04',
                source: 'Glassdoor',
                extract: 'Internal culture, execution problems, leadership quality, burn rate signals',
                how: 'Read the negative reviews for patterns. Recurring complaints about "sales promises features that don\'t exist" or "constant pivots" are strategy intelligence. Also check CEO approval rating for leadership stability.',
              },
              {
                n: '05',
                source: 'App Store / Google Play reviews',
                extract: 'Feature gaps, reliability issues, customer segment feedback',
                how: 'Filter for 1-star and 2-star reviews only. Group the complaints by theme. These are your product differentiation opportunities — the things their customers hate that you can do better.',
              },
              {
                n: '06',
                source: 'SimilarWeb',
                extract: 'Traffic volume, traffic sources, geographic reach, growth trajectory',
                how: 'Free tier gives traffic estimates and top traffic sources. Compare traffic channels — a competitor heavily dependent on paid search is one algorithm change away from losing customers. A competitor with 70%+ organic is hard to displace quickly.',
              },
              {
                n: '07',
                source: 'Google Ads Transparency Center',
                extract: 'Messaging, ICP (ideal customer profile), value proposition, budget signals',
                how: 'Search ads.google.com/transparency for any competitor. See every active ad they\'re running. The ad copy tells you the positioning they\'re paying to defend — these are the claims they believe convert. The keywords they buy tell you the customer pain they\'re targeting.',
              },
              {
                n: '08',
                source: 'Customer reviews (G2, Capterra, Trustpilot)',
                extract: 'Use cases, switching reasons, integration needs, ROI stories',
                how: 'Sort by "most recent" not "most helpful." Read reviews that mention competitors — these contain the switching stories that reveal what drives customers out of an incumbent. The phrases customers use in reviews are the exact words that belong in your marketing.',
              },
              {
                n: '09',
                source: 'Pricing pages',
                extract: 'Pricing model, tier structure, enterprise anchoring, feature bundling strategy',
                how: 'Screenshot competitor pricing pages monthly. The structure changes slowly but deliberately — moving from per-seat to usage-based, adding an enterprise tier, changing what\'s in the free plan. Each change signals a strategic shift.',
              },
              {
                n: '10',
                source: 'Press releases and news coverage',
                extract: 'Funding rounds, partnerships, acquisitions, executive changes',
                how: 'Set up Google Alerts for each competitor\'s name. A funding round signals 18 months of aggressive growth ahead. An acquisition signals capability gaps they couldn\'t build. An executive departure often precedes a pivot.',
              },
            ].map(item => (
              <div key={item.n} className="bg-white border border-[#E2E1DE] rounded-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] tracking-widest shrink-0 pt-0.5">{item.n}</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1B2A4A]">{item.source}</h3>
                    <p className="font-[family-name:var(--font-mono)] text-xs text-[#4A6FA5] mt-1 uppercase tracking-wider">{item.extract}</p>
                  </div>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed pl-8">{item.how}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            What to track for each competitor
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Once you have the sources, you need a consistent data model. Track these five dimensions for each competitor in your spreadsheet:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1B2A4A]">
                  <th className="text-left p-4 text-white font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider font-normal">Dimension</th>
                  <th className="text-left p-4 text-white font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider font-normal">What to record</th>
                  <th className="text-left p-4 text-white font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider font-normal">Update frequency</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dim: 'Pricing', record: 'Starting price, pricing model, free tier, enterprise tier', freq: 'Monthly' },
                  { dim: 'Features', record: 'Core capabilities, recent launches, roadmap signals from job posts', freq: 'Quarterly' },
                  { dim: 'Target market', record: 'Stated ICP, actual customers from reviews, verticals served', freq: 'Quarterly' },
                  { dim: 'Messaging', record: 'Primary headline, key claims, CTA language from ads and homepage', freq: 'Monthly' },
                  { dim: 'Growth signals', record: 'Employee count, funding, new hires, partnership announcements', freq: 'Monthly' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F0EFF5]'}>
                    <td className="p-4 text-[#1B2A4A] font-medium border-b border-[#E2E1DE]">{row.dim}</td>
                    <td className="p-4 text-[#6B7280] border-b border-[#E2E1DE]">{row.record}</td>
                    <td className="p-4 text-[#9BA8B4] font-[family-name:var(--font-mono)] text-xs border-b border-[#E2E1DE]">{row.freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            How to track competitors over time
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            The most valuable competitive intelligence isn't the current snapshot — it's the direction of travel. A lightweight monitoring system built in an afternoon will catch strategic shifts months before they become obvious.
          </p>
          <div className="space-y-4">
            {[
              { tool: 'Google Alerts', setup: 'Set one alert per competitor name. Deliver weekly digests, not real-time. Real-time creates noise.', cost: 'Free' },
              { tool: 'LinkedIn company follow', setup: 'Follow each competitor. LinkedIn surfaces company updates, new hires, and job posts in your feed.', cost: 'Free' },
              { tool: 'Web archive / screenshot tool', setup: 'Use archive.org to track homepage and pricing page changes quarterly. Wayback Machine stores snapshots automatically.', cost: 'Free' },
              { tool: 'G2 or Capterra email alerts', setup: 'Both platforms can notify you when new reviews are posted for specific products. Set one per competitor.', cost: 'Free' },
              { tool: 'Monthly 30-minute review', setup: 'Block 30 minutes at the end of each month. Review alerts, update your competitor spreadsheet, flag anything that changed your positioning thinking.', cost: '30 min/month' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 bg-[#FAFAF8] border border-[#E2E1DE] rounded-lg p-5">
                <div className="shrink-0 w-8 h-8 rounded bg-[#F0EFF5] flex items-center justify-center">
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#4A6FA5]">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-[#1B2A4A] text-sm">{item.tool}</p>
                    <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#9BA8B4] uppercase tracking-wider">{item.cost}</span>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.setup}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CtaBox />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Analyzing competitor job postings for strategic intelligence
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Job postings are the most underused source in competitor research. Companies disclose their strategy in job descriptions months before they announce it publicly. Here's what to look for:
          </p>
          <div className="space-y-5">
            {[
              { signal: 'Enterprise Account Executive roles', meaning: 'Moving upmarket into enterprise — expect longer sales cycles, new features for compliance/security, and a pricing tier increase in 6–12 months.' },
              { signal: 'Machine learning / AI engineer roles', meaning: 'Building AI into the product. Watch for AI-native feature announcements in the next product cycle.' },
              { signal: 'Vertical-specific roles (e.g., "Healthcare Sales")', meaning: 'Entering a specific vertical. If that vertical is one you were planning to target, they now have a head start.' },
              { signal: 'Large batch of engineering hires', meaning: 'Significant platform investment — a major rewrite, new architecture, or new product line. Often precedes a rebrand or pricing overhaul.' },
              { signal: 'Customer Success / Onboarding hires', meaning: 'Either rapid growth (good for the category) or high churn that requires more hand-holding (exploitable weakness).' },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-[#4A6FA5] pl-6 py-2">
                <p className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A] mb-1">Signal: {item.signal}</p>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.meaning}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Customer review mining — what you can learn from 1-star reviews
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            The most honest competitive intelligence your competitors generate is written by their unhappy customers in 1-star reviews. This is information they cannot suppress, and they don't get to spin it.
          </p>
          <div className="space-y-5">
            {[
              { theme: 'Pricing complaints', intel: 'Customers feel the product isn\'t worth what they pay. This is a direct signal that a lower-priced alternative with 80% of the features would take customers.' },
              { theme: 'Customer support complaints', intel: 'A structural weakness — improving support requires hiring, which takes time. This gap is exploitable and persists.' },
              { theme: '"Too complex" or "steep learning curve"', intel: 'The product has prioritised features over usability. A simpler product targeting the same use case has a clear entry point.' },
              { theme: 'Missing specific features', intel: 'If 10+ reviews mention the same missing feature, that\'s a build target. If you ship it first, mention it in your comparison content.' },
              { theme: '"Used to be good, but..."', intel: 'A product in decline — often after an acquisition or pricing change. Former fans are actively looking for alternatives. This is the best moment to reach them.' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#E2E1DE] rounded-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-3.5 h-3.5 text-[#C1440E]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[#9BA8B4] uppercase tracking-wider">Review theme: {item.theme}</p>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.intel}</p>
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
                q: 'Is competitor research ethical? What are the limits?',
                a: 'Researching publicly available information — pricing pages, job postings, public reviews, press releases, advertising — is entirely standard practice and expected at every level of business. The line is accessing private information: hacking, impersonating, or deceiving competitors\' employees to extract information is off-limits and illegal in most jurisdictions.',
              },
              {
                q: 'How long should competitor research take?',
                a: 'An initial deep dive on 5–8 competitors should take 2–4 hours. Ongoing monitoring, once the system is set up, should take no more than 30 minutes per month per competitor. If it\'s taking longer, you\'re tracking too many attributes.',
              },
              {
                q: 'Should you talk to competitors\' customers directly?',
                a: 'Yes — and this is often the highest-signal research you can do. If you have a sales motion, ask every prospect why they looked at alternatives and what they liked and disliked. If you don\'t have inbound prospects yet, look for churned customers from competitors on LinkedIn and reach out directly.',
              },
              {
                q: 'What do you do with competitor research once you have it?',
                a: 'Synthesise it into a positioning map that shows where each competitor sits on two strategic axes. Then identify the whitespace — the quadrant or attribute combination no competitor owns — and build your positioning thesis around that gap. LandscapeBrief does this synthesis automatically from a CSV.',
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
            <Link href="/guides/competitive-landscape-analysis" className="hover:text-[#1B2A4A] transition-colors">Landscape Analysis</Link>
            <Link href="/guides/market-positioning-map" className="hover:text-[#1B2A4A] transition-colors">Positioning Map</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
