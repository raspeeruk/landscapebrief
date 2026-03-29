import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SWOT Analysis: How to Do One That\'s Actually Useful',
  description: 'A complete SWOT analysis guide covering the correct process, how to make each quadrant specific and actionable, the TOWS framework for strategy output, and a 90-minute team workshop format.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should you redo a SWOT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Annually for a full SWOT, with a quarterly review of the Threats quadrant specifically. The competitive landscape shifts faster than internal capabilities, so external threats need more frequent reassessment. If you\'ve had a major product launch, a significant funding event, or a new competitor has entered the market, trigger an ad hoc SWOT review regardless of schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should be in the room for a SWOT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The executive team plus one person from customer success and one from sales. Customer success knows where the product falls short versus competitors (Weaknesses and Threats). Sales knows which competitive objections come up most frequently (Threats) and which strengths close deals (Strengths). External SWOT inputs should also include recent win/loss interviews and competitor analysis data — not just internal opinions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you do a SWOT for a startup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it\'s often more useful at the startup stage than at scale, because the assumptions are fresher and the ability to pivot is higher. For early-stage startups, acknowledge that Strengths are often founder-specific (expertise, network, insight) and document plans to convert them into product-level or structural advantages. Weaknesses should be ruthlessly honest — investor-facing SWOTs that have no weaknesses are not useful for strategy.',
      },
    },
    {
      '@type': 'Question',
      name: "What's TOWS and how is it different from SWOT?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TOWS is the strategic output layer of SWOT. Where SWOT lists internal and external factors, TOWS combines them into four strategic directions: SO (use Strengths to capture Opportunities), ST (use Strengths to mitigate Threats), WO (address Weaknesses to unlock Opportunities), WT (minimise Weaknesses to reduce Threat impact). TOWS is what makes a SWOT actionable — without TOWS, a SWOT is an audit document, not a strategy document.',
      },
    },
  ],
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
        Feed your SWOT Threats quadrant with real competitive data
      </p>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
        The Threats quadrant is only as good as your competitive intelligence. LandscapeBrief maps your full competitive landscape — who's positioned where, what white space exists, and which competitors are most likely to threaten your current position. Use it before your next strategy session.
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
        Get the competitive data your SWOT needs.
      </h2>
      <p className="text-white/50 text-sm mb-8 max-w-[400px] mx-auto">
        LandscapeBrief maps your competitive landscape in under 3 minutes. Free to start.
      </p>
      <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitive Landscape Free →
      </Link>
    </div>
  )
}

