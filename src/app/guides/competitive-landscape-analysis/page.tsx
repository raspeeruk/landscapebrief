import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Do a Competitive Landscape Analysis in 2026 | LandscapeBrief',
  description: 'A step-by-step guide to competitive landscape analysis: define your market, identify competitors, pick positioning axes, map the quadrant, find white space, and turn it into an actionable output.',
  openGraph: {
    title: 'How to Do a Competitive Landscape Analysis in 2026',
    description: 'Define your market, map competitors on a quadrant, find white space, and turn it into product roadmap decisions and messaging strategy.',
    type: 'article',
  },
}

export default function CompetitiveLandscapeAnalysisPage() {
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
          Competitive Landscape Analysis
        </p>
      </div>

      {/* Article */}
      <article className="max-w-[800px] mx-auto px-6 pt-10 pb-24">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
          Strategy guide
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-6" style={{ fontSize: '48px', lineHeight: 1.1, fontWeight: 600, letterSpacing: '-0.02em' }}>
          How to Do a Competitive Landscape Analysis in 2026
        </h1>
        <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-[640px]">
          A competitive landscape analysis is not a snapshot of who exists in your market — it is a map of where strategic opportunity lives. Done well, it tells you where to attack, where to avoid, and how to talk about yourself to win deals.
        </p>

        <div className="h-px bg-[#E2E1DE] mb-10" />

        {/* Step 1 */}
        <div className="flex items-start gap-5 mb-8">
          <span className="font-[family-name:var(--font-mono)] text-[#C1440E] text-sm tracking-widest pt-1 shrink-0">01</span>
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-3" style={{ fontSize: '28px', fontWeight: 600 }}>
              Define your market clearly
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Before you list a single competitor, define the job your product does for customers. Not your category — the underlying job. Zoom competes with airlines as much as it competes with Webex. Notion competes with Word as much as it competes with Confluence.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              A useful framing: what would a customer use if your product did not exist? That list is your true competitive set. Draw the circle wide to capture all real alternatives, then narrow it to the ones that show up in your sales conversations, win/loss data, and customer churn reasons.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-5 mb-8">
          <span className="font-[family-name:var(--font-mono)] text-[#C1440E] text-sm tracking-widest pt-1 shrink-0">02</span>
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-3" style={{ fontSize: '28px', fontWeight: 600 }}>
              Identify direct vs indirect competitors
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Direct competitors solve the same problem for the same buyer with a similar approach. Indirect competitors solve the same problem differently, or solve a related problem your customers also care about.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Both matter, but they need different strategic responses. A direct competitor getting funded is a threat to your pipeline. An indirect competitor building into your category is a threat to your future market.
            </p>
            <div className="bg-white border border-[#E2E1DE] rounded-lg p-5">
              <p className="font-[family-name:var(--font-mono)] text-xs text-[#9BA8B4] uppercase tracking-wider mb-3">How to find them</p>
              <ul className="space-y-2">
                {[
                  'G2 and Capterra — check the "compared with" sidebars',
                  'Ask your sales team who they hear about on calls',
                  'Review recent churn notes — who did customers go to?',
                  'Search "[your category] vs" and "[your category] alternative" in Google',
                  'Check who is bidding on your brand terms in Google Ads',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#6B7280]">
                    <span className="text-[#C1440E] mt-0.5 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-5 mb-8">
          <span className="font-[family-name:var(--font-mono)] text-[#C1440E] text-sm tracking-widest pt-1 shrink-0">03</span>
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-3" style={{ fontSize: '28px', fontWeight: 600 }}>
              Pick your positioning axes
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              The axes of your competitive quadrant are the most important decision in the whole exercise. They determine what story the map tells. Use axes that are meaningful to buyers — not to internal teams.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Strong axis pairs for most markets: ease of implementation vs depth of capability; SMB vs enterprise focus; price vs feature breadth; niche vs horizontal positioning. Avoid axes where all your competitors cluster in one corner — that produces an unreadable map.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              Run two or three axis combinations before committing. The most revealing quadrant is often not your first instinct. See our guide on{' '}
              <Link href="/guides/market-positioning-map" className="text-[#C1440E] hover:underline">
                market positioning maps
              </Link>{' '}
              for a detailed breakdown of axis selection.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start gap-5 mb-8">
          <span className="font-[family-name:var(--font-mono)] text-[#C1440E] text-sm tracking-widest pt-1 shrink-0">04</span>
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-3" style={{ fontSize: '28px', fontWeight: 600 }}>
              Map the quadrant and find white space
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Plot each competitor on your chosen axes. Be honest about where they sit — the point is not to make yourself look good on a slide, it is to find real gaps. Clusters are important: a crowded quadrant means commoditisation pressure. An empty quadrant means either nobody has built there (opportunity) or nobody wants to be there (avoid).
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              White space analysis is the output most people skip. For each empty quadrant, ask: is there a reason this is empty? Regulatory barriers, lack of buyer demand, and technical infeasibility all explain empty quadrants. If none of those apply, that is where you build toward.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex items-start gap-5 mb-8">
          <span className="font-[family-name:var(--font-mono)] text-[#C1440E] text-sm tracking-widest pt-1 shrink-0">05</span>
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-3" style={{ fontSize: '28px', fontWeight: 600 }}>
              Turn the map into actionable outputs
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              A competitive landscape analysis with no action is a expensive PowerPoint. The output should connect directly to three decisions:
            </p>
            <div className="space-y-4 mb-4">
              {[
                { label: 'Product roadmap', detail: 'Features where competitors are weak but customers care deeply are your highest-priority builds. Features where competitors are strong and customers rate them equally should not be your differentiator.' },
                { label: 'Messaging and positioning', detail: 'The quadrant tells you what story to tell. If you sit in an uncrowded position, lean into it explicitly. If you are in a crowded quadrant, pick one axis where you genuinely win and make it the centrepiece of your copy.' },
                { label: 'Pricing strategy', detail: 'Compare your price position to where you sit on the capability axis. If you are priced above centre but below the top-right quadrant, you have either a pricing problem or a perception problem.' },
              ].map(item => (
                <div key={item.label} className="bg-white border border-[#E2E1DE] rounded-lg p-5">
                  <p className="font-[family-name:var(--font-heading)] text-[#1B2A4A] font-semibold mb-2">{item.label}</p>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E2E1DE] my-10" />

        {/* Related guides */}
        <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-6" style={{ fontSize: '28px', fontWeight: 600 }}>
          Related guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { href: '/guides/competitive-analysis-template', label: 'Competitive Analysis Template', desc: 'The five-section framework with data sources' },
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
            Build the map faster
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-white mb-4" style={{ fontSize: '34px', fontWeight: 600, lineHeight: 1.2 }}>
            AI-generated competitive quadrant in under 3 minutes
          </h2>
          <p className="text-[#9BA8B4] mb-8 max-w-[480px] mx-auto leading-relaxed">
            Upload a CSV of your competitors with their attributes. LandscapeBrief positions them on the most strategically meaningful axes, writes the brief, and exports a board-ready PDF.
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
