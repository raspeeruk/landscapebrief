import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Competitive Analysis Template for Product Teams (Free Download) | LandscapeBrief',
  description: 'A practical competitive analysis template covering competitor overview, feature matrix, pricing comparison, market positioning, and SWOT. Built for product managers and strategy teams.',
  openGraph: {
    title: 'Competitive Analysis Template for Product Teams (Free Download)',
    description: 'Cover competitor overview, feature matrix, pricing comparison, market positioning, and SWOT in one structured template. Used by product managers and strategy teams.',
    type: 'article',
  },
}

export default function CompetitiveAnalysisTemplatePage() {
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
          Competitive Analysis Template
        </p>
      </div>

      {/* Article */}
      <article className="max-w-[800px] mx-auto px-6 pt-10 pb-24">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
          Strategy template
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-6" style={{ fontSize: '48px', lineHeight: 1.1, fontWeight: 600, letterSpacing: '-0.02em' }}>
          Competitive Analysis Template for Product Teams (Free Download)
        </h1>
        <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-[640px]">
          Most competitive analyses live in a Notion page nobody reads after the first sprint. This template is built for action — five structured sections that give product managers, founders, and consultants a repeatable process.
        </p>

        <div className="h-px bg-[#E2E1DE] mb-10" />

        {/* Section 1 */}
        <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-4" style={{ fontSize: '30px', fontWeight: 600 }}>
          What to include in a competitive analysis
        </h2>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          A rigorous competitive analysis covers five areas. Each one feeds into a different decision — roadmap prioritisation, messaging, pricing, hiring, or fundraising. Strip out what does not apply, but do not skip sections without good reason.
        </p>

        <h3 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-3" style={{ fontSize: '22px', fontWeight: 600 }}>
          1. Competitor overview
        </h3>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          For each competitor, capture: founding year, funding stage and total raised, employee headcount, primary markets, revenue tier (if known), and one-sentence positioning statement. This gives you the strategic context before you go deep. A competitor with 500 employees and $80M raised is playing a different game than a scrappy 12-person team — that shapes how you respond.
        </p>
        <ul className="list-none mb-6 space-y-2">
          {['Company name + URL', 'Founding year + funding total', 'Headcount (LinkedIn or BuiltWith)', 'Primary ICP (industry, company size, geography)', 'Their own positioning tagline', 'G2 / Capterra rating + review count'].map(item => (
            <li key={item} className="flex items-start gap-3 text-[#6B7280] text-sm">
              <span className="mt-1 text-[#C1440E]">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-3" style={{ fontSize: '22px', fontWeight: 600 }}>
          2. Feature matrix
        </h3>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          A feature matrix is the most time-consuming section but delivers the most direct product value. List the ten to fifteen features your customers most care about down the left column, competitors across the top, and mark each cell: present, partial, or absent. Do not add features nobody cares about — this is a decision tool, not a spec sheet.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Populate it from product documentation, help centres, and G2 reviews. User reviews are especially useful — customers will complain about a missing feature you forgot to check. Pay attention to what competitors charge for, as paywalled features signal what the market values enough to pay for.
        </p>

        <h3 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-3" style={{ fontSize: '22px', fontWeight: 600 }}>
          3. Pricing comparison
        </h3>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Capture pricing tiers, model (per seat, usage-based, flat), free tier limits, and enterprise gating. Where pricing is not public, check G2 reviews — buyers often mention what they paid. Pricing pages also reveal positioning: a tool with five tiers is segmenting aggressively; one with two is optimising for simplicity.
        </p>

        <h3 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-3" style={{ fontSize: '22px', fontWeight: 600 }}>
          4. Market positioning map
        </h3>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Plot competitors on two axes that matter to your buyers — price versus capability, ease of use versus power, SMB versus enterprise. Clustering reveals the crowded segments and the white space. This is where strategy becomes visual. See our guide on{' '}
          <Link href="/guides/market-positioning-map" className="text-[#C1440E] hover:underline">
            how to create a market positioning map
          </Link>{' '}
          for axis selection guidance.
        </p>

        <h3 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-3" style={{ fontSize: '22px', fontWeight: 600 }}>
          5. SWOT summary
        </h3>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Do one SWOT per direct competitor, not one for your whole market. The point is to identify where each competitor is structurally weak and what that creates for you. Outdated technology, negative review trends, or a recent pivot are all weaknesses with tactical implications.
        </p>

        <div className="h-px bg-[#E2E1DE] my-10" />

        {/* Section 2 */}
        <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-4" style={{ fontSize: '30px', fontWeight: 600 }}>
          How to gather competitor data
        </h2>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Most of what you need is public. The discipline is in knowing where to look and being systematic about it.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {[
            { source: 'G2 and Capterra', use: 'Feature comparisons, real pricing from reviews, buyer sentiment, category position' },
            { source: 'Job postings', use: 'Strategic direction — what a company hires for reveals what they are building next' },
            { source: 'Pricing pages', use: 'Tier structure, model, what is gated, where they draw the enterprise line' },
            { source: 'Product changelogs', use: 'Velocity, priorities, which segments they are investing in' },
            { source: 'LinkedIn', use: 'Headcount growth by team, key hires, leadership bios' },
            { source: 'SimilarWeb', use: 'Traffic volume, channel mix, top countries — tells you where they are growing' },
          ].map(item => (
            <div key={item.source} className="bg-white border border-[#E2E1DE] rounded-lg p-5">
              <p className="font-[family-name:var(--font-heading)] text-[#1B2A4A] font-semibold mb-1">{item.source}</p>
              <p className="text-sm text-[#6B7280] leading-relaxed">{item.use}</p>
            </div>
          ))}
        </div>

        <div className="h-px bg-[#E2E1DE] my-10" />

        {/* Section 3 */}
        <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-4" style={{ fontSize: '30px', fontWeight: 600 }}>
          How often to update it, and who owns it
        </h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          A competitive analysis goes stale faster than most documents. Funding announcements, major releases, and pivots can shift the landscape in a quarter. A reasonable cadence:
        </p>
        <ul className="list-none mb-6 space-y-2">
          {[
            'Full refresh: quarterly, or after any major market event',
            'Pricing + funding: monthly (set Google Alerts for each competitor)',
            'Feature matrix: after any competitor product update that affects your roadmap',
            'SWOT: tied to your planning cycle (quarterly or biannual)',
          ].map(item => (
            <li key={item} className="flex items-start gap-3 text-[#6B7280]">
              <span className="mt-1 text-[#C1440E] font-bold">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Ownership depends on your org size. In a startup, the founding PM usually owns it. In a growth-stage company, a dedicated PMM or competitive intelligence function makes sense. The key principle: whoever presents strategy to leadership should own the analysis. If it is nobody's job, it does not happen.
        </p>

        <div className="h-px bg-[#E2E1DE] my-10" />

        {/* Related guides */}
        <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-6" style={{ fontSize: '30px', fontWeight: 600 }}>
          Related guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { href: '/guides/competitive-landscape-analysis', label: 'Competitive Landscape Analysis', desc: 'How to map and interpret your full market' },
            { href: '/guides/market-positioning-map', label: 'Market Positioning Map', desc: 'Choosing axes and plotting competitors accurately' },
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
            Skip the spreadsheet
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-white mb-4" style={{ fontSize: '34px', fontWeight: 600, lineHeight: 1.2 }}>
            Turn your competitor data into a board-ready PDF in 3 minutes
          </h2>
          <p className="text-[#9BA8B4] mb-8 max-w-[480px] mx-auto leading-relaxed">
            LandscapeBrief takes your competitor list, positions them on a 2×2 quadrant, identifies clusters, spots white space, and writes the strategy brief. No design skills needed.
          </p>
          <a
            href="https://landscapebrief.com"
            className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-8 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors"
          >
            Build your first landscape
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
