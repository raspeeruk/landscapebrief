import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Competitive Intelligence Tools: 2025 Comparison',
  description: 'A hands-on comparison of the best competitive intelligence tools and competitor analysis tools in 2025. Covers pricing, data sources, strengths, and which tool fits which team size.',
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
        Turn raw competitor data into a board-ready landscape map
      </p>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
        You don't need six different tools. Upload a CSV of competitors to LandscapeBrief and get a 2x2 quadrant map, whitespace analysis, and strategy brief in under 3 minutes.
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
        Stop subscribing. Start mapping.
      </h2>
      <p className="text-white/50 text-sm mb-8 max-w-[400px] mx-auto">
        LandscapeBrief replaces the positioning map step of every CI tool on this list. Free to start.
      </p>
      <Link href="/app" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitive Landscape Free &rarr;
      </Link>
    </div>
  )
}

export default function CompetitiveIntelligenceTools() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <NavBar />

      <main className="max-w-[768px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Guide &middot; Competitive Intelligence
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            Best Competitive Intelligence Tools: 2025 Comparison
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            The competitive intelligence tool market has exploded. There are now dozens of platforms claiming to automate competitor tracking, but they serve fundamentally different use cases. A solo founder running a seed-stage startup does not need the same tool as a 200-person product marketing team at a public company. This guide breaks down what actually matters, which tools deliver on their promises, and where you are better off with a simpler approach.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            What competitive intelligence tools actually do
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Competitive intelligence (CI) tools fall into five functional categories. Most platforms cover two or three of these. None covers all five well.
          </p>
          <div className="space-y-8">
            {[
              {
                n: '01',
                title: 'Web monitoring and alerts',
                body: 'Tracks competitor websites, pricing pages, blog posts, job listings, and press releases for changes. This is the most common CI function and the easiest to automate. At its simplest, this is a glorified Google Alert. At its best, it detects pricing changes within hours and surfaces the strategic implications.',
              },
              {
                n: '02',
                title: 'Market and traffic intelligence',
                body: 'Estimates competitor web traffic, keyword rankings, ad spend, and audience demographics. Tools like SimilarWeb and SEMrush dominate here. The data is directional, not precise — useful for spotting trends, dangerous for making exact comparisons. Never cite estimated traffic numbers as facts in a board presentation.',
              },
              {
                n: '03',
                title: 'Sales battlecard automation',
                body: 'Generates comparison sheets that sales teams use in competitive deals. Klue and Crayon lead this space. The value is not the initial battlecard (anyone can write one) but the automated updates — knowing that a competitor changed their pricing or launched a new feature before your next sales call.',
              },
              {
                n: '04',
                title: 'Win/loss analysis',
                body: 'Collects and analyses reasons deals were won or lost against specific competitors. Clozd and Klue both offer this. When done well, it reveals which competitor objections your team cannot overcome — and whether the issue is product, positioning, or pricing.',
              },
              {
                n: '05',
                title: 'Landscape mapping and positioning',
                body: 'Visualises where competitors sit relative to each other on strategic dimensions. This is the output most executives actually want — a clear picture of the market shape. Historically done manually in PowerPoint. LandscapeBrief automates the quadrant mapping and whitespace identification step.',
              },
            ].map(item => (
              <div key={item.n} className="flex gap-6">
                <span className="font-[family-name:var(--font-mono)] text-sm text-[#C1440E] tracking-widest shrink-0 pt-0.5">{item.n}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1B2A4A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            The 10 best competitive intelligence tools compared
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            This comparison focuses on tools that serve product, strategy, or marketing teams doing competitive analysis. Pure SEO tools (Ahrefs, Moz) and pure social listening tools (Brandwatch, Mention) are excluded — they overlap with CI but are not CI-first platforms.
          </p>
          <div className="space-y-6">
            {[
              {
                name: 'Crayon',
                category: 'Web monitoring + battlecards',
                price: '$$$$ (enterprise, typically $30k+/year)',
                best: 'Mid-market and enterprise B2B SaaS with dedicated product marketing',
                strength: 'Deepest automated web monitoring. Tracks millions of pages and surfaces meaningful changes with AI-powered relevance scoring.',
                weakness: 'Expensive and complex to set up. Overkill for teams under 50 people. The signal-to-noise ratio requires active curation.',
              },
              {
                name: 'Klue',
                category: 'Battlecards + win/loss + monitoring',
                price: '$$$$ (enterprise, similar to Crayon)',
                best: 'Sales-driven B2B organisations where competitive deals are frequent',
                strength: 'Best-in-class battlecard delivery directly into Salesforce, Slack, and Gong. Sales reps actually use it, which is rare for CI tools.',
                weakness: 'The monitoring component is weaker than Crayon. Requires significant setup time and ongoing content curation from product marketing.',
              },
              {
                name: 'SimilarWeb',
                category: 'Traffic and market intelligence',
                price: '$$$ (plans from $125/mo, enterprise custom)',
                best: 'Digital-first businesses analysing competitor traffic, channels, and audience',
                strength: 'The most comprehensive traffic estimation platform. Good for understanding where competitors get their traffic and how their digital presence is growing.',
                weakness: 'Accuracy degrades significantly for sites under 50k monthly visits. The data is directional, not precise — treat it as a trend indicator.',
              },
              {
                name: 'SEMrush',
                category: 'SEO + PPC competitive analysis',
                price: '$$ ($130-500/mo)',
                best: 'Marketing teams focused on organic and paid search competition',
                strength: 'Massive keyword database. Excellent for understanding which keywords competitors rank for, what they bid on, and where their backlinks come from.',
                weakness: 'Not a strategic CI tool. It tells you what competitors do in search, not why they make strategic decisions. Best used as one input into a broader analysis.',
              },
              {
                name: 'Competitors.app',
                category: 'Lightweight web monitoring',
                price: '$ ($7.90/competitor/mo)',
                best: 'Small teams that want basic competitor tracking without enterprise pricing',
                strength: 'Dead simple setup. Add a competitor URL and it tracks website changes, social media, email newsletters, and keyword rankings. Good price-to-value ratio.',
                weakness: 'Limited depth. No battlecard automation, no win/loss analysis, no landscape mapping. You get monitoring and alerts, nothing more.',
              },
              {
                name: 'Contify',
                category: 'News and market intelligence',
                price: '$$$ (custom pricing, mid-market)',
                best: 'Strategy teams that need curated market intelligence feeds',
                strength: 'AI-curated news feeds from 500k+ sources. Good at filtering signal from noise across industries, companies, and topics.',
                weakness: 'Heavy on information aggregation, light on analysis tools. You still need to do the strategic synthesis yourself.',
              },
              {
                name: 'AlphaSense',
                category: 'Enterprise market intelligence',
                price: '$$$$$ (enterprise, typically $50k+/year)',
                best: 'Investment firms, corporate strategy teams, large enterprises',
                strength: 'Searches across earnings transcripts, SEC filings, expert call transcripts, and proprietary research. Unmatched depth for public company intelligence.',
                weakness: 'Wildly expensive and designed for financial analysis, not product competition. Not appropriate for startups or product teams.',
              },
              {
                name: 'SpyFu',
                category: 'PPC and SEO competitor tracking',
                price: '$ ($39-79/mo)',
                best: 'Small businesses doing competitive keyword research on a budget',
                strength: 'Affordable. Strong historical data on competitor Google Ads — you can see every keyword a competitor has bid on for the past 15+ years.',
                weakness: 'Narrow scope. PPC and SEO only. The interface feels dated. Not a strategic CI tool.',
              },
              {
                name: 'Owler',
                category: 'Company profiles and alerts',
                price: 'Free tier + $$ ($35/mo pro)',
                best: 'Sales teams and individual contributors doing quick competitor lookups',
                strength: 'Good free tier. Crowdsourced revenue estimates and employee counts give you a fast snapshot of private companies.',
                weakness: 'Crowdsourced data is unreliable. The pro features are thin compared to dedicated CI platforms. Fine for initial research, not for ongoing intelligence.',
              },
              {
                name: 'LandscapeBrief',
                category: 'Landscape mapping and positioning',
                price: 'Free tier + $$ (paid plans)',
                best: 'Founders, product marketers, and strategy teams who need a visual competitive map',
                strength: 'Upload a competitor CSV and get a positioned quadrant map with AI-chosen axes, cluster analysis, whitespace identification, and a written strategy brief. Board-ready output in minutes.',
                weakness: 'Focused specifically on landscape visualisation and positioning, not ongoing monitoring or battlecard automation. Best used alongside a monitoring tool.',
              },
            ].map((tool, i) => (
              <div key={tool.name} className="bg-white border border-[#E2E1DE] rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1B2A4A]">{tool.name}</h3>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#9BA8B4] uppercase tracking-widest">{tool.price}</span>
                </div>
                <p className="font-[family-name:var(--font-mono)] text-xs text-[#4A6FA5] uppercase tracking-widest mb-4">{tool.category}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-[#1B2A4A] mb-1">Best for</p>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{tool.best}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1B2A4A] mb-1">Core strength</p>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{tool.strength}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1B2A4A] mb-1">Main limitation</p>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{tool.weakness}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CtaBox />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            How to choose the right CI tool for your stage
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            The biggest mistake teams make is buying an enterprise CI platform before they have the process to use it. CI tools amplify an existing competitive analysis discipline — they do not create one from nothing. Match your tool to your maturity level.
          </p>
          <div className="space-y-6">
            {[
              {
                stage: 'Pre-seed to Series A (1-20 people)',
                color: '#C1440E',
                tools: 'Google Alerts + SEMrush (free tier) + LandscapeBrief',
                rationale: 'You need a competitive landscape for your pitch deck and a basic monitoring setup. Do not spend money on enterprise CI tools. Your competitive advantage at this stage is speed of learning, not depth of intelligence.',
              },
              {
                stage: 'Series A to Series B (20-100 people)',
                color: '#4A6FA5',
                tools: 'Competitors.app or Contify + LandscapeBrief + SEMrush (paid)',
                rationale: 'You now have sales deals where competitors come up regularly. You need automated monitoring so competitor changes do not surprise your sales team. Invest in a lightweight monitoring tool and pair it with quarterly landscape mapping.',
              },
              {
                stage: 'Series B+ or enterprise (100+ people)',
                color: '#1B2A4A',
                tools: 'Crayon or Klue + SimilarWeb + LandscapeBrief',
                rationale: 'At this stage you have dedicated product marketing and a competitive intelligence function. Enterprise tools pay for themselves by keeping 50+ sales reps armed with current competitive information. Add AlphaSense if you compete against public companies.',
              },
            ].map(tier => (
              <div key={tier.stage} className="border border-[#E2E1DE] rounded-lg p-6 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: tier.color }} />
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">{tier.stage}</p>
                </div>
                <p className="text-sm font-semibold text-[#1B2A4A] mb-2">Recommended stack: {tier.tools}</p>
                <p className="text-sm text-[#6B7280] leading-relaxed">{tier.rationale}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            The CI tool stack that actually works
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            No single tool covers the full competitive intelligence workflow. The most effective teams use a layered stack where each tool handles one function well.
          </p>
          <div className="space-y-5">
            {[
              {
                layer: 'Layer 1 — Data collection',
                tool: 'Google Alerts + Competitors.app (or Crayon at enterprise scale)',
                purpose: 'Surface competitor changes as they happen. Website updates, pricing changes, new hires, press releases. This layer should run passively — you set it up once and it delivers a daily or weekly digest.',
              },
              {
                layer: 'Layer 2 — Market context',
                tool: 'SEMrush + SimilarWeb',
                purpose: 'Understand the competitive landscape from a traffic, search, and audience perspective. Who is gaining share? Who is investing in paid acquisition? Which keywords are becoming more competitive? This layer informs budget and channel decisions.',
              },
              {
                layer: 'Layer 3 — Strategic synthesis',
                tool: 'LandscapeBrief + internal analysis process',
                purpose: 'Turn raw data into strategic positioning. This is where the quadrant maps, whitespace analysis, and competitive briefs live. The tools in layers 1 and 2 give you facts. Layer 3 turns facts into strategy.',
              },
              {
                layer: 'Layer 4 — Sales enablement',
                tool: 'Klue (or manual battlecards for smaller teams)',
                purpose: 'Deliver competitive intelligence to the people who use it in real-time — sales reps in active deals. Battlecards, objection handling scripts, competitor comparison one-pagers. This layer is only needed when you have a sales team doing competitive deals.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <span className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] tracking-wider shrink-0 pt-1">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[#4A6FA5] uppercase tracking-widest mb-2">{item.layer}</p>
                  <p className="font-semibold text-[#1B2A4A] text-sm mb-1">{item.tool}</p>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Common CI tool mistakes
          </h2>
          <div className="space-y-5">
            {[
              {
                mistake: 'Buying an enterprise tool before you have a CI process',
                fix: 'Start with free tools and a manual quarterly analysis. Only upgrade when you are drowning in manual work — not because a vendor showed you a compelling demo.',
              },
              {
                mistake: 'Treating tool output as finished analysis',
                fix: 'CI tools produce data and signals. Strategic analysis requires a human who understands your specific market context. The tool reduces research time; it does not replace strategic thinking.',
              },
              {
                mistake: 'Monitoring too many competitors',
                fix: 'Track 5-8 direct competitors closely, 3-5 indirect competitors at a high level. Monitoring 30 competitors creates noise that buries the signals that matter.',
              },
              {
                mistake: 'Ignoring the "so what?" question',
                fix: 'Every competitive signal needs a "so what?" attached. A competitor raised $50M — so what does that mean for our roadmap? Without the "so what?", intelligence becomes trivia.',
              },
              {
                mistake: 'Siloing CI in product marketing',
                fix: 'Competitive intelligence should flow to product (what to build), sales (how to position), and leadership (where to invest). If only one team sees it, the organisation is flying partially blind.',
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
                q: 'What is the best free competitive intelligence tool?',
                a: 'Google Alerts combined with a spreadsheet. Set up alerts for each competitor\'s brand name, their CEO\'s name, and their product name. Review weekly and log meaningful changes. It costs nothing and catches 60-70% of what paid tools catch. For landscape mapping specifically, LandscapeBrief has a free tier that generates quadrant maps from a CSV upload.',
              },
              {
                q: 'Is it worth paying for CI tools at a startup?',
                a: 'Before Series A, almost never. Your competitive advantage is speed, not intelligence depth. After Series A, if you are losing deals to competitors and do not know why, a $100-200/month monitoring tool pays for itself. Enterprise CI platforms ($30k+/year) only make sense when you have a dedicated product marketing team and competitive deals are a weekly occurrence.',
              },
              {
                q: 'How accurate are traffic estimation tools like SimilarWeb?',
                a: 'For sites with over 100k monthly visits, SimilarWeb estimates are typically within 20-30% of actual traffic. Below 50k visits, accuracy drops significantly — sometimes off by 2-3x. Use traffic tools for directional trends (is a competitor growing or shrinking?) rather than absolute numbers. Never cite estimated traffic as a fact.',
              },
              {
                q: 'Can AI replace competitive intelligence tools?',
                a: 'AI is already embedded in most CI tools — Crayon, Klue, and Contify all use AI for signal relevance scoring. Standalone AI (like ChatGPT) can summarise competitor information, but it cannot monitor websites for changes or track pricing in real time. AI accelerates analysis; it does not replace data collection.',
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
            <Link href="/guides/competitive-analysis-template" className="hover:text-[#1B2A4A] transition-colors">Analysis Template</Link>
            <Link href="/guides/competitor-research" className="hover:text-[#1B2A4A] transition-colors">Competitor Research</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
