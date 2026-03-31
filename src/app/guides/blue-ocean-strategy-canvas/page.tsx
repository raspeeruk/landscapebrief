import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blue Ocean Strategy Canvas: How to Map Uncontested Markets',
  description: 'Learn how to build a Blue Ocean Strategy Canvas step by step. Covers the Eliminate-Reduce-Raise-Create grid, real examples, and how to find uncontested market space.',
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
        See where the blue ocean actually is
      </p>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
        Upload your competitor data and LandscapeBrief maps the entire competitive landscape on a 2x2 quadrant. The empty quadrants are your blue ocean. Strategy brief included.
      </p>
      <Link href="/app" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-6 py-3 rounded text-sm font-medium hover:bg-[#A33A0C] transition-colors">
        Find Your Blue Ocean Free &rarr;
      </Link>
    </div>
  )
}

function FinalCta() {
  return (
    <div className="my-14 bg-[#1B2A4A] rounded-lg p-12 text-center">
      <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] uppercase tracking-widest mb-4">Ready?</p>
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white mb-3">
        Stop fighting over red oceans. Find the white space.
      </h2>
      <p className="text-white/50 text-sm mb-8 max-w-[400px] mx-auto">
        LandscapeBrief visualises your competitive landscape and identifies uncontested space automatically.
      </p>
      <Link href="/app" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitive Landscape Free &rarr;
      </Link>
    </div>
  )
}

