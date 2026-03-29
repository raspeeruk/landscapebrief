import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Go-to-Market Strategy: How to Launch Without Wasting 6 Months',
  description: 'A complete go-to-market strategy guide covering GTM components, PLG vs SLG, ICP definition, common GTM mistakes, and a practical MVP playbook for getting your first 50 customers.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What's the difference between GTM and marketing?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Marketing is one component of a go-to-market strategy. GTM covers the full system: target segment, value proposition, pricing, distribution channel, and sales motion. Marketing — ads, content, brand — handles demand generation within that system. You can have excellent marketing and still fail GTM if the pricing model is wrong or the channel doesn't reach your buyer.",
      },
    },
    {
      '@type': 'Question',
      name: 'When should you change your GTM strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Change your GTM when conversion rates stall despite adequate pipeline, when your ICP consistently fails to renew or expand, when a new competitor is winning deals on a different axis (price, channel, or motion), or when product-market fit shifts to a different segment than you originally targeted. Don't change GTM at the first sign of difficulty — noise looks like signal in the early months.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long should GTM planning take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Two weeks maximum for a first version. The planning document is a hypothesis, not a business plan. Most founders spend too long planning and too little time running discovery calls. A GTM plan that survives first contact with 10 real customers is worth more than a perfect plan that's never been tested. Write v1 fast, test it faster.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you know if your GTM is working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Three signals: (1) Ramp time — how long does it take a new salesperson to hit quota? Falling ramp time means GTM is crystallising. (2) Win rate against specific competitors — rising win rate on your target ICP means positioning is landing. (3) Net Revenue Retention — if customers expand without being pushed, product-market fit and channel alignment are both working. If NRR is below 100%, fix retention before accelerating GTM.",
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
        Map your competitive positioning before you finalise your GTM
      </p>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
        LandscapeBrief turns your competitor list into a quadrant chart that shows exactly where you sit relative to every alternative your buyers will consider. Know your white space before you write a word of copy.
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
        Know your position before you launch.
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

export default function GoToMarketStrategy() {
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
            Guide · Go-to-Market
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            Go-to-Market Strategy: How to Launch Without Wasting 6 Months
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            A go-to-market strategy isn't a marketing plan. It's the full system for reaching your first customers, converting them, and repeating. Most failed launches aren't failures of product — they're failures of GTM. This guide gives you the components, the sequencing, and the common mistakes that eat runway.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            What GTM actually means
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Go-to-market is the complete plan for how your product reaches the right customer, at the right price, through the right channel, with the right message. It's not just launch marketing — it covers the entire commercial system: who you sell to, how you sell, what you charge, and how the sale happens.
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            The reason GTM gets confused with marketing is that marketing is the most visible part. But a startup can have exceptional brand work and still lose to a competitor with a cleaner pricing model and a better-aligned sales motion. GTM is the system. Marketing is one component.
          </p>
          <div className="bg-[#F0EFF5] border border-[#E2E1DE] rounded-lg p-6">
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#4A6FA5] mb-3">The simplest GTM definition</p>
            <p className="text-sm text-[#1B2A4A] leading-relaxed font-medium">
              GTM = who buys + why they buy + what they pay + how you reach them + how you close them.
              If you can answer all five in one sentence, your GTM is clear enough to execute.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            The 5 GTM components
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            These five elements build on each other in sequence. Get the first wrong and every subsequent decision is misaligned. Most GTM failures trace back to skipping the first two.
          </p>
          <div className="space-y-8">
            {[
              {
                n: '01',
                title: 'Target segment',
                body: 'Not "SMBs" or "enterprise". A specific, reachable group of buyers with a shared problem and shared buying behaviour. The tighter the segment, the sharper every other GTM decision becomes. A segment should be narrow enough that you could name 100 companies that fit it without searching.',
              },
              {
                n: '02',
                title: 'Value proposition',
                body: 'The specific outcome your target segment gets that they cannot get elsewhere, or cannot get as efficiently. Not features — outcomes. "Reduces time to close deals by 40% for SDR teams at Series A SaaS companies" is a value proposition. "AI-powered CRM with automations" is a feature list.',
              },
              {
                n: '03',
                title: 'Pricing model',
                body: 'Price is not just a number — it\'s a signal about who the product is for and how you expect to grow. Per-seat pricing signals enterprise. Usage-based signals developer-led. Flat-rate signals simplicity. Your pricing model must align with how your segment makes buying decisions and who holds the budget.',
              },
              {
                n: '04',
                title: 'Distribution channel',
                body: 'The mechanism through which your product reaches the buyer: direct sales, self-serve product, resellers, marketplaces, partnerships, content SEO. The channel must match where your target segment spends attention. Choosing the wrong channel is a far more common failure mode than building the wrong product.',
              },
              {
                n: '05',
                title: 'Sales motion',
                body: 'How the actual transaction happens: self-serve (credit card, no human), sales-assisted (demo required but AE closes), enterprise (multi-stakeholder, procurement, legal). The sales motion must match the deal size and buyer\'s risk tolerance. Selling a £200/month SaaS like an enterprise product destroys unit economics.',
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
            PLG vs SLG vs channel: which model fits which stage
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            The three dominant GTM motions aren't equally suited to every product or stage. Picking the wrong one costs 12–18 months.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1B2A4A]">
                  <th className="text-left py-3 pr-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">Motion</th>
                  <th className="text-left py-3 pr-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">Best for</th>
                  <th className="text-left py-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">Watch out for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E1DE]">
                {[
                  { motion: 'PLG (Product-led)', best: 'Low ACV, developer or end-user buyer, product has immediate aha moment, can be self-served', watch: 'Requires significant product investment in onboarding; no safety net when sign-ups stall' },
                  { motion: 'SLG (Sales-led)', best: 'Higher ACV (£10K+), multi-stakeholder buying, product requires configuration or integration', watch: 'Expensive to scale; sales team quality is a single point of failure early on' },
                  { motion: 'Channel/partnerships', best: 'Product is a complement to an established platform; reseller has existing customer trust', watch: 'You lose control of the sale; partner incentive misalignment kills momentum quietly' },
                ].map(row => (
                  <tr key={row.motion}>
                    <td className="py-4 pr-6 font-semibold text-[#1B2A4A] align-top">{row.motion}</td>
                    <td className="py-4 pr-6 text-[#6B7280] leading-relaxed align-top">{row.best}</td>
                    <td className="py-4 text-[#6B7280] leading-relaxed align-top">{row.watch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#6B7280] leading-relaxed">
            Most early-stage B2B companies default to SLG because founders know how to sell. That's fine for getting the first 20 customers. The mistake is building an SLG org permanently when the product and ACV should ultimately support PLG. Hybrid motions (PLG with sales assist) work well once you have signal on which segments expand.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            ICP definition: the 3 things to nail before you write a word of copy
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            An Ideal Customer Profile isn't a persona. A persona is a fictional character. An ICP is a set of firmographic and behavioural criteria that predict whether a company will buy, use, and expand your product. Three variables account for most of the predictive power:
          </p>
          <div className="space-y-6">
            {[
              {
                label: '01 — Job title',
                content: 'Specifically who inside the organisation initiates, evaluates, and signs the purchase. These are often three different people. The initiator (who feels the pain), the evaluator (who does the research), and the signer (who controls budget). Your ICP should specify all three, not just the end user.',
              },
              {
                label: '02 — Company size',
                content: 'Not a revenue band — a specific headcount range that correlates with buying behaviour. A 50-person company and a 200-person company in the same industry have entirely different procurement processes, budget cycles, and decision-making speed. Choose the range where your product creates the most value and your sales motion is most efficient.',
              },
              {
                label: '03 — Trigger event',
                content: 'The specific event that creates urgency to buy now rather than later. Common triggers: funding round (new budget), leadership change (new priorities), compliance deadline, recent competitor loss, team headcount crossing a threshold. Trigger events predict timing. Reach a prospect before a trigger and you wait 18 months. Reach them after and you\'re solving a live problem.',
              },
            ].map(item => (
              <div key={item.label} className="bg-[#F0EFF5] rounded-lg p-6 border border-[#E2E1DE]">
                <p className="font-[family-name:var(--font-mono)] text-xs text-[#4A6FA5] uppercase tracking-widest mb-3">{item.label}</p>
                <p className="text-sm text-[#1B2A4A] leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        <CtaBox />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            GTM mistakes that waste the most runway
          </h2>
          <div className="space-y-5">
            {[
              {
                mistake: 'Targeting everyone',
                fix: '"We can sell to any company with a sales team" is not an ICP. Broad targeting produces low conversion rates, unclear positioning, and a product roadmap pulled in fifteen directions. Narrow relentlessly until it feels uncomfortably small, then go narrower.',
              },
              {
                mistake: 'Skipping discovery calls',
                fix: 'The single most common failure mode in early GTM is founders who write positioning copy before running 20+ discovery calls. Discovery calls tell you the language customers use to describe the problem — language you must mirror exactly in your messaging.',
              },
              {
                mistake: 'Copying competitor GTM without their advantages',
                fix: 'If a well-funded competitor uses a PLG motion, it\'s because they have a brand that drives organic sign-ups and an onboarding team to support free users. Copying the motion without those assets produces a failed self-serve product with zero acquisition.',
              },
              {
                mistake: 'Treating GTM as a one-time plan',
                fix: 'GTM is not a launch document — it\'s a hypothesis that gets tested and updated. Block time monthly to review conversion rates, win/loss reasons, and ICP accuracy. Most successful companies change their primary GTM motion at least twice in the first three years.',
              },
              {
                mistake: 'Hiring salespeople before you have a repeatable motion',
                fix: 'A salesperson can execute a motion. They cannot invent one. Founders must close the first 10–20 customers personally before hiring. If the founder can\'t close, a salesperson certainly won\'t.',
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
            Competitive positioning's role in GTM
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Competitive positioning is not a slide in your pitch deck — it's the strategic input that determines your value proposition and channel. Before you write positioning copy, you need to know exactly where every alternative your buyer considers sits on the competitive landscape.
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            A competitive landscape map lets you answer three questions that directly shape GTM:
          </p>
          <div className="space-y-4 mb-6">
            {[
              'Which axis (price, feature depth, segment focus, delivery model) has no strong incumbent sitting where your ICP needs a solution?',
              'Which competitors are targeting your ICP with a different value proposition — and why is yours better for this specific segment?',
              'Which competitor is most likely to respond to your launch, and what will their response look like?',
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] shrink-0 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-sm text-[#6B7280] leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#6B7280] leading-relaxed">
            This is exactly what LandscapeBrief's quadrant chart is built for. Upload your competitor list, and the AI positions each one on the axes that matter most for your market, highlights the white space, and writes the strategic brief. You know your position before you write a word of copy.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            MVP GTM playbook: from 0 to 50 customers
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            This is the sequencing that works consistently for early-stage B2B products. Each phase has a specific exit criterion before you move to the next.
          </p>
          <div className="space-y-6">
            {[
              {
                phase: 'Phase 1 — 10 customers from outbound',
                exit: 'Exit: 10 paying customers with a 60%+ conversion rate from demo to close',
                steps: [
                  'Build a list of 100 companies that match your ICP exactly',
                  'Write a one-sentence cold outreach message focused on the trigger event',
                  'Run 30 discovery calls before pitching anything',
                  'Close 10 customers personally — do not delegate this',
                ],
              },
              {
                phase: 'Phase 2 — Product iteration from customer data',
                exit: 'Exit: 80%+ of customers using the core feature weekly, NPS > 30',
                steps: [
                  'Interview all 10 customers monthly — what\'s the one thing they\'d hate to lose?',
                  'Identify the 20% of features that drive 80% of value',
                  'Cut or defer everything else — focus the product on the aha moment',
                  'Document the exact words customers use to describe the outcome you deliver',
                ],
              },
              {
                phase: 'Phase 3 — 50 customers from refined outbound',
                exit: 'Exit: CAC payback period under 12 months, expansion revenue appearing',
                steps: [
                  'Rewrite all positioning copy using customer language from Phase 2',
                  'Identify which ICP sub-segment converted and retained best',
                  'Double down on that sub-segment exclusively — resist expanding the ICP',
                  'Measure win rate against each specific competitor by name',
                ],
              },
              {
                phase: 'Phase 4 — Channel testing',
                exit: 'Exit: One channel with a CAC below the benchmark for your ACV',
                steps: [
                  'Test 2–3 channels simultaneously with a fixed budget per channel',
                  'Measure cost per qualified lead, not cost per click or impression',
                  'Kill underperforming channels at 6 weeks — no extensions',
                  'Double budget into the winning channel, then double again',
                ],
              },
            ].map((phase, i) => (
              <div key={i} className="border border-[#E2E1DE] rounded-lg overflow-hidden">
                <div className="bg-[#1B2A4A] px-6 py-4">
                  <p className="font-[family-name:var(--font-heading)] text-base font-semibold text-white">{phase.phase}</p>
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] mt-1">{phase.exit}</p>
                </div>
                <div className="px-6 py-5 bg-white">
                  <ul className="space-y-2">
                    {phase.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#6B7280]">
                        <span className="text-[#C1440E] mt-1.5 shrink-0">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                        </span>
                        {step}
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
                q: "What's the difference between GTM and marketing?",
                a: "Marketing is one component of a go-to-market strategy. GTM covers the full system: target segment, value proposition, pricing, distribution channel, and sales motion. Marketing — ads, content, brand — handles demand generation within that system. You can have excellent marketing and still fail GTM if the pricing model is wrong or the channel doesn't reach your buyer.",
              },
              {
                q: 'When should you change your GTM strategy?',
                a: "Change your GTM when conversion rates stall despite adequate pipeline, when your ICP consistently fails to renew or expand, when a new competitor is winning deals on a different axis (price, channel, or motion), or when product-market fit shifts to a different segment than you originally targeted. Don't change GTM at the first sign of difficulty — noise looks like signal in the early months.",
              },
              {
                q: 'How long should GTM planning take?',
                a: 'Two weeks maximum for a first version. The planning document is a hypothesis, not a business plan. Most founders spend too long planning and too little time running discovery calls. A GTM plan that survives first contact with 10 real customers is worth more than a perfect plan that\'s never been tested. Write v1 fast, test it faster.',
              },
              {
                q: 'How do you know if your GTM is working?',
                a: 'Three signals: (1) Ramp time — how long does it take a new salesperson to hit quota? Falling ramp time means GTM is crystallising. (2) Win rate against specific competitors — rising win rate on your target ICP means positioning is landing. (3) Net Revenue Retention — if customers expand without being pushed, product-market fit and channel alignment are both working. If NRR is below 100%, fix retention before accelerating GTM.',
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
