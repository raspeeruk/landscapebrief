import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Competitor Pricing Analysis: How to Map the Market and Position Your Price',
  description: 'A complete competitor pricing analysis guide — where to find competitor pricing, what to document, pricing model comparisons, three frameworks for setting your price, and how to use LandscapeBrief\'s quadrant chart for price vs value positioning.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should startups price lower than competitors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not by default. Low pricing signals lower quality and attracts price-sensitive customers who churn as soon as a cheaper option appears. The more useful question is: what is the outcome worth to your target customer, and what price reflects that value? Early-stage companies often undercharge because they lack confidence, not because the market demands it. A better approach: price at market rate, compete on fit and service quality, and raise prices as you build evidence of outcomes.",
      },
    },
    {
      '@type': 'Question',
      name: 'How often should you adjust pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Review pricing annually as a baseline, with a trigger-based review when: a major competitor changes their pricing, you receive a significant number of pricing objections in sales calls (signal you're too expensive for the segment), or you have zero pricing objections (signal you may be leaving money on the table). For SaaS, a good benchmark: if fewer than 20% of prospects say the price is too high, you're probably underpriced.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the biggest pricing mistake?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Setting price by cost-plus calculation without understanding competitor reference points and customer willingness to pay. Cost-plus tells you your floor, not your ceiling. The biggest mistake is anchoring on your costs and missing the value premium your specific customer segment would pay. The second biggest mistake is uniform pricing across all customer segments — different segments have different willingness to pay, and packaging your product correctly for each can double revenue without changing a line of code.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you compete with a freemium competitor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Don't try to out-free a freemium product. Freemium works when the free tier builds a user base that upgrades at scale — it requires significant capital and low marginal cost per free user. Instead: compete on the buyer, not the user. If the freemium product targets end-users, sell to the budget holder (manager, department head) who cares about outcomes, compliance, and support — things the freemium tier doesn't provide. Position your paid product against the total cost of the freemium product including setup time, admin overhead, and missing features.",
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
        Add a Price axis to your competitive quadrant chart
      </p>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
        LandscapeBrief lets you map competitors on any two axes — including Price vs. Value, or Price vs. Feature Depth. Upload your competitor list, define your axes, and see exactly where you sit in the pricing landscape relative to every alternative your buyers will consider.
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
        See where your price sits in the market.
      </h2>
      <p className="text-white/50 text-sm mb-8 max-w-[400px] mx-auto">
        LandscapeBrief maps your competitive pricing landscape in under 3 minutes. Free to start.
      </p>
      <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-[#C1440E] text-white px-7 py-3.5 rounded font-medium hover:bg-[#A33A0C] transition-colors">
        Map Your Competitive Landscape Free →
      </Link>
    </div>
  )
}

