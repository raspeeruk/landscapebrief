import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Create a Market Positioning Map (With Examples) | LandscapeBrief',
  description: "Learn how to create a market positioning map: choose your axes, plot competitors accurately, read white space, and understand the difference between perceptual maps and positioning maps.",
  openGraph: {
    title: 'How to Create a Market Positioning Map (With Examples)',
    description: 'Choose axes that matter to buyers, plot competitors accurately, and find the white space your strategy should own.',
    type: 'article',
  },
}

export default function MarketPositioningMapPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Nav */}
      <nav className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between border-b border-[#E2E1DE]">
        <Link href="/" className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#C1440E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3zm9 0v18M3 12h18" />
          </svg>
          <span className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1B2A4A]">
            CompBrief
          </span>
        </Link>
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

      {/* Breadcrumb */}
      <div className="max-w-[800px] mx-auto px-6 pt-8">
        <p className="font-[family-name:var(--font-mono)] text-xs text-[#9BA8B4] tracking-wider uppercase">
          <Link href="/" className="hover:text-[#1B2A4A] transition-colors">CompBrief</Link>
          <span className="mx-2">/</span>
          Guides
          <span className="mx-2">/</span>
          Market Positioning Map
        </p>
      </div>

      {/* Article */}
      <article className="max-w-[800px] mx-auto px-6 pt-10 pb-24">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
          Positioning guide
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-6" style={{ fontSize: '48px', lineHeight: 1.1, fontWeight: 600, letterSpacing: '-0.02em' }}>
          How to Create a Market Positioning Map (With Examples)
        </h1>
        <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-[640px]">
          A market positioning map converts a competitive analysis spreadsheet into a visual decision tool. This guide covers what a positioning map is, how to choose axes that actually matter, how to plot competitors accurately, and what to do with the result.
        </p>

        <div className="h-px bg-[#E2E1DE] mb-10" />

        {/* What it is */}
        <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-4" style={{ fontSize: '30px', fontWeight: 600 }}>
          What a positioning map is (and is not)
        </h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          A positioning map (sometimes called a perceptual map or competitive quadrant) places competitors on two axes to show how the market is clustered and where gaps exist. The horizontal and vertical axes represent attributes buyers use to evaluate products — not attributes your internal team cares about.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          It is not a features matrix. It is not a SWOT chart. It is a spatial representation of how your market sees its options. That spatial quality is what makes it useful in board meetings and strategy sessions — humans process clustering visually in a way they cannot process in spreadsheet rows.
        </p>
        <div className="bg-[#FDF8F6] border border-[#E2E1DE] rounded-lg p-5 mb-8">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-wider mb-2">Perceptual map vs positioning map</p>
          <p className="text-sm text-[#6B7280] leading-relaxed">
            <strong className="text-[#1B2A4A]">Perceptual map:</strong> Based on how customers perceive competitors — built from survey or review data. Reflects buyer opinion, not product reality.{' '}
            <strong className="text-[#1B2A4A]">Positioning map:</strong> Based on objective product attributes — pricing, feature depth, target segment. Built from competitive research. Both are useful; know which one you are building.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] my-10" />

        {/* Choosing axes */}
        <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-4" style={{ fontSize: '30px', fontWeight: 600 }}>
          How to choose your axes
        </h2>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Axis selection makes or breaks the map. The goal is two dimensions that are: independent of each other (not correlated), meaningful to buyers (not to engineers), and discriminating enough that competitors spread across all four quadrants.
        </p>

        <h3 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-3" style={{ fontSize: '22px', fontWeight: 600 }}>
          Proven axis pairs by market type
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { pair: 'Price vs Quality', when: 'Consumer goods, SaaS commodities. Shows the race-to-bottom risk and where premium positioning is sustainable.' },
            { pair: 'Specialised vs Generalist', when: 'Horizontal software. Reveals whether niche depth or breadth of use cases wins deals in your segment.' },
            { pair: 'SMB vs Enterprise', when: 'B2B tools. Separates high-touch, complex deployments from self-serve, fast-close motions.' },
            { pair: 'Ease of use vs Capability depth', when: 'Technical products. Shows the classic power-user vs novice-friendly tension.' },
            { pair: 'Legacy vs Modern', when: 'Incumbent-heavy markets. Useful when technology generation is a real buying criterion.' },
            { pair: 'On-premise vs Cloud-native', when: 'Infrastructure and security tools. Relevant when deployment model drives the buying decision.' },
          ].map(item => (
            <div key={item.pair} className="bg-white border border-[#E2E1DE] rounded-lg p-4">
              <p className="font-[family-name:var(--font-heading)] text-[#1B2A4A] font-semibold mb-2">{item.pair}</p>
              <p className="text-xs text-[#6B7280] leading-relaxed">{item.when}</p>
            </div>
          ))}
        </div>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Avoid axes like "innovation vs traditional" or "customer-centric vs product-centric" — they are too subjective and everyone will place themselves in the same corner. The test: could you score a competitor 1-10 on this axis using only publicly available information? If not, the axis is too vague.
        </p>

        <div className="h-px bg-[#E2E1DE] my-10" />

        {/* Plotting accurately */}
        <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-4" style={{ fontSize: '30px', fontWeight: 600 }}>
          How to plot competitors accurately
        </h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          The most common mistake: placing yourself in the top-right quadrant and cramming competitors into the bottom-left. Reviewers and buyers notice this immediately — it destroys credibility. Plot honestly.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          For each competitor, score them 1-10 on each axis using only external evidence: pricing page data, G2 review sentiment, product documentation, and analyst reports. Where evidence is ambiguous, mark the score as uncertain and flag it. Do not guess. See our{' '}
          <Link href="/guides/competitor-research" className="text-[#C1440E] hover:underline">
            competitor research guide
          </Link>{' '}
          for the full list of data sources.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Once plotted, validate with your sales team. They interact with these competitors daily and will immediately flag placements that feel wrong. Sales intuition is data — interrogate it, do not dismiss it.
        </p>

        <div className="h-px bg-[#E2E1DE] my-10" />

        {/* Reading white space */}
        <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-4" style={{ fontSize: '30px', fontWeight: 600 }}>
          Interpreting white space
        </h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          White space is an unoccupied quadrant or region of the map. Before calling it an opportunity, apply the three-question test:
        </p>
        <ol className="list-none space-y-4 mb-6">
          {[
            { n: '1', q: 'Is there demand there?', a: 'White space with no buyers is a graveyard. Check if any customers are asking for a product that would occupy this space — in forums, G2 reviews, or your own sales conversations.' },
            { n: '2', q: 'Is there a structural barrier?', a: 'Regulatory requirements, technical difficulty, or unit economics may make the quadrant genuinely unviable. Understand why nobody is there before you try to go there.' },
            { n: '3', q: 'Could you credibly occupy it?', a: 'Given your team, funding, and current product trajectory — is this quadrant reachable in 12-18 months? White space only matters if you can get there.' },
          ].map(item => (
            <li key={item.n} className="bg-white border border-[#E2E1DE] rounded-lg p-5">
              <p className="font-[family-name:var(--font-heading)] text-[#1B2A4A] font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#6B7280] leading-relaxed">{item.a}</p>
            </li>
          ))}
        </ol>

        <div className="h-px bg-[#E2E1DE] my-10" />

        {/* Porter's context */}
        <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-4" style={{ fontSize: '30px', fontWeight: 600 }}>
          Where Porter&apos;s Five Forces fits
        </h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          A positioning map shows where you sit relative to existing competitors. Porter&apos;s Five Forces explains the structural forces shaping the whole market: supplier power, buyer power, threat of substitutes, threat of new entrants, and rivalry intensity.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Use both. The positioning map tells you the tactical situation. The Five Forces analysis tells you whether the market is worth fighting for and how defensible any position you occupy will be. A crowded quadrant with high rivalry and low switching costs is a warning sign no amount of good positioning will fix.
        </p>

        <div className="h-px bg-[#E2E1DE] my-10" />

        {/* Related */}
        <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-6" style={{ fontSize: '28px', fontWeight: 600 }}>
          Related guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { href: '/guides/competitive-analysis-template', label: 'Competitive Analysis Template', desc: 'Five-section framework with data sources' },
            { href: '/guides/competitive-landscape-analysis', label: 'Competitive Landscape Analysis', desc: 'Step-by-step guide to mapping your market' },
            { href: '/guides/competitor-research', label: 'Competitor Research Playbook', desc: 'Primary and secondary research methods' },
          ].map(link => (
            <Link key={link.href} href={link.href} className="bg-white border border-[#E2E1DE] rounded-lg p-4 hover:border-[#C1440E] transition-colors">
              <p className="font-[family-name:var(--font-heading)] text-[#1B2A4A] font-semibold text-sm mb-1">{link.label}</p>
              <p className="text-xs text-[#9BA8B4]">{link.desc}</p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#1B2A4A] rounded-lg p-10 text-center">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-3">
            Generate the map automatically
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-white mb-4" style={{ fontSize: '34px', fontWeight: 600, lineHeight: 1.2 }}>
            Your competitive quadrant, board-ready in 3 minutes
          </h2>
          <p className="text-[#9BA8B4] mb-8 max-w-[480px] mx-auto leading-relaxed">
            LandscapeBrief automatically selects the most strategically meaningful axes for your competitors, plots them accurately, and exports the quadrant as a PDF you can drop into any deck.
          </p>
          <a
            href="https://landscapebrief.com"
            className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-8 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors"
          >
            Build your positioning map
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <p className="text-[#9BA8B4] text-sm mt-4">Free up to 10 competitors. No credit card required.</p>
        </div>
      </article>
    </div>
  )
}
