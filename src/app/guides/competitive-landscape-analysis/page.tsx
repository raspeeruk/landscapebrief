import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Competitive Landscape Analysis: How to Do It Right (2025 Guide)',
  description: 'Investors ask about competitive landscape in every pitch. Most founders answer it wrong. Here is how to build a competitive landscape analysis that actually holds up.',
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
        Build your competitive landscape analysis in under 3 minutes
      </p>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
        Upload your competitor list. LandscapeBrief positions them on a 2×2 quadrant, chooses the most strategically meaningful axes, identifies whitespace, and writes the executive summary.
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
        Make your competitive slide the strongest in the deck.
      </h2>
      <p className="text-white/50 text-sm mb-8 max-w-[400px] mx-auto">
        LandscapeBrief builds the map, picks the axes, and writes the brief. Free to start.
      </p>
      <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitive Landscape Free →
      </Link>
    </div>
  )
}

export default function CompetitiveLandscapeAnalysis() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <NavBar />

      <main className="max-w-[768px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Guide · Competitive Landscape
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            Competitive Landscape Analysis: How to Do It Right (2025 Guide)
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Investors ask about your competitive landscape in every pitch meeting. Most founders answer it wrong — they list competitors and explain why they're worse. A real competitive landscape analysis shows the shape of the market, where you sit in it, and — critically — where no one else sits. That last part is what investors are actually looking for.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            What a competitive landscape analysis is (and isn't)
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            A competitive landscape analysis is a structured overview of the competitive forces in a market — who the players are, how they position themselves, and what space remains unclaimed. It answers the strategic question: <em className="text-[#1B2A4A]">where can we win that others cannot easily follow?</em>
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            It is not a product comparison chart. Comparing features side by side is useful for sales, but it doesn't tell you anything about the shape of your market. A landscape analysis operates at a higher level of abstraction.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#FDF8F6] border border-[#E2E1DE] rounded-lg p-5">
              <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-widest mb-3">Is</p>
              <ul className="space-y-2 text-sm text-[#1B2A4A]">
                {['Strategic positioning of all market players', 'Identification of unclaimed whitespace', 'Understanding of market structure', 'Basis for differentiation decisions'].map(i => (
                  <li key={i} className="flex items-start gap-2"><span className="text-[#4A6FA5] mt-1">→</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F0EFF5] border border-[#E2E1DE] rounded-lg p-5">
              <p className="font-[family-name:var(--font-mono)] text-xs text-[#9BA8B4] uppercase tracking-widest mb-3">Is not</p>
              <ul className="space-y-2 text-sm text-[#1B2A4A]">
                {['A feature comparison table', 'A list of why competitors are worse', 'A reason to dismiss the competition', 'A one-time exercise'].map(i => (
                  <li key={i} className="flex items-start gap-2"><span className="text-[#9BA8B4] mt-1">✕</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            The 4-quadrant competitive map
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            The 2×2 quadrant map (also called a positioning map or perceptual map) is the standard format for competitive landscape visualisation. It places competitors on two axes that represent the most strategically meaningful dimensions of your market.
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            For example, a CRM market map might use <strong className="text-[#1B2A4A]">price</strong> on the X axis and <strong className="text-[#1B2A4A]">market focus (SMB vs. Enterprise)</strong> on the Y axis. This immediately shows that most incumbents cluster in the enterprise-high-cost quadrant, while the low-cost SMB quadrant has newer entrants. The empty quadrants represent whitespace.
          </p>
          <div className="bg-[#F0EFF5] border border-[#E2E1DE] rounded-lg p-8">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Q2 — High price, low market focus (SMB)', color: '#E2E1DE', text: '#9BA8B4', note: 'Often overcrowded — premium players chasing the same customer' },
                { label: 'Q1 — High price, high market focus (Enterprise)', color: '#1B2A4A', text: 'white', note: 'Incumbent territory — high barriers, long sales cycles' },
                { label: 'Q3 — Low price, low market focus (SMB)', color: '#FDF8F6', text: '#6B7280', note: 'Commodity zone — compete on price alone' },
                { label: 'Q4 — Low price, high market focus (Enterprise)', color: '#FDF8F6', text: '#C1440E', note: 'Whitespace — disruption often starts here' },
              ].map(q => (
                <div key={q.label} className="rounded p-4" style={{ backgroundColor: q.color }}>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider mb-2" style={{ color: q.text === 'white' ? 'rgba(255,255,255,0.6)' : q.color === '#1B2A4A' ? 'white' : q.text }}>{q.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: q.text === 'white' ? 'rgba(255,255,255,0.7)' : '#6B7280' }}>{q.note}</p>
                </div>
              ))}
            </div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#9BA8B4] mt-4 text-center uppercase tracking-wider">
              X axis: Price (low → high) · Y axis: Market focus (SMB → Enterprise)
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Step-by-step: building your competitive landscape analysis
          </h2>
          <div className="space-y-8">
            {[
              { n: '01', title: 'Define the market boundaries', body: 'Write one paragraph that defines the market precisely — what customer segment, what job to be done, what geographic scope. This scoping decision determines everything that follows.' },
              { n: '02', title: 'List all three competitor tiers', body: 'Identify direct competitors (same product, same customer), indirect competitors (different product, same problem), and substitute options (customers doing the job without a dedicated product). Aim for 5–15 players total.' },
              { n: '03', title: 'Choose your two axes', body: 'Select the two dimensions that most meaningfully differentiate players in your market. These should be attributes your target customers actually care about when choosing between options.' },
              { n: '04', title: 'Plot each competitor', body: 'Position every competitor on the quadrant based on objective data where possible — pricing pages, G2 reviews, analyst reports, job postings. Avoid guessing; note your sources.' },
              { n: '05', title: 'Identify clusters and whitespace', body: 'Look for quadrants where competitors cluster. Then look for quadrants that are empty or sparse. Clusters reveal conventional wisdom. Empty quadrants reveal opportunity.' },
              { n: '06', title: 'Write the whitespace hypothesis', body: 'For each empty quadrant, articulate why it\'s empty. Is there no customer demand there? Or has no one built for it yet? This distinction is the core strategic question your analysis must answer.' },
              { n: '07', title: 'Define your positioning statement', body: 'Based on the whitespace analysis, write a one-sentence positioning statement: "For [customer] who [job to be done], [company] is the [category] that [unique value] because [proof]."' },
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
            How to choose your axes
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            The axis choice changes the story your map tells. Two founders with the same competitor set can produce completely different landscapes — one that shows them in a crowded market, one that shows them owning whitespace — purely through axis selection. Choose deliberately.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1B2A4A] text-white">
                  <th className="text-left p-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider font-normal">Axis pair</th>
                  <th className="text-left p-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider font-normal">Best for</th>
                  <th className="text-left p-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider font-normal">Typical whitespace</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pair: 'Price vs. Quality / Service level', best: 'Consumer products, B2B SaaS', space: 'High quality at low price (disruption opportunity)' },
                  { pair: 'Feature richness vs. Simplicity', best: 'Productivity software, tools', space: 'Simple tools for complex workflows' },
                  { pair: 'Niche vs. General purpose', best: 'Professional services, platforms', space: 'Deep vertical solutions' },
                  { pair: 'Traditional vs. Modern / AI-native', best: 'Industries undergoing tech shift', space: 'Modern approach to legacy market' },
                  { pair: 'SMB vs. Enterprise focus', best: 'B2B software at any stage', space: 'Mid-market that neither side serves well' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F0EFF5]'}>
                    <td className="p-4 text-[#1B2A4A] font-medium border-b border-[#E2E1DE]">{row.pair}</td>
                    <td className="p-4 text-[#6B7280] border-b border-[#E2E1DE]">{row.best}</td>
                    <td className="p-4 text-[#6B7280] border-b border-[#E2E1DE]">{row.space}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <CtaBox />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            What investors want to see in competitive landscape slides
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            The competitive slide is one of the most read slides in any pitch deck. Investors use it to assess two things: whether you understand your market, and whether there is a real positioning thesis.
          </p>
          <div className="space-y-5">
            {[
              { want: 'Honest competitor inclusion', detail: 'Include the big names even if they\'re not direct competitors. Leaving out Salesforce from a CRM competitive map looks naive, not clever.' },
              { want: 'Axes chosen for strategic meaning, not aesthetics', detail: 'Investors will immediately spot if you chose axes that conveniently put you in the best quadrant. Choose axes that your customers actually use to make decisions.' },
              { want: 'Your company plotted on the map', detail: 'Some founders put up a quadrant and don\'t show where they sit. That\'s a red flag. Show your position and own it.' },
              { want: 'A clear whitespace thesis', detail: 'The slide should tell a story: "The market is structured like this. Everyone else is over here. We are building for this unclaimed segment." One sentence, visible from the back of the room.' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#E2E1DE] rounded-lg p-5 flex gap-4">
                <span className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] tracking-widest shrink-0 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="font-semibold text-[#1B2A4A] text-sm mb-1">{item.want}</p>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            When your competitive map makes you look bad — and what to do
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Sometimes you plot the map and find yourself positioned directly on top of three well-funded competitors. This is useful information. Here is how to respond to it:
          </p>
          <div className="space-y-5">
            {[
              { scenario: 'You\'re in a crowded quadrant', response: 'Change the axes. Not to hide the competition, but because the axes you chose aren\'t showing the dimension that actually matters to your specific target customer. Try a more specific axis combination.' },
              { scenario: 'Your target segment is already well-served', response: 'Question your target segment. Overly broad target segments (e.g., "SMBs") hide sub-segments where you can win decisively. Narrow your focus until the whitespace becomes visible.' },
              { scenario: 'A competitor has your exact positioning', response: 'This is valuable. Now your analysis pivots to: what do they do poorly? Read 1-star reviews, talk to their churned customers, understand their structural constraints. That\'s where your strategy lives.' },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-[#4A6FA5] pl-6 py-2">
                <p className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A] mb-2">Scenario: {item.scenario}</p>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.response}</p>
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
                q: 'How is a competitive landscape analysis different from a SWOT analysis?',
                a: 'A SWOT analysis is internal — it evaluates your own Strengths, Weaknesses, Opportunities, and Threats. A competitive landscape analysis is external — it maps the market structure. They complement each other but serve different purposes. Do the landscape analysis first; the SWOT becomes more accurate once you know the market shape.',
              },
              {
                q: 'Do I need market share data to do a competitive landscape analysis?',
                a: 'No. Market share data is useful but rarely available for private companies, which are usually your most relevant competitors. You can build an accurate positioning map from pricing pages, G2 reviews, job postings, and product demos alone.',
              },
              {
                q: 'Should startups include future competitors in the analysis?',
                a: 'Yes — but label them clearly as "emerging." Track companies in adjacent categories that are moving toward your market. A competitor three pivots away today can be direct competition in 18 months.',
              },
              {
                q: 'What software do people use to build competitive landscape quadrants?',
                a: 'Historically: PowerPoint, Keynote, or Figma — drawn by hand. LandscapeBrief automates the process: upload a CSV of competitors and attributes, and it generates the quadrant, chooses the axes, and writes the executive summary automatically.',
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
            <Link href="/guides/competitor-research" className="hover:text-[#1B2A4A] transition-colors">Competitor Research</Link>
            <Link href="/guides/market-positioning-map" className="hover:text-[#1B2A4A] transition-colors">Positioning Map</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
