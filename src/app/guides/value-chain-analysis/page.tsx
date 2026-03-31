import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Value Chain Analysis: Porter's Framework Applied to Startups",
  description: "A practical guide to value chain analysis using Porter's framework. Covers primary and support activities, cost drivers, margin analysis, and how startups can use the value chain to find competitive advantage.",
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
        Map where each competitor creates value — visually
      </p>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
        Upload your competitor data to LandscapeBrief and see exactly where they cluster on the value chain. Identify which activities are over-invested and where the whitespace sits.
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
        See the whole chain. Find the weak link.
      </h2>
      <p className="text-white/50 text-sm mb-8 max-w-[400px] mx-auto">
        LandscapeBrief maps your competitors on strategic dimensions and identifies where value is being captured — and where it is not.
      </p>
      <Link href="/app" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitive Landscape Free &rarr;
      </Link>
    </div>
  )
}

export default function ValueChainAnalysis() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <NavBar />

      <main className="max-w-[768px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Guide &middot; Value Chain
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            Value Chain Analysis: Porter&apos;s Framework Applied to Startups
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Michael Porter introduced value chain analysis in 1985 to explain how companies create competitive advantage through the specific activities they perform. The framework was designed for large industrial corporations, but the underlying logic is even more powerful for startups — because startups can design their value chains from scratch, while incumbents are locked into activities that made sense decades ago. This guide adapts Porter&apos;s value chain to the realities of modern startups building software, services, and platforms.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            The value chain model explained
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            A value chain breaks a company&apos;s operations into discrete activities, each of which either adds value for the customer or adds cost for the company. Competitive advantage comes from performing specific activities more effectively than competitors (cost advantage) or performing them in a unique way that creates differentiation (differentiation advantage).
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Porter divides the value chain into two types of activities: primary activities (which directly create and deliver the product) and support activities (which enable the primary activities to function).
          </p>

          <div className="mb-8">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-widest mb-4">Primary Activities</p>
            <div className="space-y-4">
              {[
                {
                  activity: 'Inbound logistics',
                  traditional: 'Receiving, storing, and distributing raw materials',
                  startup: 'For a SaaS startup: data ingestion, API integrations, content sourcing. For a marketplace: supplier onboarding. The quality of what goes in determines the quality of what comes out.',
                },
                {
                  activity: 'Operations',
                  traditional: 'Transforming inputs into the final product',
                  startup: 'Product development, engineering, algorithm design, content creation. This is where most startups concentrate their resources. The question is whether this is where competitive advantage actually lives.',
                },
                {
                  activity: 'Outbound logistics',
                  traditional: 'Distributing the finished product to customers',
                  startup: 'Product delivery: app deployment, CDN performance, onboarding flows, API reliability. For physical products: fulfillment and shipping. Often neglected by startups obsessed with the product itself.',
                },
                {
                  activity: 'Marketing and sales',
                  traditional: 'Communicating value and acquiring customers',
                  startup: 'Growth marketing, content marketing, sales team, partnerships, pricing strategy. For many startups, this is where the actual competitive battle happens — the product is good enough, but distribution determines who wins.',
                },
                {
                  activity: 'Service',
                  traditional: 'Post-sale support and maintenance',
                  startup: 'Customer success, technical support, community management, documentation. The activity that most directly affects retention and expansion revenue. Companies that treat service as a cost centre lose to companies that treat it as a growth lever.',
                },
              ].map((item, i) => (
                <div key={item.activity} className="bg-white border border-[#E2E1DE] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A]">{item.activity}</h3>
                  </div>
                  <p className="text-xs text-[#9BA8B4] mb-2">Traditional: {item.traditional}</p>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.startup}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#4A6FA5] uppercase tracking-widest mb-4">Support Activities</p>
            <div className="space-y-4">
              {[
                {
                  activity: 'Firm infrastructure',
                  startup: 'Legal, finance, accounting, planning, compliance. Startups underinvest here until something breaks. The companies that get this right early (clean cap tables, proper data governance, SOC 2 compliance) have a structural advantage in enterprise sales and fundraising.',
                },
                {
                  activity: 'Human resource management',
                  startup: 'Hiring, retention, culture, compensation design. At a startup, every hire changes the company. The speed and quality of hiring is a genuine competitive advantage — the team you can attract determines the product you can build.',
                },
                {
                  activity: 'Technology development',
                  startup: 'R&D, internal tools, platform infrastructure, technical debt management. Not the product itself — that is operations. This is the infrastructure that makes operations possible. Companies with strong technology development can iterate faster than competitors.',
                },
                {
                  activity: 'Procurement',
                  startup: 'Vendor selection, tool purchases, cloud infrastructure deals, partner agreements. Startups are often poor at procurement — they accept list prices, do not negotiate annual contracts, and end up spending 30-40% more than necessary on the same tools.',
                },
              ].map((item, i) => (
                <div key={item.activity} className="bg-[#F0EFF5] border border-[#E2E1DE] rounded-lg p-5">
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A] mb-2">{item.activity}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.startup}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBox />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            How to do a value chain analysis: step by step
          </h2>
          <div className="space-y-8">
            {[
              { n: '01', title: 'Map your own value chain first', body: 'List every activity your company performs, grouped into the nine categories above. Be specific — do not write "marketing." Write "organic content production," "paid search management," "partner referral programme." The more specific you are, the more useful the analysis becomes.' },
              { n: '02', title: 'Assign costs to each activity', body: 'Allocate your total cost structure across each activity. Most startups have never done this. When you see that 60% of your cost goes to engineering (operations) and 5% goes to customer success (service), it raises an obvious question: is that the right allocation given where your competitive advantage actually comes from?' },
              { n: '03', title: 'Identify value-creating activities', body: 'For each activity, ask: does this activity create value that the customer perceives and is willing to pay for? Activities that create cost without creating customer-perceived value are candidates for elimination, outsourcing, or automation.' },
              { n: '04', title: 'Map competitor value chains', body: 'Using public information — pricing pages, job postings, tech stacks (built with tools), case studies, investor presentations — reconstruct the value chains of 3-5 key competitors. You will not get perfect data, but even a rough sketch reveals where they invest differently from you.' },
              { n: '05', title: 'Compare value chains side by side', body: 'The comparison reveals two types of competitive insight. First: activities where competitors invest heavily and you do not (potential vulnerabilities). Second: activities where you invest heavily and competitors do not (potential differentiators — or waste, depending on whether customers value it).' },
              { n: '06', title: 'Identify linkages between activities', body: 'Value chain activities are not independent — they interact. A strong product (operations) reduces the load on customer success (service). A strong referral programme (marketing) reduces the cost of acquisition. Look for linkages where improving one activity would cascade benefits across others.' },
              { n: '07', title: 'Decide: cost advantage or differentiation', body: 'Porter argues that competitive advantage comes from one of two sources: doing the same activities at lower cost, or doing different activities that create unique value. Do not try both simultaneously — this is the "stuck in the middle" trap. Your value chain analysis should lead to a clear choice.' },
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
            Value chain disruption: where startups actually win
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Startups rarely win by doing the same activities as incumbents but better. They win by restructuring the value chain — eliminating activities, combining activities, or replacing expensive activities with technology. Here are the five most common patterns.
          </p>
          <div className="space-y-5">
            {[
              {
                pattern: 'Vertical integration of a previously outsourced activity',
                example: 'Stripe brought payment processing in-house instead of relying on traditional payment gateways. By owning the operations activity that others outsourced, they could offer a better developer experience and faster iteration.',
              },
              {
                pattern: 'Elimination of an entire activity through technology',
                example: 'Robinhood eliminated the human broker (service activity) from stock trading. The cost savings funded zero-commission trading, which changed the competitive dynamics of the entire industry.',
              },
              {
                pattern: 'Reversal of the activity sequence',
                example: 'Warby Parker moved the "try before you buy" activity (previously a retail/outbound logistics activity) to the home, using a free try-at-home programme. This eliminated the retail cost while improving the customer experience.',
              },
              {
                pattern: 'Platform model that outsources operations to users',
                example: 'Airbnb moved the most expensive activity in hospitality (operations: maintaining physical properties) to hosts. The company focuses on marketing, technology, and trust infrastructure instead.',
              },
              {
                pattern: 'Unbundling the value chain and owning one piece',
                example: 'Figma unbundled the design value chain: instead of building an entire creative suite (like Adobe), they built the best collaborative design tool and integrated with everything else via APIs.',
              },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-[#4A6FA5] pl-6 py-2">
                <p className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A] mb-2">{item.pattern}</p>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.example}</p>
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
                q: 'Is value chain analysis still relevant for software companies?',
                a: 'Yes, but the activities look different. Inbound logistics becomes data sourcing and API integrations. Operations becomes product development. Outbound logistics becomes deployment and CDN performance. The framework works for any business — you just need to translate the activity names to fit your context.',
              },
              {
                q: 'How is value chain analysis different from a business model canvas?',
                a: 'A business model canvas describes what a company does (value proposition, customer segments, channels). A value chain analysis describes how a company does it (the specific activities and their cost structure). The business model canvas is about strategy design. The value chain is about strategy execution.',
              },
              {
                q: 'Can you do a value chain analysis on a competitor without internal data?',
                a: 'Yes, at a directional level. Use job postings to infer where they invest (lots of sales hires = heavy marketing/sales activity). Use pricing to infer cost structure. Use product features to infer operations priorities. Use G2/Glassdoor reviews to infer service quality. You will not get exact numbers, but you can identify the shape of their value chain.',
              },
              {
                q: "What is Porter's value chain margin?",
                a: 'In Porter\'s model, margin is the difference between the total value created by the chain and the total cost of performing the activities. The goal of value chain analysis is to increase margin by either reducing the cost of activities (cost advantage) or increasing the value customers perceive (differentiation advantage). Both paths increase the gap between value and cost.',
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
            <Link href="/guides/five-forces-analysis-template" className="hover:text-[#1B2A4A] transition-colors">Five Forces</Link>
            <Link href="/guides/blue-ocean-strategy-canvas" className="hover:text-[#1B2A4A] transition-colors">Blue Ocean</Link>
            <Link href="/guides/competitive-benchmarking-guide" className="hover:text-[#1B2A4A] transition-colors">Benchmarking</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