export default function SwotAnalysisGuide() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NavBar />

      <main className="max-w-[768px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Guide · Strategic Analysis
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            SWOT Analysis: How to Do One That's Actually Useful
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Most SWOT analyses end up as wall decorations. Four quadrants of platitudes, no prioritisation, no action plan. The fault isn't the framework — it's how it's executed. Done correctly, a SWOT gives you a structured picture of where your company stands relative to the market and a clear set of strategic priorities to act on. This guide shows you exactly how.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Why most SWOT analyses are useless
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Before fixing the process, it's worth diagnosing the common failure modes. The same four mistakes appear in almost every SWOT that produces no action.
          </p>
          <div className="space-y-5">
            {[
              {
                mistake: 'Items are too vague to act on',
                fix: '"Strong team" is not a Strength in a useful SWOT. "The only team with 10+ years of direct experience in [specific regulatory domain] in our market" is. If you can\'t draw a line between an item and a specific strategic decision, it doesn\'t belong in the SWOT.',
              },
              {
                mistake: 'No prioritisation within quadrants',
                fix: 'Listing 12 Strengths treats them as equally important. A real SWOT forces a rank order within each quadrant. Your top Strength should be the one that is hardest for competitors to replicate and most valued by your target customer.',
              },
              {
                mistake: 'Strengths and Weaknesses aren\'t relative to competitors',
                fix: '"Good customer support" is only a Strength if your competitors\' support is measurably worse. Strengths and Weaknesses exist relative to the competitive set, not in isolation. Without a competitive baseline, every company has a strong team and good service.',
              },
              {
                mistake: 'No TOWS output',
                fix: 'A SWOT without a TOWS is a diagnosis without a treatment plan. The TOWS step (covered below) converts the four quadrants into four strategic directions with specific actions. Skip TOWS and the SWOT is just a meeting.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#FAFAF8] border border-[#E2E1DE] rounded-lg p-5">
                <p className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A] mb-2">
                  <span className="text-[#C1440E] mr-2">✕</span>{item.mistake}
                </p>
                <p className="text-sm text-[#6B7280] leading-relaxed pl-6">{item.fix}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            The correct SWOT process
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Internal and external factors require different inputs. Conflating them produces sloppy SWOTs. Run them as separate exercises with different data sources.
          </p>
          <div className="grid grid-cols-1 gap-4 mb-8">
            {[
              {
                label: 'Internal (S and W) — from data',
                color: '#1B2A4A',
                sources: [
                  'Win/loss analysis: which factors closed deals and which lost them?',
                  'Customer retention data: which cohorts churn and why?',
                  'Gross margin by product line or segment',
                  'Time-to-value data: how long before customers get their first result?',
                  'Employee performance reviews and capability gaps',
                  'Tech debt audit: which systems slow you down most?',
                ],
              },
              {
                label: 'External (O and T) — from market research',
                color: '#C1440E',
                sources: [
                  'Competitive landscape analysis (who\'s positioned where, and what white space exists)',
                  'PESTLE analysis: Political, Economic, Social, Technological, Legal, Environmental factors',
                  'Industry analyst reports and category growth projections',
                  'Regulatory and compliance changes in your sector',
                  'Technology shifts that change what\'s possible or affordable',
                  'Customer discovery interviews: what pain points aren\'t being solved?',
                ],
              },
            ].map(block => (
              <div key={block.label} className="bg-[#F0EFF5] rounded-lg p-6 border border-[#E2E1DE]">
                <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest mb-4" style={{ color: block.color }}>{block.label}</p>
                <ul className="space-y-2">
                  {block.sources.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#1B2A4A]">
                      <span className="text-[#C1440E] mt-1.5 shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Each quadrant: how to fill it correctly
          </h2>
          <div className="space-y-8">
            {[
              {
                n: 'S',
                label: 'Strengths',
                rule: 'Only count advantages you have versus your specific competitors',
                body: 'A Strength is only valid if at least one key competitor lacks it. List the specific competitor who is weaker on each item. If all your competitors also have strong engineering teams, engineering quality is not your Strength — it\'s table stakes. The question to ask for each proposed Strength: "Which competitor would a customer leave if we had this and they didn\'t?"',
              },
              {
                n: 'W',
                label: 'Weaknesses',
                rule: 'Must be things specific competitors are meaningfully better at',
                body: 'Not "we need more marketing budget" — that\'s a resource constraint, not a Weakness. A Weakness is a capability gap that a competitor currently exploits. Identify the specific competitor who wins deals because of each Weakness. If you\'re not losing deals because of it, it may not belong in the Weakness quadrant.',
              },
              {
                n: 'O',
                label: 'Opportunities',
                rule: 'Market forces creating tailwind — PESTLE factors, technology shifts, regulatory changes',
                body: 'Opportunities are external. They exist whether or not your company is positioned to capture them — your job is to identify which ones you\'re positioned to capture better than competitors. Filter Opportunities through your Strengths: an Opportunity that aligns with a top Strength is a strategic priority. An Opportunity that requires addressing a Weakness first is a longer-term initiative.',
              },
              {
                n: 'T',
                label: 'Threats',
                rule: 'Specific competitive actions that could undermine you in 12–24 months',
                body: 'Vague threats like "market downturn" or "increased competition" are useless. A useful Threat names a specific competitor, a specific action they might take, and the specific customers it would put at risk. "Competitor X adds [feature] in Q3, which directly addresses the primary reason our customers in [segment] chose us" is a Threat you can plan against.',
              },
            ].map(item => (
              <div key={item.n} className="flex gap-6">
                <div className="shrink-0">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1B2A4A] font-[family-name:var(--font-heading)] text-xl font-semibold text-white">{item.n}</span>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1B2A4A] mb-1">{item.label}</h3>
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-wider mb-3">{item.rule}</p>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CtaBox />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            SWOT to strategy: the TOWS framework
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            TOWS converts your four quadrants into four strategic directions. Each direction combines two quadrants to generate specific initiatives.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1B2A4A]">
                  <th className="text-left py-3 pr-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">Direction</th>
                  <th className="text-left py-3 pr-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">Logic</th>
                  <th className="text-left py-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">Example initiative</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E1DE]">
                {[
                  { dir: 'SO — Maxi-Maxi', logic: 'Use your Strengths to capture Opportunities', ex: 'Top Strength: deep regulatory expertise. Top Opportunity: new compliance mandate. Initiative: launch compliance-focused product tier before competitors react.' },
                  { dir: 'ST — Maxi-Mini', logic: 'Use your Strengths to mitigate Threats', ex: 'Top Strength: high switching costs via deep integrations. Top Threat: well-funded competitor launching. Initiative: accelerate integration depth with top 20 accounts before launch.' },
                  { dir: 'WO — Mini-Maxi', logic: 'Address Weaknesses to unlock Opportunities', ex: 'Top Weakness: weak brand in enterprise segment. Top Opportunity: enterprise demand increasing. Initiative: hire enterprise marketing lead and build case study program.' },
                  { dir: 'WT — Mini-Mini', logic: 'Minimise Weaknesses to reduce Threat impact', ex: 'Top Weakness: slow product velocity. Top Threat: competitor shipping fast. Initiative: reduce scope, focus team on the one feature that drives retention.' },
                ].map(row => (
                  <tr key={row.dir}>
                    <td className="py-4 pr-6 font-semibold text-[#1B2A4A] align-top text-sm whitespace-nowrap">{row.dir}</td>
                    <td className="py-4 pr-6 text-[#6B7280] leading-relaxed align-top text-sm">{row.logic}</td>
                    <td className="py-4 text-[#6B7280] leading-relaxed align-top text-sm">{row.ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#6B7280] leading-relaxed">
            For each TOWS direction, generate 2–3 specific initiatives. Then score each initiative on impact and feasibility, and prioritise. This is the output you present at the end of a SWOT session — not the quadrant lists themselves.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            How to run a SWOT in 90 minutes with your team
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            This workshop format produces a usable SWOT output in a single session. Pre-work is required — without it, the session becomes a brainstorm that produces opinions instead of strategy.
          </p>
          <div className="space-y-6">
            {[
              {
                time: '1 week before — Pre-work',
                items: [
                  'Circulate a data pack: win/loss summary, churn data, top 5 competitor snapshots, one recent market report',
                  'Ask each attendee to arrive with 3 items per quadrant, each backed by a specific data point or customer quote',
                  'Run the competitive landscape analysis (LandscapeBrief is useful here) and include the output in the pack',
                ],
              },
              {
                time: 'Minutes 0–20 — Internal audit (S and W)',
                items: [
                  'Each person shares their pre-prepared Strengths and Weaknesses — no debate yet',
                  'Facilitator groups similar items on a shared board',
                  'Group votes on the top 3 Strengths and top 3 Weaknesses (dot voting works well)',
                ],
              },
              {
                time: 'Minutes 20–40 — External scan (O and T)',
                items: [
                  'Same process: share, group, vote',
                  'For Threats, require that each item names a specific competitor or market force — no vague threats allowed',
                  'Use the competitive landscape output to ground Threats in real market positioning data',
                ],
              },
              {
                time: 'Minutes 40–70 — TOWS strategy generation',
                items: [
                  'Work through all four TOWS combinations: SO, ST, WO, WT',
                  'Generate 2–3 specific, named initiatives per combination',
                  'Score each initiative: impact (1–5) × feasibility (1–5)',
                ],
              },
              {
                time: 'Minutes 70–90 — Prioritise and assign',
                items: [
                  'Rank all initiatives by combined score',
                  'Top 3–5 initiatives become the action plan',
                  'Assign owner, deadline, and success metric to each',
                  'Document the full SWOT and distribute within 24 hours',
                ],
              },
            ].map((phase, i) => (
              <div key={i} className="border border-[#E2E1DE] rounded-lg overflow-hidden">
                <div className="bg-[#1B2A4A] px-6 py-4">
                  <p className="font-[family-name:var(--font-heading)] text-base font-semibold text-white">{phase.time}</p>
                </div>
                <div className="px-6 py-5 bg-white">
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#6B7280]">
                        <span className="text-[#C1440E] mt-1.5 shrink-0">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
                q: 'How often should you redo a SWOT?',
                a: 'Annually for a full SWOT, with a quarterly review of the Threats quadrant specifically. The competitive landscape shifts faster than internal capabilities, so external threats need more frequent reassessment. If you\'ve had a major product launch, a significant funding event, or a new competitor has entered the market, trigger an ad hoc SWOT review regardless of schedule.',
              },
              {
                q: 'Who should be in the room for a SWOT?',
                a: 'The executive team plus one person from customer success and one from sales. Customer success knows where the product falls short versus competitors (Weaknesses and Threats). Sales knows which competitive objections come up most frequently (Threats) and which strengths close deals (Strengths). External SWOT inputs should also include recent win/loss interviews and competitor analysis data — not just internal opinions.',
              },
              {
                q: 'Can you do a SWOT for a startup?',
                a: "Yes, and it's often more useful at the startup stage than at scale, because the assumptions are fresher and the ability to pivot is higher. For early-stage startups, acknowledge that Strengths are often founder-specific (expertise, network, insight) and document plans to convert them into product-level or structural advantages. Weaknesses should be ruthlessly honest — investor-facing SWOTs that have no weaknesses are not useful for strategy.",
              },
              {
                q: "What's TOWS and how is it different from SWOT?",
                a: 'TOWS is the strategic output layer of SWOT. Where SWOT lists internal and external factors, TOWS combines them into four strategic directions: SO (use Strengths to capture Opportunities), ST (use Strengths to mitigate Threats), WO (address Weaknesses to unlock Opportunities), WT (minimise Weaknesses to reduce Threat impact). TOWS is what makes a SWOT actionable — without TOWS, a SWOT is an audit document, not a strategy document.',
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
            <Link href="/guides/competitive-moat-analysis" className="hover:text-[#1B2A4A] transition-colors">Moat Analysis</Link>
            <Link href="/guides/competitor-pricing-analysis" className="hover:text-[#1B2A4A] transition-colors">Pricing Analysis</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
