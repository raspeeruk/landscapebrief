import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Market Positioning Map: How to Create One (+ Examples)',
  description: 'A positioning map makes the white space in your market instantly visible — to you and to investors. Here\'s how to create one, with examples across SaaS, consumer, and services.',
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
        Build your positioning map automatically — no design tools required
      </p>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
        Upload a CSV of your competitors. LandscapeBrief chooses the most strategically meaningful axes, plots every competitor, identifies whitespace, and exports a board-ready PDF.
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
        Your positioning map is one CSV away.
      </h2>
      <p className="text-white/50 text-sm mb-8 max-w-[400px] mx-auto">
        LandscapeBrief generates it automatically and exports a board-ready PDF. Free to start.
      </p>
      <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitive Landscape Free →
      </Link>
    </div>
  )
}

function MiniQuadrant({ title, xLabel, yLabel, dots }: {
  title: string
  xLabel: [string, string]
  yLabel: [string, string]
  dots: { x: number; y: number; label: string; highlight?: boolean }[]
}) {
  const W = 260
  const H = 200
  const PAD = 36

  function toSvgX(v: number) { return PAD + (v / 100) * (W - PAD * 2) }
  function toSvgY(v: number) { return H - PAD - (v / 100) * (H - PAD * 2) }

  return (
    <div className="bg-white border border-[#E2E1DE] rounded-lg overflow-hidden">
      <div className="bg-[#1B2A4A] px-4 py-2.5">
        <p className="font-[family-name:var(--font-mono)] text-[10px] text-white/60 uppercase tracking-wider">{title}</p>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
        <rect x={PAD} y={PAD} width={(W - PAD * 2) / 2} height={(H - PAD * 2) / 2} fill="#F0EFF5" opacity="0.5" />
        <rect x={PAD + (W - PAD * 2) / 2} y={PAD} width={(W - PAD * 2) / 2} height={(H - PAD * 2) / 2} fill="#FDF8F6" opacity="0.4" />
        <rect x={PAD} y={PAD + (H - PAD * 2) / 2} width={(W - PAD * 2) / 2} height={(H - PAD * 2) / 2} fill="#FAFAF8" opacity="0.3" />
        <rect x={PAD + (W - PAD * 2) / 2} y={PAD + (H - PAD * 2) / 2} width={(W - PAD * 2) / 2} height={(H - PAD * 2) / 2} fill="#FAFAF8" opacity="0.2" />
        <line x1={PAD} y1={PAD + (H - PAD * 2) / 2} x2={W - PAD} y2={PAD + (H - PAD * 2) / 2} stroke="#1B2A4A" strokeWidth="0.75" opacity="0.15" />
        <line x1={PAD + (W - PAD * 2) / 2} y1={PAD} x2={PAD + (W - PAD * 2) / 2} y2={H - PAD} stroke="#1B2A4A" strokeWidth="0.75" opacity="0.15" />
        <rect x={PAD} y={PAD} width={W - PAD * 2} height={H - PAD * 2} fill="none" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.1" />
        <text x={PAD} y={H - 6} fill="#9BA8B4" fontSize="7" fontFamily="monospace">{xLabel[0]}</text>
        <text x={W - PAD} y={H - 6} fill="#9BA8B4" fontSize="7" textAnchor="end" fontFamily="monospace">{xLabel[1]}</text>
        <text x={6} y={H - PAD + 4} fill="#9BA8B4" fontSize="7" fontFamily="monospace">{yLabel[0]}</text>
        <text x={6} y={PAD + 4} fill="#9BA8B4" fontSize="7" fontFamily="monospace">{yLabel[1]}</text>
        {dots.map((dot, i) => (
          <g key={i}>
            <circle cx={toSvgX(dot.x)} cy={toSvgY(dot.y)} r={5} fill={dot.highlight ? '#C1440E' : '#4A6FA5'} stroke="white" strokeWidth="1.5" opacity="0.9" />
            <text x={toSvgX(dot.x) + 7} y={toSvgY(dot.y) + 3} fill={dot.highlight ? '#C1440E' : '#1B2A4A'} fontSize="7" fontFamily="monospace" fontWeight={dot.highlight ? 'bold' : 'normal'}>{dot.label}</text>
          </g>
        ))}
      </svg>
    </div>
  )
}