export default function BlueOceanStrategyCanvas() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <NavBar />

      <main className="max-w-[768px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C1440E] mb-4">
            Guide &middot; Blue Ocean Strategy
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            Blue Ocean Strategy Canvas: How to Map Uncontested Markets
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            The Blue Ocean Strategy Canvas is one of the most powerful — and most misunderstood — strategic frameworks. Published by W. Chan Kim and Renee Mauborgne in 2005, it gives companies a visual method for escaping competitive "red oceans" (bloody, crowded markets) and creating "blue oceans" (uncontested market space). The problem is that most teams draw the canvas wrong, choose the wrong factors, and end up with a diagram that confirms their existing strategy instead of challenging it. This guide shows you how to do it properly.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            What the strategy canvas is
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            The strategy canvas is a line chart where the X axis lists the key competing factors in an industry (the things companies invest in and customers evaluate), and the Y axis shows the relative level of offering across each factor. Each competitor gets a line — called a "value curve" — that connects their scores across all factors.
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            When you plot all major competitors on the same canvas, their value curves tend to converge. They invest in the same factors at the same levels because they are competing on the same terms. A blue ocean strategy means drawing a value curve that looks fundamentally different — high where others are low, absent where others invest heavily, and present on factors that do not exist yet.
          </p>
          <div className="bg-[#F0EFF5] border border-[#E2E1DE] rounded-lg p-8">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#4A6FA5] uppercase tracking-widest mb-4">Example: US wine industry (from the original Blue Ocean book)</p>
            <div className="space-y-3 text-sm text-[#6B7280]">
              <p><strong className="text-[#1B2A4A]">X axis factors:</strong> Price, marketing prestige, aging quality, vineyard prestige, wine complexity, wine range, above-the-line marketing, ease of drinking, ease of selection, fun and adventure</p>
              <p><strong className="text-[#1B2A4A]">Traditional competitors (Gallo, Mondavi):</strong> High on vineyard prestige, aging quality, wine complexity. Low on ease of drinking and fun.</p>
              <p><strong className="text-[#1B2A4A]">Yellow Tail (blue ocean entrant):</strong> Eliminated aging quality and vineyard prestige. Raised ease of drinking and fun. Created "easy to select" (one red, one white). The value curve crossed the incumbent curves — high where they were low, absent where they invested.</p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            The Eliminate-Reduce-Raise-Create (ERRC) grid
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            The ERRC grid is the operational tool behind the strategy canvas. It forces you to make four specific decisions about the factors on your canvas. Most teams can fill in "Raise" and "Create" easily (these are the fun ones). The strategic discipline is in "Eliminate" and "Reduce" — because blue oceans are not created by adding more. They are created by breaking the conventional trade-offs.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                label: 'Eliminate',
                color: '#C1440E',
                bg: '#FDF8F6',
                desc: 'Which factors that the industry has long competed on should be eliminated entirely? These are factors that customers no longer value (or never valued as much as the industry assumed). Eliminating them frees up cost and complexity.',
                example: 'Yellow Tail eliminated wine aging, vineyard prestige, and the entire fine-wine vocabulary from its value proposition.',
              },
              {
                label: 'Reduce',
                color: '#9BA8B4',
                bg: '#F0EFF5',
                desc: 'Which factors should be reduced well below the industry standard? These are areas where the industry over-delivers relative to what the target customer actually needs. Reducing them frees up cost without losing the customer.',
                example: 'Yellow Tail reduced wine complexity and wine range to just two options: a Chardonnay and a Shiraz.',
              },
              {
                label: 'Raise',
                color: '#4A6FA5',
                bg: '#F0EFF5',
                desc: 'Which factors should be raised well above the industry standard? These are areas where the industry under-delivers relative to what your target customer wants. Raising them creates differentiation on dimensions competitors have neglected.',
                example: 'Yellow Tail raised ease of drinking to make wine as approachable as beer or cocktails.',
              },
              {
                label: 'Create',
                color: '#1B2A4A',
                bg: '#FDF8F6',
                desc: 'Which factors should be created that the industry has never offered? These are entirely new sources of value that redefine the buyer experience. Created factors are the most powerful because competitors cannot respond without changing their entire strategy.',
                example: 'Yellow Tail created "fun and adventure" as a wine category factor — something no premium wine brand had attempted.',
              },
            ].map(q => (
              <div key={q.label} className="rounded-lg p-6 border border-[#E2E1DE]" style={{ backgroundColor: q.bg }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: q.color }} />
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest" style={{ color: q.color }}>{q.label}</p>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-3">{q.desc}</p>
                <p className="text-xs text-[#9BA8B4] leading-relaxed italic">{q.example}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Step-by-step: building your strategy canvas
          </h2>
          <div className="space-y-8">
            {[
              { n: '01', title: 'List 8-12 competing factors', body: 'Start by identifying the factors that the industry currently competes on. These are the things companies invest money in and the criteria customers use to choose between options. Interview customers and study competitor marketing to find them. Be specific — "quality" is too vague; "material durability" or "response time under 2 hours" is useful.' },
              { n: '02', title: 'Score each competitor on each factor', body: 'Use a simple 1-5 scale. The goal is not precision — it is relative positioning. Score based on public evidence: pricing pages, product features, customer reviews, marketing messages. Include yourself. If you cannot score a competitor on a factor, it is a signal that the factor may not be visible to customers either.' },
              { n: '03', title: 'Draw the value curves', body: 'Plot each competitor as a line connecting their scores across all factors. Use different colours for each competitor. The shape of the curve matters more than the individual scores. Look for convergence — factors where all competitors score similarly. Convergence means the industry has agreed on a standard that may not serve customers well.' },
              { n: '04', title: 'Identify convergence zones and gaps', body: 'Convergence zones are where competitors cluster at similar levels. These represent industry assumptions that may be ripe for elimination or reduction. Gaps are factors where scores are spread widely — these indicate that the market has not settled on a standard, which means there is room for a distinctive position.' },
              { n: '05', title: 'Apply the ERRC grid', body: 'For each factor, decide: eliminate, reduce, raise, or keep at industry standard. Then add 1-2 factors that should be created. The discipline is making hard trade-offs — a blue ocean strategy that raises everything and eliminates nothing is just a premium strategy, not a new market.' },
              { n: '06', title: 'Draw your new value curve', body: 'Plot your proposed value curve on the same canvas as the competitors. It should look visually different — crossing the competitor curves rather than running parallel. If it does not cross, you have not made enough trade-offs. Go back to the ERRC grid and be more aggressive.' },
              { n: '07', title: 'Test with the three characteristics', body: 'A good blue ocean strategy canvas has three characteristics. Focus: the value curve shows clear highs and lows, not a flat line. Divergence: your curve looks different from competitor curves. Compelling tagline: you can describe the new strategy in one sentence that customers would understand.' },
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
            Real-world strategy canvas examples
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            The Blue Ocean Strategy book provides several canonical examples. Here are three that illustrate different applications of the framework, along with what made their value curves distinctive.
          </p>
          <div className="space-y-6">
            {[
              {
                company: 'Cirque du Soleil',
                industry: 'Entertainment / circus',
                eliminated: 'Animal acts, star performers, aisle concessions, multiple show arenas',
                raised: 'Unique venue, artistic music and dance',
                created: 'A theme and storyline per show, refined watching environment, multiple productions',
                insight: 'By eliminating the most expensive elements of traditional circuses (animals, star performers) and creating theatrical production value, Cirque du Soleil could charge 5-10x the price of a traditional circus while spending far less on operations.',
              },
              {
                company: 'Southwest Airlines',
                industry: 'Airlines',
                eliminated: 'Hub connectivity, meals, seating choices, first class, lounges',
                raised: 'Frequency of departures, friendliness of service, speed of check-in',
                created: 'Point-to-point routes competing with car travel, not just other airlines',
                insight: 'Southwest redefined the competitor set. They were not competing with Delta and United — they were competing with Greyhound and personal cars. This changed which factors mattered and made the blue ocean visible.',
              },
              {
                company: 'Nintendo Wii',
                industry: 'Gaming consoles',
                eliminated: 'Cutting-edge graphics processing power, hard drive storage, DVD playback',
                raised: 'Fun for non-gamers, family accessibility, price accessibility',
                created: 'Motion-based controls, physical gameplay, family gaming as a living room activity',
                insight: 'While Sony and Microsoft competed on processing power and graphics (the traditional gaming factors), Nintendo eliminated those factors entirely and created a new one: physical, social gameplay that non-gamers could enjoy. The Wii outsold both competitors for three years.',
              },
            ].map((example, i) => (
              <div key={example.company} className="bg-white border border-[#E2E1DE] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-[family-name:var(--font-mono)] text-sm text-[#C1440E] tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1B2A4A]">{example.company}</h3>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#9BA8B4] uppercase tracking-widest">{example.industry}</span>
                </div>
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <div className="flex gap-2">
                    <span className="text-xs font-semibold text-[#C1440E] shrink-0 w-20">Eliminated:</span>
                    <span className="text-sm text-[#6B7280]">{example.eliminated}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs font-semibold text-[#4A6FA5] shrink-0 w-20">Raised:</span>
                    <span className="text-sm text-[#6B7280]">{example.raised}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs font-semibold text-[#1B2A4A] shrink-0 w-20">Created:</span>
                    <span className="text-sm text-[#6B7280]">{example.created}</span>
                  </div>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed border-t border-[#E2E1DE] pt-4">{example.insight}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Common strategy canvas mistakes
          </h2>
          <div className="space-y-5">
            {[
              {
                mistake: 'Choosing factors that favour your company',
                fix: 'The factors should represent what the industry competes on, not what you are good at. If your canvas makes you look uniquely excellent on every dimension, you have cherry-picked the factors. Start with factors from customer interviews and competitor marketing — not from your own product roadmap.',
              },
              {
                mistake: 'Not eliminating anything',
                fix: 'The hardest part of the ERRC grid is elimination. Most teams cannot bring themselves to completely drop factors that the industry considers important. But elimination is where cost savings and strategic clarity come from. If you have not eliminated at least two factors, you have not made a blue ocean choice.',
              },
              {
                mistake: 'Treating the canvas as a one-time exercise',
                fix: 'Blue oceans do not stay blue. As you succeed, competitors will copy your innovations and the value curves will converge again. Revisit the canvas annually and watch for the moment your curve starts looking like everyone else\'s.',
              },
              {
                mistake: 'Confusing "different" with "better"',
                fix: 'A blue ocean strategy is not about being better on existing factors — that is a red ocean move. It is about changing which factors matter. If your value curve is just higher than competitors on the same factors, you have built a premium product, not a blue ocean.',
              },
              {
                mistake: 'Skipping the non-customer analysis',
                fix: 'Blue oceans are found by understanding non-customers — the people who reject your industry entirely. Why do they not buy? What would need to change? Yellow Tail did not succeed by studying wine drinkers. They succeeded by studying beer and cocktail drinkers who found wine intimidating.',
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
                q: 'What is the difference between a strategy canvas and a competitive landscape map?',
                a: 'A strategy canvas plots competitors across multiple competing factors (a line chart). A competitive landscape map (like a 2x2 quadrant) plots competitors on exactly two dimensions. They complement each other: the quadrant map shows positioning; the strategy canvas shows the full factor-by-factor comparison. Use the quadrant to identify whitespace, and the strategy canvas to design the value curve that occupies it.',
              },
              {
                q: 'How many competing factors should a strategy canvas have?',
                a: '8 to 12 is the practical range. Fewer than 8 and you miss important dimensions. More than 12 and the canvas becomes cluttered and hard to read. The factors should be specific enough to be measurable but broad enough to be strategically meaningful.',
              },
              {
                q: 'Can you build a Blue Ocean Strategy Canvas for a startup that has not launched yet?',
                a: 'Yes, and it is often the best time to do it. Before launch, you have maximum flexibility to shape your value curve. Plot the incumbent value curves based on competitor research, then design your curve to be deliberately different. The ERRC grid becomes your product strategy — it tells you what to build, what to skip, and what to invent.',
              },
              {
                q: 'How is Blue Ocean Strategy different from disruption theory?',
                a: 'Disruption theory (Clayton Christensen) focuses on low-end disruption — entering a market with a simpler, cheaper product that incumbents ignore. Blue Ocean Strategy is broader — it includes low-end moves but also covers creating entirely new demand by redefining the value factors. A Blue Ocean strategy can be premium-priced (like Cirque du Soleil) whereas disruptive innovation typically starts cheap.',
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
            <Link href="/guides/five-forces-analysis-template" className="hover:text-[#1B2A4A] transition-colors">Five Forces</Link>
            <Link href="/guides/value-chain-analysis" className="hover:text-[#1B2A4A] transition-colors">Value Chain</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
