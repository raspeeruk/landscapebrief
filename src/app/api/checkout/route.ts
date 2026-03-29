import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const PRICE_IDS: Record<string, string | undefined> = {
  pro: process.env.STRIPE_PRICE_ID_PRO,
  agency: process.env.STRIPE_PRICE_ID_AGENCY,
}

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const { plan = 'pro' } = await req.json()
  const origin = req.headers.get('origin') || 'https://landscapebrief.com'

  const priceId = PRICE_IDS[plan]
  if (!priceId) {
    return NextResponse.json({ error: `Unknown plan: ${plan}` }, { status: 400 })
  }

  // Get authenticated user to attach userId to metadata
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    mode: 'subscription',
    success_url: `${origin}/app/dashboard?checkout=success`,
    cancel_url: `${origin}/app/settings/billing`,
    metadata: {
      ...(user?.id ? { userId: user.id } : {}),
      plan,
    },
    ...(user?.email ? { customer_email: user.email } : {}),
  })

  return NextResponse.json({ url: session.url })
}