export default function MarketPositioningMap() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <NavBar />

      <main className="max-w-[768px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Guide · Positioning Maps
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            Market Positioning Map: How to Create One (+ Examples)
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            A positioning map makes the white space in your market instantly visible — to you and to investors. A well-made positioning map can do in ten seconds what a thousand-word competitive analysis cannot: show an empty quadrant and make a clear argument for why your company belongs there.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            What is a positioning map?
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            A positioning map (also called a perceptual map or competitive map) is a two-dimensional chart that plots multiple competitors on two axes representing the most strategically important dimensions of a market. Each competitor appears as a dot. The clusters show conventional wisdom. The empty space shows opportunity.
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            The power of the format is compression. A market with 15 competitors and dozens of attributes becomes a single visual that tells one clear story. That story is: <em className="text-[#1B2A4A]">"everyone else is over here — we are positioning over there."</em>
          </p>
          <div className="bg-[#F0EFF5] border border-[#E2E1DE] rounded-lg p-6">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#4A6FA5] uppercase tracking-widest mb-4">What a positioning map shows</p>
            <ul className="space-y-3">
              {[
                'Where each competitor is positioned on two strategic dimensions',
                'Which quadrants are crowded (conventional positioning)',
                'Which quadrants are empty (whitespace — potential differentiation)',
                'How your company\'s position relates to the competitive field',
                'Whether market positioning is shifting over time (when compared to past maps)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#1B2A4A]">
                  <span className="text-[#C1440E] mt-1.5 shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            How to choose positioning axes
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            The axis choice is the most consequential decision in building a positioning map. The same set of competitors will tell completely different stories depending on which two dimensions you choose to plot. Axes should represent attributes that:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Customers actively use when deciding between options',
              'Meaningfully differentiate players in the market (not all competitors cluster at the same point)',
              'Are stable enough to remain meaningful over a 12–18 month strategic horizon',
              'Are observable — you can find data to plot each competitor accurately',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#6B7280]">
                <span className="w-5 h-5 rounded bg-[#C1440E]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-2.5 h-2.5 text-[#C1440E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1B2A4A]">
                  <th className="text-left p-4 text-white font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider font-normal">Axis pair</th>
                  <th className="text-left p-4 text-white font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider font-normal">Typical use</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { axes: 'Price (low → high) × Quality / service level (low → high)', use: 'Consumer products, professional services, most B2B software' },
                  { axes: 'Feature richness (minimal → comprehensive) × Ease of use (complex → simple)', use: 'Productivity tools, developer tools, enterprise software' },
                  { axes: 'Niche focus (general → specialist) × Market size served (SMB → enterprise)', use: 'B2B SaaS at any stage, platform products' },
                  { axes: 'Traditional approach × Modern / technology-led approach', use: 'Markets undergoing digital disruption, regulated industries' },
                  { axes: 'Speed / time-to-value (slow → fast) × Depth (surface → deep integration)', use: 'Implementation-heavy software, data products, analytics tools' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F0EFF5]'}>
                    <td className="p-4 text-[#1B2A4A] font-medium border-b border-[#E2E1DE] text-xs font-[family-name:var(--font-mono)]">{row.axes}</td>
                    <td className="p-4 text-[#6B7280] border-b border-[#E2E1DE]">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Step-by-step: creating your positioning map
          </h2>
          <div className="space-y-8">
            {[
              { n: '01', title: 'List all competitors (direct and indirect)', body: 'Start with 8–15 competitors. Include direct competitors (same product, same customer), indirect competitors (different product, same problem), and aspirational players (companies you aspire to compare to). More than 20 and the map becomes unreadable.' },
              { n: '02', title: 'Identify 4–6 potential axes', body: 'Brainstorm the attributes that most differentiate players in your market. Write them as continuums: not "pricing" but "very low price → very high price". Do this before looking at the data — your initial instinct is often closest to what customers actually care about.' },
              { n: '03', title: 'Score each competitor on each attribute', body: 'For each attribute, score every competitor on a 0–100 scale using available data: pricing pages, reviews, sales collateral, analyst reports. Record your source for each score. Guesses without sources will undermine the entire analysis.' },
              { n: '04', title: 'Choose the two most differentiating axes', body: 'Compare your axes. Eliminate any axes where most competitors cluster together — these are axes that don\'t differentiate the market. Keep the two axes where scores are most spread out and where the combination tells the most interesting story.' },
              { n: '05', title: 'Plot and label each competitor', body: 'Place each competitor at the intersection of their scores on the two axes. Label each dot clearly. Where multiple competitors overlap, slightly offset them rather than stacking.' },
              { n: '06', title: 'Identify whitespace and write the thesis', body: 'Mark any quadrant or area of the map where no competitor sits (or where coverage is sparse). For each whitespace, write one sentence: why is it empty, and is the emptiness a signal of opportunity or of no demand?' },
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
            Positioning map examples by industry
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Each industry tends to produce a characteristic map shape. Understanding the typical shape for your category helps you spot when your market is behaving unusually — and where the unconventional opportunity lives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <MiniQuadrant
              title="SaaS — Price vs. Enterprise focus"
              xLabel={['Low price', 'High price']}
              yLabel={['SMB', 'Enterprise']}
              dots={[
                { x: 80, y: 85, label: 'Incumbent A' },
                { x: 75, y: 90, label: 'Incumbent B' },
                { x: 30, y: 20, label: 'Challenger 1' },
                { x: 20, y: 15, label: 'Challenger 2' },
                { x: 55, y: 50, label: 'Mid-market' },
                { x: 45, y: 72, label: 'You?', highlight: true },
              ]}
            />
            <MiniQuadrant
              title="Consumer — Price vs. Quality"
              xLabel={['Low price', 'Premium']}
              yLabel={['Low quality', 'High quality']}
              dots={[
                { x: 85, y: 88, label: 'Premium A' },
                { x: 78, y: 80, label: 'Premium B' },
                { x: 15, y: 20, label: 'Budget' },
                { x: 22, y: 25, label: 'Budget 2' },
                { x: 50, y: 55, label: 'Mid' },
                { x: 28, y: 72, label: 'You?', highlight: true },
              ]}
            />
          </div>
          <div className="space-y-8">
            {[
              {
                industry: 'SaaS (B2B software)',
                shape: 'The typical SaaS map clusters into two groups: expensive enterprise tools in the high-price, high-complexity quadrant, and a growing cluster of low-cost SMB tools in the opposite corner. The mid-market quadrant is consistently underserved — high enough capability for growing teams, priced accessibly. Disruption almost always enters from the SMB quadrant and moves upmarket.',
                whitespace: 'Mid-market, vertical-specific products, AI-native tools that do specific jobs better than general platforms',
              },
              {
                industry: 'Consumer products',
                shape: 'Consumer markets classically bifurcate into premium and budget clusters, with a sparse middle. The high-price, low-quality quadrant (aspirational pricing without quality delivery) is nearly always empty — a warning zone. The most durable whitespace in consumer is high quality at accessible price — the "democratisation" thesis that has powered brands from IKEA to Warby Parker.',
                whitespace: 'Quality products at accessible prices, premium niche verticals underserved by general market leaders',
              },
              {
                industry: 'Professional services',
                shape: 'Professional services maps typically show a "big firm" cluster at high price and broad scope, a large group of small independent practitioners at low price and narrow scope, and almost nothing in between. The mid-market gap — structured methodology, predictable pricing, specific expertise — is where most professional services disruption happens.',
                whitespace: 'Productised service delivery, technology-enabled specialists, fixed-price models in traditionally hourly-billed services',
              },
            ].map(item => (
              <div key={item.industry} className="border border-[#E2E1DE] rounded-lg overflow-hidden">
                <div className="bg-[#1B2A4A] px-5 py-3">
                  <p className="font-[family-name:var(--font-mono)] text-xs text-white/60 uppercase tracking-wider">{item.industry}</p>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{item.shape}</p>
                  <div className="flex items-start gap-2">
                    <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#C1440E] uppercase tracking-wider shrink-0 pt-0.5">Typical whitespace →</span>
                    <p className="text-sm text-[#1B2A4A] font-medium">{item.whitespace}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CtaBox />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Perceptual map vs. competitive positioning map — the difference
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            The terms are often used interchangeably, but there is a meaningful distinction:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#E2E1DE] rounded-lg p-6">
              <p className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A] mb-3">Perceptual map</p>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-4">Based on how customers <em>perceive</em> brands — measured through surveys or customer research. The axes represent customer attitudes, not objective attributes. Two companies might be objectively identical in price but perceived very differently.</p>
              <p className="font-[family-name:var(--font-mono)] text-xs text-[#9BA8B4] uppercase tracking-wider">Source: Customer surveys</p>
            </div>
            <div className="bg-[#F0EFF5] border border-[#E2E1DE] rounded-lg p-6">
              <p className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A] mb-3">Competitive positioning map</p>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-4">Based on objective or observed competitor data — actual pricing, feature presence, publicly stated target market. More practical to build without research budget, and sufficient for most strategic and investor communication purposes.</p>
              <p className="font-[family-name:var(--font-mono)] text-xs text-[#9BA8B4] uppercase tracking-wider">Source: Public competitor data</p>
            </div>
          </div>
          <p className="text-sm text-[#6B7280] leading-relaxed mt-6">
            For startup competitive decks and strategy work, a competitive positioning map built from public data is almost always sufficient. Perceptual maps require survey infrastructure that most early-stage companies don't have.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            How to use positioning maps in investor decks
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Positioning maps are a standard fixture of investor decks — but most of them fail. Here's what VCs actually look for, and the mistakes that get slides dismissed:
          </p>
          <div className="space-y-5">
            {[
              {
                title: 'Your company must appear on the map',
                detail: 'A surprising number of founders show a quadrant of competitors without plotting their own company. Always include yourself. Plot where you are today and, optionally, where you intend to move.',
                type: 'required',
              },
              {
                title: 'Choose axes that show you in whitespace — but don\'t rig it',
                detail: 'Investors are very good at spotting axes that were chosen solely to make the founder look unchallenged. If your axes are unusual, explain why those dimensions are what customers actually care about. Source it.',
                type: 'required',
              },
              {
                title: 'Include the dangerous competitors, not just the easy ones',
                detail: 'Including only smaller competitors to look big makes you look like you\'re hiding something. Include the biggest incumbent. Your argument should be that you serve a customer they don\'t serve well — not that they don\'t exist.',
                type: 'required',
              },
              {
                title: 'Tell the whitespace story in one sentence',
                detail: 'The slide should have a single sentence takeaway, visible without reading the whole deck: "The market serves enterprise or SMB — no one owns the mid-market." That sentence is the thesis. The map is the evidence.',
                type: 'best-practice',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#E2E1DE] rounded-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${item.type === 'required' ? 'bg-[#C1440E]/10 text-[#C1440E]' : 'bg-[#4A6FA5]/10 text-[#4A6FA5]'}`}>
                    {item.type === 'required' ? 'Required' : 'Best practice'}
                  </span>
                </div>
                <p className="font-semibold text-[#1B2A4A] text-sm mb-1">{item.title}</p>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.detail}</p>
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
                q: 'How many competitors should appear on a positioning map?',
                a: 'Between 8 and 15 is the ideal range. Fewer than 8 and the map looks like you have a limited understanding of the market. More than 15 and the dots overlap and the story becomes hard to read. Group very similar competitors into clusters rather than plotting each individually.',
              },
              {
                q: 'Can I use more than two axes?',
                a: 'The standard 2×2 is standard because it\'s readable at a glance. You can show multiple positioning maps (each with different axis pairs) to tell a richer story — for example, one map showing price vs. complexity, another showing SMB vs. enterprise. Don\'t try to put more than two dimensions into a single map.',
              },
              {
                q: 'What if two competitors plot in exactly the same position?',
                a: 'This is valuable information — it means two competitors have nearly identical positioning. In the deck, note it: "Competitor A and Competitor B are functionally identical in positioning." The differentiation between them happens at execution level, not strategy level. Your whitespace argument remains valid.',
              },
              {
                q: 'How often should I rebuild my positioning map?',
                a: 'For fast-moving markets: quarterly. For slower markets: semi-annually. The most important signals for updating are: a competitor raises a large funding round, a new competitor enters the category, or your target customer changes. Any of these should trigger an immediate map refresh.',
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
            <Link href="/guides/competitor-research" className="hover:text-[#1B2A4A] transition-colors">Competitor Research</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
