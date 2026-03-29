'use client'

import { useState } from 'react'
import { useAuth } from '@/components/auth/auth-provider'

export default function BillingSettingsPage() {
  const { tier, profile } = useAuth()
  const [loading, setLoading] = useState(false)
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null)

  const openPortal = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/billing-portal', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
    } finally {
      setLoading(false)
    }
  }

  const startCheckout = async (plan: 'pro' | 'agency') => {
    setCheckoutLoading(plan)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
    } finally {
      setCheckoutLoading(null)
    }
  }

  const plans = [
    {
      key: 'pro' as const,
      name: 'Pro',
      price: '£29/month',
      features: ['Unlimited competitors', 'Landscapes saved permanently', 'PDF export', 'Executive summary brief'],
    },
    {
      key: 'agency' as const,
      name: 'Agency',
      price: '£79/month',
      features: ['Everything in Pro', 'Up to 5 team members', 'White-label PDF export', 'Client sharing links'],
    },
  ]

  return (
    <div>
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1A1A1A] mb-1">
        Billing
      </h2>
      <p className="text-sm text-[#6B7280] mb-8">
        Manage your subscription and payment method.
      </p>

      {/* Current plan */}
      <div className="bg-[#FAFAF8] border border-[#E2E1DE] rounded-lg p-6 max-w-[500px] mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-medium text-[#1A1A1A]">
              {tier === 'pro' ? 'Pro' : tier === 'trial' ? 'Free Trial' : 'Free'}
            </p>
            <p className="text-xs text-[#6B7280]">
              {tier === 'pro' ? 'Active subscription' : tier === 'trial' ? '7-day trial active' : 'Upgrade to unlock full features'}
            </p>
          </div>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            tier === 'pro' ? 'bg-[#059669]/10 text-[#059669]' :
            tier === 'trial' ? 'bg-[#C1440E]/10 text-[#C1440E]' :
            'bg-[#D97706]/10 text-[#D97706]'
          }`}>
            {tier === 'pro' ? 'Active' : tier === 'trial' ? 'Trial' : 'Free'}
          </span>
        </div>

        {profile?.stripe_customer_id ? (
          <button
            onClick={openPortal}
            disabled={loading}
            className="text-sm font-medium text-[#4A6FA5] hover:underline disabled:opacity-50"
          >
            {loading ? 'Opening...' : 'Manage subscription →'}
          </button>
        ) : null}
      </div>

      {/* Upgrade options — only show if not already on paid plan */}
      {tier !== 'pro' && (
        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1B2A4A] mb-4">
            Upgrade your plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[640px]">
            {plans.map(plan => (
              <div key={plan.key} className="border border-[#E2E1DE] rounded-lg p-6 bg-white">
                <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#9BA8B4] mb-2">
                  {plan.name}
                </p>
                <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-4">
                  {plan.price}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {plan.features.map(f => (
                    <li key={f} className="text-xs text-[#6B7280] flex items-start gap-1.5">
                      <span className="text-[#4A6FA5] mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => startCheckout(plan.key)}
                  disabled={checkoutLoading === plan.key}
                  className="w-full bg-[#1B2A4A] text-white text-sm font-medium rounded px-4 py-2.5 hover:bg-[#0F1A2E] transition-colors disabled:opacity-50"
                >
                  {checkoutLoading === plan.key ? 'Redirecting...' : `Upgrade to ${plan.name}`}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
