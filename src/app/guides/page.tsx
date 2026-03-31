import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Competitive Analysis Guides — LandscapeBrief',
  description: 'Free guides on competitive analysis, market mapping, Porter\'s Five Forces, Blue Ocean Strategy, SWOT analysis, value chain analysis, competitive benchmarking, and more. Written for founders, product marketers, and strategy teams.',
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

const guides = [
  {
    slug: 'competitive-analysis-template',
    title: 'Competitive Analysis Template: How to Map Your Market in 2025',
    description: 'The 5-section competitive analysis framework covering market definition, competitor identification, feature matrix, positioning map, and gap analysis.',
    category: 'Frameworks',
  },
  {
    slug: 'competitive-landscape-analysis',
    title: 'Competitive Landscape Analysis: How to Do It Right',
    description: 'How to build a competitive landscape analysis that investors and board members trust — from axis selection to whitespace identification.',
    category: 'Frameworks',
  },
  {
    slug: 'five-forces-analysis-template',
    title: "Porter's Five Forces Analysis Template + Examples",
    description: 'A complete Five Forces template with scoring methodology, a worked B2B SaaS example, and strategic implications for startups and established businesses.',
    category: 'Frameworks',
  },
  {
    slug: 'blue-ocean-strategy-canvas',
    title: 'Blue Ocean Strategy Canvas: How to Map Uncontested Markets',
    description: 'Step-by-step guide to the Blue Ocean Strategy Canvas and the ERRC grid. Includes real examples from Cirque du Soleil, Southwest Airlines, and Nintendo Wii.',
    category: 'Strategy',
  },
  {
    slug: 'value-chain-analysis',
    title: "Value Chain Analysis: Porter's Framework Applied to Startups",
    description: 'How to use Porter\'s value chain to identify competitive advantage. Covers primary and support activities translated for modern software and platform businesses.',
    category: 'Strategy',
  },
  {
    slug: 'market-positioning-map',
    title: 'Market Positioning Map: How to Build One That Works',
    description: 'How to choose axes, plot competitors, and identify whitespace on a 2x2 positioning map. Includes axis pair suggestions for different market types.',
    category: 'Mapping',
  },
  {
    slug: 'market-map-template',
    title: 'Market Map Template: How to Visualise Your Competitive Landscape',
    description: 'Three market map formats explained — category maps, 2x2 quadrants, and ecosystem maps. When to use each, with step-by-step build instructions.',
    category: 'Mapping',
  },
  {
    slug: 'industry-landscape-report',
    title: 'How to Write an Industry Landscape Report',
    description: 'The 7-section structure for a professional industry landscape report. Includes a data collection playbook covering desk research, digital intelligence, and primary research.',
    category: 'Reports',
  },
  {
    slug: 'competitor-research',
    title: 'Competitor Research: How to Research Competitors Systematically',
    description: 'A systematic approach to competitor research covering data sources, research methodology, and how to maintain an ongoing competitive intelligence function.',
    category: 'Research',
  },
  {
    slug: 'competitive-intelligence-tools',
    title: 'Best Competitive Intelligence Tools: 2025 Comparison',
    description: 'Hands-on comparison of 10 CI tools including Crayon, Klue, SimilarWeb, and SEMrush. Covers pricing, strengths, limitations, and which tool fits which team size.',
    category: 'Tools',
  },
  {
    slug: 'swot-analysis-guide',
    title: 'SWOT Analysis: How to Do One That\'s Actually Useful',
    description: 'A complete SWOT guide with the TOWS framework for converting analysis into strategy. Includes a 90-minute team workshop format.',
    category: 'Frameworks',
  },
  {
    slug: 'competitor-swot-analysis',
    title: 'Competitor SWOT Analysis: Template + Real Examples',
    description: 'How to SWOT your competitors from the outside in. Covers data sources for each quadrant and how to convert competitor weaknesses into your positioning.',
    category: 'Research',
  },
  {
    slug: 'competitive-moat-analysis',
    title: 'Competitive Moat Analysis: Identify and Build Defensibility',
    description: 'How to assess competitive moats — network effects, switching costs, economies of scale, brand, and regulatory advantages — for your company and your competitors.',
    category: 'Strategy',
  },
  {
    slug: 'competitor-pricing-analysis',
    title: 'Competitor Pricing Analysis: How to Price Against the Market',
    description: 'A framework for analysing competitor pricing structures, positioning your price, and making pricing decisions based on competitive data.',
    category: 'Research',
  },
  {
    slug: 'go-to-market-strategy',
    title: 'Go-to-Market Strategy: A Framework for Competitive Entry',
    description: 'How to build a go-to-market strategy that accounts for competitive dynamics — from market entry sequencing to channel selection and positioning.',
    category: 'Strategy',
  },
  {
    slug: 'competitive-benchmarking-guide',
    title: 'Competitive Benchmarking Guide: Metrics That Matter',
    description: 'Which metrics to benchmark against competitors, where to find the data, and how to build a benchmarking framework that drives action instead of collecting dust.',
    category: 'Research',
  },
]

const categories = ['Frameworks', 'Strategy', 'Mapping', 'Reports', 'Research', 'Tools']

export default function GuidesIndex() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <NavBar />

      <main className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="max-w-[768px] mb-14">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Guides
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            Competitive Analysis Guides
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Free, in-depth guides on competitive analysis, market mapping, and strategic positioning. Written for founders, product marketers, and strategy teams who want to understand their market properly — not just fill in a template.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        {categories.map(category => {
          const categoryGuides = guides.filter(g => g.category === category)
          if (categoryGuides.length === 0) return null
          return (
            <section key={category} className="mb-14">
              <h2 className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#9BA8B4] mb-6">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {categoryGuides.map(guide => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group bg-white border border-[#E2E1DE] rounded-lg p-6 hover:border-[#C1440E] transition-colors"
                  >
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1B2A4A] mb-3 group-hover:text-[#C1440E] transition-colors leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {guide.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#C1440E]">
                      Read guide <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        <div className="my-14 bg-[#1B2A4A] rounded-lg p-12 text-center">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-widest mb-4">LandscapeBrief</p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white mb-3">
            Done reading? Start mapping.
          </h2>
          <p className="text-white/50 text-sm mb-8 max-w-[400px] mx-auto">
            Upload a CSV of competitors and get a board-ready competitive landscape map in under 3 minutes.
          </p>
          <Link href="/app" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors">
            Map Your Competitive Landscape Free &rarr;
          </Link>
        </div>
      </main>

      <footer className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="h-px bg-[#E2E1DE] mb-8" />
        <div className="flex items-center justify-between">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-lg text-[#9BA8B4] hover:text-[#1B2A4A] transition-colors">CompBrief</Link>
          <div className="flex items-center gap-6 text-sm text-[#9BA8B4]">
            <Link href="/pricing" className="hover:text-[#1B2A4A] transition-colors">Pricing</Link>
            <Link href="/app" className="hover:text-[#1B2A4A] transition-colors">App</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