export default function CompetitorPricingAnalysis() {
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
            Guide · Pricing Strategy
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[#1B2A4A] leading-tight mb-6">
            Competitor Pricing Analysis: How to Map the Market and Position Your Price
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Pricing is the most important and least researched dimension of competitive strategy. Most companies set prices by instinct or by cost-plus, then wonder why they're leaving money on the table or losing deals on price. A proper competitor pricing analysis shows you where the market is anchored, where the white space is, and how to position your price to win your target customer — not just any customer.
          </p>
        </div>

        <div className="h-px bg-[#E2E1DE] mb-12" />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Why pricing is the most underresearched competitive dimension
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Features get compared obsessively. Roadmaps get analysed. But pricing — the variable that most directly determines revenue, customer quality, and market positioning — is typically set from gut feel and adjusted only when sales complains.
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Three things make pricing the most important competitive variable:
          </p>
          <div className="space-y-4 mb-6">
            {[
              { n: '01', point: 'Price signals value', detail: 'In markets where quality is hard to assess before purchase, price is a proxy for quality. Pricing significantly below the market leader doesn\'t make you attractive — it makes buyers wonder what\'s wrong with your product.' },
              { n: '02', point: 'Price determines customer quality', detail: 'Low prices attract price-sensitive buyers who will leave for a cheaper option and demand the most support. The right price filters for customers who buy on value, stay longer, and expand revenue.' },
              { n: '03', point: 'Price is hardest to change', detail: 'You can ship a new feature in a sprint. Changing your pricing model affects every existing customer, your sales team\'s compensation, your financial model, and your brand positioning simultaneously. Getting it right early is exponentially easier than fixing it at scale.' },
            ].map(item => (
              <div key={item.n} className="flex gap-5">
                <span className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] tracking-wider shrink-0 pt-1">{item.n}</span>
                <div>
                  <p className="font-semibold text-[#1B2A4A] text-sm mb-1">{item.point}</p>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Where to find competitor pricing
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Pricing data requires more work than feature data because many B2B competitors deliberately hide prices to force sales conversations. Use all of these sources before concluding a competitor has no public pricing.
          </p>
          <div className="space-y-5">
            {[
              {
                source: 'Public pricing pages',
                detail: 'The obvious first stop. Check not just the current page but the Wayback Machine (web.archive.org) to see historical pricing. Price changes often reveal strategic shifts — a move from per-seat to usage-based, or a shift upmarket with a price increase.',
              },
              {
                source: 'G2 and Capterra reviews',
                detail: 'Review platforms often contain pricing mentions in user reviews ("We pay £X per month for the Business tier"). Filter for reviews that mention pricing. The data is noisy and anecdotal, but it provides reference ranges that public pages don\'t show.',
              },
              {
                source: '"How much does [X] cost" forums and communities',
                detail: 'Search Reddit, Quora, LinkedIn comments, and niche Slack communities for competitor pricing questions. Buyers often share actual invoice numbers in these threads — providing real-world data that\'s more accurate than any list price.',
              },
              {
                source: 'LinkedIn and sales posts',
                detail: 'Competitor SDRs and AEs sometimes mention pricing bands in LinkedIn posts. Competitor outreach emails (sign up with a personal email) often contain promotional pricing that reveals the real discount structure.',
              },
              {
                source: 'Trial account + upgrade prompts',
                detail: 'Sign up for any competitor free trial. The upgrade prompts inside the product show the full pricing structure, feature gating, and tier architecture — usually in more detail than the public pricing page.',
              },
              {
                source: 'Your own sales calls',
                detail: 'Ask every prospect who has evaluated competitors what the competitor quoted them. Win/loss interviews are the richest source of real-world pricing data, including enterprise custom pricing that never appears publicly.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <span className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] tracking-wider shrink-0 pt-1">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="font-semibold text-[#1B2A4A] text-sm mb-1">{item.source}</p>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            What to document for each competitor
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            A consistent documentation template allows comparison across competitors. Use the same structure for every player in your analysis.
          </p>
          <div className="bg-[#F0EFF5] rounded-lg p-6 border border-[#E2E1DE]">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#4A6FA5] uppercase tracking-widest mb-4">Pricing documentation template</p>
            <div className="space-y-3">
              {[
                { field: 'Pricing model', desc: 'Per-seat, flat-rate, usage-based, freemium, value-based, or hybrid' },
                { field: 'Billing cycle', desc: 'Monthly, annual, multi-year — and what discount is offered for annual commitment (typically 15–20%)' },
                { field: 'Tier names and price points', desc: 'Every tier with the published monthly price (or range if custom)' },
                { field: 'Tier inclusions', desc: 'What is included in each tier — features, seats, usage limits, support level' },
                { field: 'Enterprise / custom tier', desc: 'What triggers enterprise pricing, what\'s included (SLA, dedicated support, custom contracts), and pricing range if known' },
                { field: 'Free tier or trial', desc: 'Duration, feature limitations, credit card required or not' },
                { field: 'Add-ons and expansion revenue', desc: 'What customers pay more for beyond the base tier' },
                { field: 'Real-world price (from reviews/interviews)', desc: 'Actual prices customers report paying vs. list prices — often significantly different for B2B' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-[#C1440E] mt-1.5 shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                  </span>
                  <div>
                    <span className="font-semibold text-[#1B2A4A]">{item.field}: </span>
                    <span className="text-[#6B7280]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBox />

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            Pricing models compared
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            The pricing model shapes buyer psychology, revenue predictability, and growth mechanics more than the price point itself. Understanding which model each competitor uses — and why — reveals their strategic assumptions.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1B2A4A]">
                  <th className="text-left py-3 pr-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">Model</th>
                  <th className="text-left py-3 pr-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">Best for</th>
                  <th className="text-left py-3 pr-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">Pros</th>
                  <th className="text-left py-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">Cons</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E1DE]">
                {[
                  { model: 'Per-seat', best: 'Collaboration tools, enterprise software', pros: 'Predictable revenue, scales with customer growth', cons: 'Incentivises fewer logins, hard to charge for value' },
                  { model: 'Flat-rate', best: 'Simple tools, SMB, price-sensitive buyers', pros: 'Easy to understand, reduces friction to buy', cons: 'Leaves money on the table for power users, no expansion revenue without tier upgrade' },
                  { model: 'Usage-based', best: 'Developer tools, API products, AI products', pros: 'Aligns cost with value, lowers barrier to entry', cons: 'Unpredictable revenue, customer anxiety about bills, complex to forecast' },
                  { model: 'Freemium', best: 'PLG products with low marginal cost, high organic distribution', pros: 'Removes friction, builds brand in market', cons: 'Expensive to support free users, conversion rate rarely exceeds 5%' },
                  { model: 'Value-based', best: 'High-ACV enterprise, products with measurable ROI', pros: 'Captures maximum value, aligns with customer outcomes', cons: 'Hard to justify without proof, requires sophisticated sales motion' },
                ].map(row => (
                  <tr key={row.model}>
                    <td className="py-4 pr-4 font-semibold text-[#1B2A4A] align-top text-sm">{row.model}</td>
                    <td className="py-4 pr-4 text-[#6B7280] leading-relaxed align-top text-sm">{row.best}</td>
                    <td className="py-4 pr-4 text-[#6B7280] leading-relaxed align-top text-sm">{row.pros}</td>
                    <td className="py-4 text-[#6B7280] leading-relaxed align-top text-sm">{row.cons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-6">
            3 frameworks for setting your price using competitive data
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            These three frameworks are not mutually exclusive — the best pricing decisions use all three as inputs and triangulate to a final number.
          </p>
          <div className="space-y-8">
            {[
              {
                n: '01',
                title: 'Cost-plus (your floor)',
                body: 'Calculate your fully loaded cost per customer (infrastructure, support, customer success, sales and marketing amortised). This gives you the minimum price required for unit economics to work. Cost-plus tells you nothing about what the market will pay — it tells you the floor below which you should never price. Most products should price 3–10x above cost-plus. If your ceiling is anywhere near your cost-plus number, the business model has a structural problem.',
              },
              {
                n: '02',
                title: 'Competitive anchoring (your reference point)',
                body: 'Map every competitor on a price spectrum from lowest to highest. Then ask: relative to the competitors your target customer would actually consider, where do you want to sit? Premium positioning (top 25% of market price) is defensible if you have demonstrably better outcomes, support, or integrations. Mid-market positioning (40th–60th percentile) requires competing on value-for-money. Below-market positioning is only sustainable with a structural cost advantage. Choose your position relative to the specific competitors your ICP evaluates, not the entire market.',
              },
              {
                n: '03',
                title: 'Value-based (your ceiling)',
                body: 'Calculate the economic value your product delivers to your target customer. For a SaaS product that saves a marketing team 8 hours per week: 8 hours × £40 average hourly cost × 50 weeks = £16,000/year in time saved. Your ceiling is some fraction of that value — typically 10–30% for software. Value-based pricing works best when you have clear ROI data from existing customers. Without that data, triangulate from competitive anchoring and customer discovery interviews.',
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
            Using a quadrant chart to map price vs value
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            A competitive positioning quadrant with Price on one axis and Perceived Value (or Feature Depth) on the other gives you a visual picture of the pricing landscape that a spreadsheet can't replicate. Four quadrants emerge:
          </p>
          <div className="grid grid-cols-1 gap-4 mb-8">
            {[
              { quadrant: 'High price, high value', label: 'Premium zone', desc: 'This is where you want to be if you have a clear quality differentiation. Sustainable long-term if backed by switching costs or brand.', color: '#1B2A4A' },
              { quadrant: 'Low price, high value', label: 'Disruption zone', desc: 'A competitor here is a threat — they\'re offering superior value at a price point that undercuts established players. Watch these carefully.', color: '#C1440E' },
              { quadrant: 'High price, low value', label: 'Vulnerable zone', desc: 'Competitors here are charging a premium without the differentiation to justify it. They\'re prime targets for disruption and prone to customer churn.', color: '#9BA8B4' },
              { quadrant: 'Low price, low value', label: 'Commodity zone', desc: 'Race-to-the-bottom territory. Players here compete purely on cost. Margins are thin and the business is fragile.', color: '#4A6FA5' },
            ].map(item => (
              <div key={item.quadrant} className="border border-[#E2E1DE] rounded-lg p-5 bg-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4]">{item.quadrant}</p>
                </div>
                <p className="font-semibold text-[#1B2A4A] text-sm mb-2">{item.label}</p>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#6B7280] leading-relaxed">
            LandscapeBrief lets you choose Price as one of your quadrant axes, positioning every competitor on a price vs. value map automatically. The output shows you the pricing white space and helps you decide where to position your price relative to the field.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: 'Should startups price lower than competitors?',
                a: "Not by default. Low pricing signals lower quality and attracts price-sensitive customers who churn as soon as a cheaper option appears. The more useful question is: what is the outcome worth to your target customer, and what price reflects that value? Early-stage companies often undercharge because they lack confidence, not because the market demands it. A better approach: price at market rate, compete on fit and service quality, and raise prices as you build evidence of outcomes.",
              },
              {
                q: 'How often should you adjust pricing?',
                a: "Review pricing annually as a baseline, with a trigger-based review when: a major competitor changes their pricing, you receive a significant number of pricing objections in sales calls (signal you're too expensive for the segment), or you have zero pricing objections (signal you may be leaving money on the table). For SaaS, a good benchmark: if fewer than 20% of prospects say the price is too high, you're probably underpriced.",
              },
              {
                q: "What's the biggest pricing mistake?",
                a: "Setting price by cost-plus calculation without understanding competitor reference points and customer willingness to pay. Cost-plus tells you your floor, not your ceiling. The biggest mistake is anchoring on your costs and missing the value premium your specific customer segment would pay. The second biggest mistake is uniform pricing across all customer segments — different segments have different willingness to pay, and packaging your product correctly for each can double revenue without changing a line of code.",
              },
              {
                q: 'How do you compete with a freemium competitor?',
                a: "Don't try to out-free a freemium product. Freemium works when the free tier builds a user base that upgrades at scale — it requires significant capital and low marginal cost per free user. Instead: compete on the buyer, not the user. If the freemium product targets end-users, sell to the budget holder (manager, department head) who cares about outcomes, compliance, and support — things the freemium tier doesn't provide. Position your paid product against the total cost of the freemium product including setup time, admin overhead, and missing features.",
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
            <Link href="/guides/swot-analysis-guide" className="hover:text-[#1B2A4A] transition-colors">SWOT Analysis</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
