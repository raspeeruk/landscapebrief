import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Porter's Five Forces Analysis Template + Examples",
  description: "A complete Porter's Five Forces analysis template with real examples. Covers supplier power, buyer power, competitive rivalry, threat of substitution, and threat of new entry for startups and established businesses.",
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
        Visualise competitive rivalry on a quadrant map
      </p>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
        Upload your competitor list to LandscapeBrief. It maps the competitive rivalry force visually — showing where players cluster and where whitespace exists. Board-ready in under 3 minutes.
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
        Understand the forces. Own the position.
      </h2>
      <p className="text-white/50 text-sm mb-8 max-w-[400px] mx-auto">
        LandscapeBrief maps where competitors sit and where they do not. The clearest input for your Five Forces analysis.
      </p>
      <Link href="/app" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitive Landscape Free &rarr;
      </Link>
    </div>
  )
}

export default function FiveForcesAnalysisTemplate() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <NavBar />

      <main className="max-w-[768px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Guide &middot; Five Forces
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            Porter&apos;s Five Forces Analysis Template + Examples
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Porter&apos;s Five Forces framework, published in 1979, remains the most widely used tool for understanding industry structure. It explains why some industries are consistently profitable (luxury goods, enterprise software) and others are not (airlines, restaurants). For startups, Five Forces answers a fundamental question before you even begin competing: is this an attractive industry to enter? This guide provides a complete template with real examples and shows how to apply each force to your specific market.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            The five forces explained
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Each force represents a source of competitive pressure that determines how much profit an industry can sustain. When all five forces are strong, the industry is structurally unattractive — even brilliant companies struggle to earn above-average returns. When the forces are weak, even mediocre companies can be profitable.
          </p>
          <div className="space-y-6">
            {[
              {
                force: 'Force 1 — Competitive Rivalry',
                color: '#C1440E',
                desc: 'The intensity of competition between existing players. High rivalry means aggressive pricing, constant innovation, and heavy marketing spend — all of which erode margins. Rivalry is intense when there are many competitors of similar size, when industry growth is slow (companies must steal share), when fixed costs are high (companies cut prices to fill capacity), and when exit barriers keep unprofitable companies in the market.',
                questions: [
                  'How many direct competitors exist?',
                  'Are they similar in size and capability, or is there a clear leader?',
                  'Is the industry growing fast enough that companies can grow without stealing share?',
                  'Are there high fixed costs that pressure companies to cut prices?',
                  'How differentiated are competing products?',
                ],
              },
              {
                force: 'Force 2 — Threat of New Entrants',
                color: '#4A6FA5',
                desc: 'How easy is it for new companies to enter the industry and compete? If barriers to entry are low, profitable industries attract new competitors quickly, which drives profits down. Barriers include economies of scale, brand loyalty, capital requirements, access to distribution channels, regulatory requirements, and switching costs for customers.',
                questions: [
                  'What is the minimum capital required to enter this market?',
                  'Are there regulatory barriers (licenses, certifications, compliance)?',
                  'Do existing players have strong brand loyalty or network effects?',
                  'How high are customer switching costs?',
                  'Can a new entrant access distribution channels?',
                ],
              },
              {
                force: 'Force 3 — Threat of Substitution',
                color: '#1B2A4A',
                desc: 'Can customers solve the same problem using a completely different product or approach? Substitutes do not compete directly — they eliminate the need for your category entirely. The threat is highest when the substitute offers a better price-performance ratio, when switching costs to the substitute are low, and when customers have a propensity to substitute.',
                questions: [
                  'What do customers do instead of using products in this category?',
                  'Is the substitute cheaper, faster, or more convenient?',
                  'Are there switching costs that keep customers in the current category?',
                  'Is the price-performance ratio of substitutes improving over time?',
                  'Could a technology shift make the entire category obsolete?',
                ],
              },
              {
                force: 'Force 4 — Bargaining Power of Buyers',
                color: '#9BA8B4',
                desc: 'How much leverage do customers have to negotiate prices down or demand better quality? Buyer power is high when there are few buyers and many sellers, when the product is undifferentiated (commodity), when buyers can easily switch between suppliers, and when the purchase represents a large share of the buyer\'s costs.',
                questions: [
                  'How concentrated is the buyer base? (Few large buyers or many small ones?)',
                  'Can buyers easily compare alternatives and switch?',
                  'Is the product standardised or differentiated?',
                  'How important is the purchase to the buyer\'s total costs?',
                  'Do buyers have the ability to backward-integrate (build it themselves)?',
                ],
              },
              {
                force: 'Force 5 — Bargaining Power of Suppliers',
                color: '#6B7280',
                desc: 'How much leverage do suppliers have to raise prices or reduce quality? Supplier power is high when there are few alternative suppliers, when the supplier\'s product is differentiated, when switching suppliers is costly, and when the supplier can credibly threaten to forward-integrate (enter your market directly).',
                questions: [
                  'How many alternative suppliers exist for key inputs?',
                  'Are supplier products differentiated or commoditised?',
                  'What are the costs of switching to a different supplier?',
                  'Could the supplier forward-integrate into your market?',
                  'How important is your business to the supplier?',
                ],
              },
            ].map(force => (
              <div key={force.force} className="bg-white border border-[#E2E1DE] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: force.color }} />
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">{force.force}</p>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{force.desc}</p>
                <div className="bg-[#F0EFF5] rounded p-4">
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[#4A6FA5] uppercase tracking-widest mb-3">Key questions to answer</p>
                  <ul className="space-y-2">
                    {force.questions.map(q => (
                      <li key={q} className="flex items-start gap-2 text-sm text-[#1B2A4A]">
                        <span className="text-[#C1440E] mt-1.5 shrink-0">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                        </span>
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CtaBox />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Five Forces template: how to score each force
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            For each of the five forces, answer the key questions above and assign a score: <strong className="text-[#1B2A4A]">Low</strong> (the force is weak — favourable for industry profitability), <strong className="text-[#1B2A4A]">Medium</strong>, or <strong className="text-[#1B2A4A]">High</strong> (the force is strong — unfavourable for profitability). Then write a one-paragraph justification for each score.
          </p>
          <div className="space-y-6">
            {[
              {
                section: 'Section 1 — Industry Definition',
                items: [
                  'Industry name and scope',
                  'Geographic boundaries',
                  'Product/service category boundaries',
                  'Time horizon for the analysis (current state + 3-year outlook)',
                ],
              },
              {
                section: 'Section 2 — Force Scoring Table',
                items: [
                  'Competitive Rivalry: Low / Medium / High + justification',
                  'Threat of New Entrants: Low / Medium / High + justification',
                  'Threat of Substitution: Low / Medium / High + justification',
                  'Bargaining Power of Buyers: Low / Medium / High + justification',
                  'Bargaining Power of Suppliers: Low / Medium / High + justification',
                ],
              },
              {
                section: 'Section 3 — Overall Assessment',
                items: [
                  'Industry attractiveness summary (is this an industry where above-average returns are possible?)',
                  'Key structural drivers (which 1-2 forces have the most impact?)',
                  'Trends that are strengthening or weakening specific forces',
                  'Strategic implications for your company',
                ],
              },
            ].map(block => (
              <div key={block.section} className="bg-[#F0EFF5] rounded-lg p-6 border border-[#E2E1DE]">
                <p className="font-[family-name:var(--font-mono)] text-xs text-[#4A6FA5] uppercase tracking-widest mb-4">{block.section}</p>
                <ul className="space-y-2">
                  {block.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#1B2A4A]">
                      <span className="text-[#C1440E] mt-1.5 shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Five Forces example: the B2B SaaS industry
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Here is a worked example applying the Five Forces to the B2B SaaS industry (specifically, horizontal productivity tools like project management, CRM, and collaboration software).
          </p>
          <div className="space-y-4">
            {[
              {
                force: 'Competitive Rivalry',
                score: 'High',
                analysis: 'Hundreds of competitors in every sub-category. Low marginal cost of adding users means companies can price aggressively. High growth rate partially offsets rivalry, but mature sub-categories (CRM, email marketing) are extremely competitive. Differentiation is primarily through integrations, brand, and switching costs rather than features.',
              },
              {
                force: 'Threat of New Entrants',
                score: 'High',
                analysis: 'Barriers to entry are remarkably low. Cloud infrastructure (AWS, Vercel) means a two-person team can launch a competitor in months. No regulatory barriers. However, achieving distribution is the real barrier — the product can be built easily, but reaching customers at scale requires either significant marketing spend or a viral product mechanic.',
              },
              {
                force: 'Threat of Substitution',
                score: 'Medium',
                analysis: 'Spreadsheets remain the primary substitute for almost every SaaS category. Companies can (and many do) manage projects in Google Sheets, track sales in Excel, and collaborate via email. AI is increasing substitution threat — AI agents may soon perform tasks that currently require dedicated software.',
              },
              {
                force: 'Bargaining Power of Buyers',
                score: 'Medium-High',
                analysis: 'Buyers can compare alternatives easily (G2, Capterra, free trials). Switching costs exist (data migration, workflow retraining) but are not prohibitive. Enterprise buyers have strong negotiating leverage. SMBs have less leverage individually but are highly price-sensitive and churn quickly.',
              },
              {
                force: 'Bargaining Power of Suppliers',
                score: 'Low-Medium',
                analysis: 'Key suppliers are cloud infrastructure providers (AWS, GCP, Azure) and developer talent. Cloud infrastructure is commoditised — switching between providers is difficult but possible. Developer talent is a constrained resource that commands high salaries, giving labour as a "supplier" moderate power.',
              },
            ].map((item, i) => (
              <div key={item.force} className="bg-white border border-[#E2E1DE] rounded-lg p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A]">{item.force}</h3>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-widest">{item.score}</span>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.analysis}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#1B2A4A] rounded-lg p-6">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-widest mb-3">Overall assessment</p>
            <p className="text-sm text-white/70 leading-relaxed">
              The B2B SaaS industry is structurally moderate in attractiveness. High rivalry and low barriers to entry mean that building a SaaS product is easy but building a profitable SaaS business is hard. The companies that succeed do so through strong distribution (network effects, viral mechanics, or channel partnerships) and high switching costs (deep integrations, workflow lock-in). Product features alone are not a defensible advantage.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Common Five Forces mistakes
          </h2>
          <div className="space-y-5">
            {[
              {
                mistake: 'Confusing Five Forces with competitive analysis',
                fix: 'Five Forces analyses industry structure, not individual competitors. It tells you whether an industry is attractive, not whether you can beat a specific rival. Use Five Forces for industry selection, and competitive analysis (quadrant maps, battlecards) for competitive positioning.',
              },
              {
                mistake: 'Rating every force as "medium"',
                fix: 'If all five forces are medium, you have not done enough research. At least one force should be clearly high or low. The forces that deviate from medium are where the strategic insight lives.',
              },
              {
                mistake: 'Treating the analysis as static',
                fix: 'Industry structure changes over time. Technology can lower barriers to entry (increasing threat of new entrants). Regulation can increase supplier power. Refresh your Five Forces analysis annually, with particular attention to forces that are changing direction.',
              },
              {
                mistake: 'Defining the industry too broadly',
                fix: '"The software industry" is too broad for Five Forces. "B2B project management software for enterprise companies" is useful. The more specific your industry definition, the more actionable the analysis. Different segments of the same broad industry can have completely different force profiles.',
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
                q: "What is the difference between Porter's Five Forces and a SWOT analysis?",
                a: 'Five Forces analyses the external industry structure — it applies to the entire industry, not just your company. SWOT analyses your specific company\'s internal strengths/weaknesses and external opportunities/threats. Five Forces should inform the "Opportunities" and "Threats" quadrants of your SWOT, because industry structure determines which opportunities and threats exist.',
              },
              {
                q: 'Should startups use Five Forces?',
                a: 'Yes, particularly before committing to a market. Five Forces tells you whether the market you are entering is structurally attractive — can companies earn above-average returns in this industry? Many founders skip this step and enter industries where the structural forces make profitability extremely difficult regardless of product quality.',
              },
              {
                q: "How does Five Forces relate to Porter's generic strategies?",
                a: 'Five Forces analyses the industry; the generic strategies (cost leadership, differentiation, focus) are the response. Once you understand which forces are strongest, you can choose a strategy that either mitigates the strongest forces or positions you where the forces are weakest. For example, if buyer power is high, differentiation (which creates switching costs) is a direct counter.',
              },
              {
                q: 'Can you use Five Forces for a new market that does not exist yet?',
                a: 'You can do a predictive Five Forces analysis for an emerging market, but it requires more assumption-making. Focus on adjacent industries that are closest to the new market and estimate how the forces will evolve. The most important force for a new market is usually threat of new entrants — because if the market is attractive, others will enter quickly.',
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
            <Link href="/guides/value-chain-analysis" className="hover:text-[#1B2A4A] transition-colors">Value Chain</Link>
            <Link href="/guides/competitive-analysis-template" className="hover:text-[#1B2A4A] transition-colors">Analysis Template</Link>
            <Link href="/guides/competitor-swot-analysis" className="hover:text-[#1B2A4A] transition-colors">Competitor SWOT</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
