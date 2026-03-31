import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Market Map Template: How to Visualise Your Competitive Landscape',
  description: 'A step-by-step guide to building a market map. Covers category-based market maps, 2x2 quadrant maps, ecosystem maps, and how to choose the right format for your competitive landscape.',
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
        Build your market map in under 3 minutes
      </p>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
        Upload a CSV of competitors and attributes. LandscapeBrief generates a 2x2 quadrant map, identifies clusters and whitespace, and writes the positioning brief automatically.
      </p>
      <Link href="/app" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-6 py-3 rounded text-sm font-medium hover:bg-[#A33A0C] transition-colors">
        Build Your Market Map Free &rarr;
      </Link>
    </div>
  )
}

function FinalCta() {
  return (
    <div className="my-14 bg-[#1B2A4A] rounded-lg p-12 text-center">
      <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-widest mb-4">Ready?</p>
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white mb-3">
        Stop dragging boxes in PowerPoint.
      </h2>
      <p className="text-white/50 text-sm mb-8 max-w-[400px] mx-auto">
        LandscapeBrief automates the entire market mapping process — from competitor positioning to whitespace identification.
      </p>
      <Link href="/app" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors">
        Build Your Market Map Free &rarr;
      </Link>
    </div>
  )
}

export default function MarketMapTemplate() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <NavBar />

      <main className="max-w-[768px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Guide &middot; Market Mapping
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            Market Map Template: How to Visualise Your Competitive Landscape
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            A market map is the single most effective way to communicate competitive positioning to investors, board members, and your own team. Done right, it tells the entire competitive story in one visual — who the players are, how they cluster, and where the opportunity sits. Done wrong, it is a cluttered mess of logos that communicates nothing. This guide covers the three main market map formats, when to use each one, and how to build them step by step.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Three types of market maps
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            The term &quot;market map&quot; is used loosely in business, but there are actually three distinct formats. Each serves a different purpose. Choosing the wrong format is the most common market mapping mistake — and it happens because teams default to the format they have seen most recently rather than the one that fits their strategic question.
          </p>
          <div className="space-y-6">
            {[
              {
                type: 'Category market map (logo landscape)',
                color: '#C1440E',
                desc: 'A grid where the X axis divides companies by category (e.g., CRM, marketing automation, sales enablement) and the Y axis may divide by segment (SMB, mid-market, enterprise) or by another attribute. Companies are plotted as logos in their respective cells. This format is most common in venture capital and analyst reports.',
                best: 'Showing the full scope of a market with many sub-categories. Useful when you need to communicate where your company sits relative to an entire ecosystem.',
                limit: 'Does not show relative positioning within a category. All companies in the same cell look equivalent even if they serve very different niches.',
              },
              {
                type: '2x2 quadrant map (positioning map)',
                color: '#4A6FA5',
                desc: 'A scatter plot with two carefully chosen axes. Companies are plotted as dots based on their position along each axis. The four resulting quadrants each represent a distinct strategic position. This is the format LandscapeBrief generates automatically.',
                best: 'Showing competitive positioning and identifying whitespace. The most useful format for strategic decision-making because it forces you to choose the two dimensions that matter most.',
                limit: 'Limited to two dimensions. Complex markets may need multiple quadrant maps with different axis pairs to tell the full story.',
              },
              {
                type: 'Ecosystem map (value chain map)',
                color: '#1B2A4A',
                desc: 'A diagram showing how different companies in the ecosystem connect to each other. Companies are grouped by their role in the value chain (data providers, infrastructure, applications, distribution) and connections show partnerships, integrations, or data flows.',
                best: 'Understanding how a complex market works as a system. Useful for identifying which roles in the ecosystem are unclaimed and where integration opportunities exist.',
                limit: 'Complex to build and hard to keep updated. Most useful as a one-time strategic exercise, not an ongoing competitive tool.',
              },
            ].map(item => (
              <div key={item.type} className="bg-white border border-[#E2E1DE] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1B2A4A]">{item.type}</h3>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{item.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#FDF8F6] rounded p-3">
                    <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#C1440E] uppercase tracking-widest mb-1">Best for</p>
                    <p className="text-xs text-[#6B7280] leading-relaxed">{item.best}</p>
                  </div>
                  <div className="bg-[#F0EFF5] rounded p-3">
                    <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#9BA8B4] uppercase tracking-widest mb-1">Limitation</p>
                    <p className="text-xs text-[#6B7280] leading-relaxed">{item.limit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            How to build a 2x2 quadrant market map
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            The 2x2 quadrant is the most strategically useful market map format. It forces a clear positioning thesis and makes whitespace immediately visible. Here is the process for building one that is genuinely useful rather than decorative.
          </p>
          <div className="space-y-8">
            {[
              { n: '01', title: 'List 8-15 competitors', body: 'Include direct competitors (same product, same customer), indirect competitors (different product, same job to be done), and 1-2 emerging players that are not yet well-known but are gaining traction. Too few competitors and the map looks sparse. Too many and it becomes cluttered.' },
              { n: '02', title: 'Collect data on 6-8 attributes per competitor', body: 'Before choosing axes, collect data on multiple attributes: pricing tier, target segment, feature breadth vs depth, geographic focus, sales model (self-serve vs sales-led), product maturity, funding stage, and any domain-specific attributes. This gives you options when choosing axes.' },
              { n: '03', title: 'Choose two axes that reveal strategic truth', body: 'The axis choice is the most important decision in the entire process. Good axes separate competitors into distinct groups and reveal empty quadrants. Bad axes put everyone in the same cluster. Test 3-4 axis combinations before committing. The right pair usually produces an "aha" moment where the market structure suddenly makes sense.' },
              { n: '04', title: 'Score each competitor on each axis (1-10)', body: 'Use public evidence: pricing pages for price position, G2 reviews for product scope, job postings for market focus, marketing messaging for target segment. Document your sources. A scoring that cannot be defended with evidence is not useful.' },
              { n: '05', title: 'Plot and interpret', body: 'Plot each competitor as a dot on the quadrant. Look for three things: clusters (where competitors bunch together), outliers (companies in unusual positions), and empty quadrants (whitespace). Clusters represent conventional wisdom. Whitespace represents opportunity — or a trap. You need to determine which.' },
              { n: '06', title: 'Label the quadrants', body: 'Give each quadrant a descriptive name that captures the strategic position it represents. For example: "Premium Enterprise" (high price, broad feature set), "Budget Niche" (low price, narrow feature set), "Self-Serve Broad" (low price, broad feature set), "Enterprise Specialist" (high price, narrow feature set). Good labels make the map immediately understandable to someone seeing it for the first time.' },
              { n: '07', title: 'Write the positioning narrative', body: 'The map itself is not enough. Write a 2-3 sentence narrative that explains what the map reveals: where the market clusters, where the whitespace is, and where your company sits or plans to sit. This narrative is what goes on the pitch deck slide or in the board presentation. The map is the evidence; the narrative is the argument.' },
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

        <CtaBox />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Choosing the right axis pairs
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            The axes you choose determine the story your map tells. Here are the most common axis pairs organised by the strategic question they answer.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1B2A4A] text-white">
                  <th className="text-left p-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider font-normal">Axis pair</th>
                  <th className="text-left p-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider font-normal">Strategic question</th>
                  <th className="text-left p-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider font-normal">Common whitespace</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pair: 'Price vs. Feature breadth', question: 'Where is the value gap?', space: 'Affordable tools with broad capabilities (the "good enough" opportunity)' },
                  { pair: 'Horizontal vs. Vertical focus', question: 'Is the market ready for specialisation?', space: 'Deep vertical solutions that horizontal tools cannot match' },
                  { pair: 'Self-serve vs. Sales-led', question: 'How do customers want to buy?', space: 'Product-led growth for traditionally sales-heavy categories' },
                  { pair: 'SMB vs. Enterprise', question: 'Which segment is under-served?', space: 'Mid-market (100-1000 employees) that neither SMB nor enterprise tools serve well' },
                  { pair: 'AI-native vs. Traditional', question: 'Is technology reshaping the category?', space: 'AI-native approaches to legacy workflows' },
                  { pair: 'Platform vs. Point solution', question: 'Is the market consolidating or fragmenting?', space: 'Best-of-breed point solutions that out-specialise platforms' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F0EFF5]'}>
                    <td className="p-4 text-[#1B2A4A] font-medium border-b border-[#E2E1DE]">{row.pair}</td>
                    <td className="p-4 text-[#6B7280] border-b border-[#E2E1DE]">{row.question}</td>
                    <td className="p-4 text-[#6B7280] border-b border-[#E2E1DE]">{row.space}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            How to build a category market map
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Category maps (also called logo landscapes or Lumascape-style maps) are most useful for showing the full scope of a market. They are popular with VCs and analysts because they communicate the overall market structure at a glance.
          </p>
          <div className="space-y-5">
            {[
              { rule: 'Define categories based on buyer behaviour, not product features', detail: 'Group companies by how buyers think about them, not by how the companies describe themselves. A buyer looking for "help with hiring" sees a different category structure than a product manager categorising "HR tech."' },
              { rule: 'Limit to 4-8 categories', detail: 'More than 8 categories makes the map visually overwhelming. If your market has 12 natural categories, group the smaller ones into "Other" or create a separate detailed map for the sub-segment you care about.' },
              { rule: 'Use a consistent size metric', detail: 'If logos are different sizes, the size should represent something consistent — revenue, funding, or market share. Do not mix sizing criteria. If you cannot get consistent data, make all logos the same size.' },
              { rule: 'Highlight your position clearly', detail: 'Your company should be immediately visible — use a different colour, a border, or positioning at a visual focal point. The map should answer "where do we sit?" within 2 seconds of looking at it.' },
              { rule: 'Date the map', detail: 'Market maps become outdated quickly. Always include the date of creation and plan to refresh quarterly. A 2-year-old market map in a pitch deck is worse than no market map at all.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <span className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] tracking-wider shrink-0 pt-1">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="font-semibold text-[#1B2A4A] text-sm mb-1">{item.rule}</p>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Common market map mistakes
          </h2>
          <div className="space-y-5">
            {[
              {
                mistake: 'Including too many competitors',
                fix: 'A market map with 80 logos communicates nothing except that the market is crowded. Limit your map to the 15-25 most relevant players. If comprehensiveness is needed, create a detailed appendix and keep the main map focused.',
              },
              {
                mistake: 'Choosing axes that put you in the best quadrant by definition',
                fix: 'If your axes are "has [your unique feature]" vs "does not have [your unique feature]," you have rigged the map. Choose axes that represent genuine strategic dimensions that customers use to make buying decisions.',
              },
              {
                mistake: 'Making a static map for a dynamic market',
                fix: 'Markets move. Competitors pivot, merge, die, and launch. Build your market map in a format that is easy to update (spreadsheet-driven, not hand-designed). LandscapeBrief generates maps from CSV data, making updates as simple as editing a spreadsheet.',
              },
              {
                mistake: 'Forgetting the "so what?"',
                fix: 'A beautiful market map without a narrative is wall art, not strategy. Every map needs a 2-3 sentence explanation of what it reveals and what your company should do about it.',
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
                q: 'What is the difference between a market map and a competitive landscape?',
                a: 'A market map is a visual diagram showing where competitors sit relative to each other. A competitive landscape is a broader analysis that includes the market map plus qualitative assessment of competitive dynamics, threats, opportunities, and strategic implications. The map is one component of a comprehensive competitive landscape analysis.',
              },
              {
                q: 'How many competitors should be on a market map?',
                a: 'For a 2x2 quadrant map: 8-15 competitors. For a category market map: 15-30 companies. For an ecosystem map: as many as needed to show the value chain, but typically 20-40. The right number is "enough to show the market structure without creating visual noise."',
              },
              {
                q: 'What tool should I use to create a market map?',
                a: 'For quick 2x2 quadrants: LandscapeBrief (generates from CSV automatically). For category maps: Figma or PowerPoint with a grid template. For ecosystem maps: Figma, Miro, or Lucidchart. Avoid using tools that make updates painful — you will need to refresh the map regularly.',
              },
              {
                q: 'Should the market map go in the pitch deck?',
                a: 'Almost always yes, but choose the right format. Investors expect a competitive slide, and a well-constructed 2x2 quadrant or category map is the clearest way to present it. The map should show your position, the competitive cluster, and the whitespace. Pair it with a one-sentence positioning statement.',
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
            <Link href="/guides/competitive-landscape-analysis" className="hover:text-[#1B2A4A] transition-colors">Landscape Analysis</Link>
            <Link href="/guides/market-positioning-map" className="hover:text-[#1B2A4A] transition-colors">Positioning Map</Link>
            <Link href="/guides/industry-landscape-report" className="hover:text-[#1B2A4A] transition-colors">Landscape Report</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
