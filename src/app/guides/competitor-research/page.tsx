import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Competitor Research: The Complete Playbook for 2026 | LandscapeBrief',
  description: 'How to research competitors in 2026: primary research methods (customer interviews, win/loss), secondary sources (G2, LinkedIn jobs, changelogs), tools, and how to organise findings for stakeholders.',
  openGraph: {
    title: 'Competitor Research: The Complete Playbook for 2026',
    description: 'Primary and secondary competitor research methods, the best tools for each source, and how to turn raw findings into stakeholder-ready output.',
    type: 'article',
  },
}

export default function CompetitorResearchPage() {
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
          Competitor Research
        </p>
      </div>

      {/* Article */}
      <article className="max-w-[800px] mx-auto px-6 pt-10 pb-24">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
          Research playbook
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-6" style={{ fontSize: '48px', lineHeight: 1.1, fontWeight: 600, letterSpacing: '-0.02em' }}>
          Competitor Research: The Complete Playbook for 2026
        </h1>
        <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-[640px]">
          Good competitor research is not a one-day desk exercise. It is an ongoing intelligence function that combines primary research (talking to real people) with secondary research (mining public data sources). This playbook covers both — and how to turn raw findings into something your team can act on.
        </p>

        <div className="h-px bg-[#E2E1DE] mb-10" />

        {/* Primary research */}
        <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-4" style={{ fontSize: '30px', fontWeight: 600 }}>
          Primary research: insights you can only get by talking to people
        </h2>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Secondary sources tell you what is public. Primary research tells you what is true. The gap between those two things is where your strategic advantage lives.
        </p>

        <h3 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-3" style={{ fontSize: '22px', fontWeight: 600 }}>
          Customer interviews
        </h3>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          The single best source of competitive intelligence is your own customers — specifically, customers who evaluated two or more options before choosing you. Ask them: what alternatives did you consider? What made you lean toward each? What nearly made you choose a competitor? What would push you to switch?
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Do not ask customers to rank competitors directly — they will not give you honest answers in a formal setting. Instead, listen for the competitors they mention unprompted and the features or outcomes they describe. That unprompted data is more reliable than any direct question.
        </p>

        <h3 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-3" style={{ fontSize: '22px', fontWeight: 600 }}>
          Win/loss analysis
        </h3>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Review your CRM for every deal that closed in the last 90 days. For wins: which competitor did you displace or beat? For losses: which competitor won and why? This data already exists in your organisation — most companies do not mine it systematically.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Build a simple Notion or Airtable tracker with: deal size, ICP segment, competitor faced, outcome, and the one-sentence reason. After 30 entries, patterns emerge fast. You will see which competitors you consistently lose to in certain segments — that tells you exactly where to focus defensive product investment.
        </p>

        <div className="h-px bg-[#E2E1DE] my-10" />

        {/* Secondary research */}
        <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-4" style={{ fontSize: '30px', fontWeight: 600 }}>
          Secondary research: mining public data sources
        </h2>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Most of what you need to know about a competitor is publicly available. The skill is knowing where to look and how to interpret what you find.
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-white border border-[#E2E1DE] rounded-lg p-5">
            <div className="flex items-start justify-between mb-2">
              <p className="font-[family-name:var(--font-heading)] text-[#1B2A4A] font-semibold">G2 and Capterra reviews</p>
              <span className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-wider">High value</span>
            </div>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              The most underused research source. Sort by recent reviews and read the one-star and two-star entries — these reveal structural weaknesses that do not appear in marketing copy. Look for patterns across multiple reviewers. A single complaint is noise; three or more is signal. Also check the &quot;pros and cons&quot; format used by most platforms — it gives you structured data even from qualitative text.
            </p>
          </div>

          <div className="bg-white border border-[#E2E1DE] rounded-lg p-5">
            <div className="flex items-start justify-between mb-2">
              <p className="font-[family-name:var(--font-heading)] text-[#1B2A4A] font-semibold">LinkedIn job postings = strategic direction</p>
              <span className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-wider">High value</span>
            </div>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              What a company hires for reveals what it is building next. A competitor hiring 8 enterprise account executives is moving upmarket. Three new ML engineer roles signals an AI investment. A series of EMEA sales hires means geographic expansion. Check competitor job boards quarterly — this is forward-looking intelligence that press releases never give you.
            </p>
          </div>

          <div className="bg-white border border-[#E2E1DE] rounded-lg p-5">
            <div className="flex items-start justify-between mb-2">
              <p className="font-[family-name:var(--font-heading)] text-[#1B2A4A] font-semibold">Pricing pages and changelogs</p>
              <span className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-wider">Moderate value</span>
            </div>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Pricing pages tell you tier structure, what features are gated, and where the enterprise line is drawn. Monitor them with Visualping or a similar tool — pricing changes are strategic signals. Changelogs tell you what the product team is actually shipping versus what the roadmap deck promised. High-velocity changelogs in a specific area indicate investment concentration.
            </p>
          </div>

          <div className="bg-white border border-[#E2E1DE] rounded-lg p-5">
            <div className="flex items-start justify-between mb-2">
              <p className="font-[family-name:var(--font-heading)] text-[#1B2A4A] font-semibold">Funding and press announcements</p>
              <span className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-wider">Moderate value</span>
            </div>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Set Google Alerts for each competitor. Funding rounds, acquisitions, and key leadership hires often appear in press before any product change is visible. A Series B raise signals 12-18 months of accelerated hiring and feature investment — plan your defensive positioning now, not when the features ship.
            </p>
          </div>
        </div>

        <div className="h-px bg-[#E2E1DE] my-10" />

        {/* Tools */}
        <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-4" style={{ fontSize: '30px', fontWeight: 600 }}>
          Tools for competitor research
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { tool: 'SimilarWeb', use: 'Traffic volume, channel breakdown, top referring sites, geographic distribution. Free tier covers basic metrics.' },
            { tool: 'Ahrefs / Semrush', use: 'SEO traffic, keyword rankings, backlink profile. Shows which content is driving organic growth and which terms they are targeting.' },
            { tool: 'BuiltWith', use: 'Technology stack — know what infrastructure a competitor runs on. Useful for identifying technical debt or modern stack advantages.' },
            { tool: 'Visualping', use: 'Monitor competitor websites for changes — pricing, messaging, feature announcements. Set weekly checks on key pages.' },
            { tool: 'LinkedIn Sales Nav', use: 'Headcount by function, hiring velocity, org structure. Worth the subscription for any serious competitive program.' },
            { tool: 'Wayback Machine', use: 'Historical versions of competitor websites. See how their messaging has evolved — pivots reveal what stopped working.' },
          ].map(item => (
            <div key={item.tool} className="bg-white border border-[#E2E1DE] rounded-lg p-4">
              <p className="font-[family-name:var(--font-heading)] text-[#1B2A4A] font-semibold mb-2">{item.tool}</p>
              <p className="text-xs text-[#6B7280] leading-relaxed">{item.use}</p>
            </div>
          ))}
        </div>

        <div className="h-px bg-[#E2E1DE] my-10" />

        {/* Organising and sharing */}
        <h2 className="font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-4" style={{ fontSize: '30px', fontWeight: 600 }}>
          Organising findings and sharing with stakeholders
        </h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Raw research is not useful. The job of the analyst or PM doing this work is to synthesise it into something stakeholders can act on. Three formats work:
        </p>
        <div className="space-y-4 mb-8">
          {[
            { format: 'Competitive one-pager per competitor', audience: 'Sales and customer success', content: 'One page: their positioning, key strengths, key weaknesses, how to win against them, what to watch for.' },
            { format: 'Strategic landscape document', audience: 'Leadership and board', content: 'Full competitive map, white space analysis, threats and opportunities. Updated quarterly. Use a positioning map as the centrepiece.' },
            { format: 'Battlecards', audience: 'Sales team', content: 'Objection handling, feature comparisons, and win themes. One card per major competitor, kept in CRM or sales enablement tool.' },
          ].map(item => (
            <div key={item.format} className="bg-white border border-[#E2E1DE] rounded-lg p-5">
              <p className="font-[family-name:var(--font-heading)] text-[#1B2A4A] font-semibold mb-1">{item.format}</p>
              <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] mb-2 uppercase tracking-wider">For: {item.audience}</p>
              <p className="text-sm text-[#6B7280] leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
        <p className="text-[#6B7280] leading-relaxed">
          The strategic landscape document benefits most from a visual positioning map. See our guide on{' '}
          <Link href="/guides/competitive-landscape-analysis" className="text-[#C1440E] hover:underline">
            how to do a competitive landscape analysis
          </Link>{' '}
          for the step-by-step process, or the{' '}
          <Link href="/guides/competitive-analysis-template" className="text-[#C1440E] hover:underline">
            competitive analysis template
          </Link>{' '}
          for a ready-to-use framework.
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
            { href: '/guides/market-positioning-map', label: 'Market Positioning Map', desc: 'Axis selection and quadrant interpretation' },
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
            Turn research into reports
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-white mb-4" style={{ fontSize: '34px', fontWeight: 600, lineHeight: 1.2 }}>
            Professional competitive reports in under 3 minutes
          </h2>
          <p className="text-[#9BA8B4] mb-8 max-w-[480px] mx-auto leading-relaxed">
            Once you have your competitor data, LandscapeBrief does the heavy lifting: AI-generated quadrant, cluster analysis, white space identification, and a strategy brief — exported as a PDF ready for stakeholders.
          </p>
          <a
            href="https://landscapebrief.com"
            className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-8 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors"
          >
            Generate your competitive report
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
