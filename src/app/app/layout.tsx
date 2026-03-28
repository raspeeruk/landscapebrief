'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { StepIndicator } from '@/components/ui/step-indicator'
import { AuthProvider, useAuth } from '@/components/auth/auth-provider'
import type { Step } from '@/components/ui/step-indicator'

const ORG_CHART_STEPS: Step[] = [
  { id: 'upload', label: 'Upload' },
  { id: 'review', label: 'Review' },
  { id: 'chart', label: 'Chart' },
  { id: 'export', label: 'Export' },
]

const LANDSCAPE_STEPS: Step[] = [
  { id: 'upload', label: 'Upload' },
  { id: 'landscape', label: 'Map' },
]

const REPORT_STEPS: Step[] = [
  { id: 'upload', label: 'Upload' },
  { id: 'report', label: 'Edit Report' },
  { id: 'export', label: 'Export' },
]

function getCurrentStep(pathname: string): string {
  if (pathname.includes('/upload')) return 'upload'
  if (pathname.includes('/landscape')) return 'landscape'
  if (pathname.includes('/report')) return 'report'
  if (pathname.includes('/review')) return 'review'
  if (pathname.includes('/chart')) return 'chart'
  if (pathname.includes('/export')) return 'export'
  return 'upload'
}

function getCompletedSteps(current: string, steps: Step[]): string[] {
  const order = steps.map(s => s.id)
  const idx = order.indexOf(current)
  return order.slice(0, idx)
}

function AppNav() {
  const pathname = usePathname()
  const { user, tier, trialDaysLeft, signOut } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  const isDashboard = pathname === '/app/dashboard'
  const isSettings = pathname.startsWith('/app/settings')
  const isReportMode = pathname.includes('/report')
  const isLandscapeMode = pathname.includes('/landscape')
  const showSteps = !isDashboard && !isSettings

  const steps = isLandscapeMode ? LANDSCAPE_STEPS : isReportMode ? REPORT_STEPS : ORG_CHART_STEPS
  const currentStep = getCurrentStep(pathname)
  const completedSteps = getCompletedSteps(currentStep, steps)

  return (
    <nav className="bg-[#FAFAF8] border-b border-[#E2E1DE]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/app/dashboard" className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1B2A4A] flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#C1440E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3zm9 0v18M3 12h18" />
            </svg>
            CompBrief
          </Link>
          {user && (
            <Link href="/app/dashboard" className="text-sm text-[#9BA8B4] hover:text-[#1B2A4A] transition-colors">
              My Landscapes
            </Link>
          )}
        </div>

        {showSteps && (
          <StepIndicator
            steps={steps}
            currentStep={currentStep}
            completedSteps={completedSteps}
          />
        )}

        <div className="flex items-center gap-4">
          {/* Trial badge */}
          {tier === 'trial' && trialDaysLeft > 0 && (
            <span className="text-xs font-[family-name:var(--font-mono)] font-medium bg-[#C1440E]/10 text-[#C1440E] px-2.5 py-1 rounded">
              {trialDaysLeft}d trial
            </span>
          )}
          {tier === 'trial_expired' && (
            <span className="text-xs font-[family-name:var(--font-mono)] font-medium bg-[#854D0E]/10 text-[#854D0E] px-2.5 py-1 rounded">
              Trial ended
            </span>
          )}
          {tier === 'pro' && (
            <span className="text-xs font-[family-name:var(--font-mono)] font-medium bg-[#1B2A4A]/10 text-[#1B2A4A] px-2.5 py-1 rounded">
              Pro
            </span>
          )}

          {/* User menu */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-8 h-8 rounded-full bg-[#1B2A4A] text-white text-xs font-semibold flex items-center justify-center hover:bg-[#0F1A2E] transition-colors"
              >
                {user.email?.charAt(0).toUpperCase() || '?'}
              </button>
              {menuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
                  <div className="absolute right-0 top-10 z-50 bg-white border border-[#E2E1DE] rounded-lg shadow-lg py-1.5 w-52">
                    <div className="px-3 py-2 border-b border-[#E2E1DE]">
                      <p className="text-xs text-[#6B7280] truncate">{user.email}</p>
                    </div>
                    <Link
                      href="/app/settings"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-[#1A1A1A] hover:bg-[#F0EFEC] transition-colors"
                    >
                      Account
                    </Link>
                    <Link
                      href="/app/settings/branding"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-[#1A1A1A] hover:bg-[#F0EFEC] transition-colors"
                    >
                      Branding
                    </Link>
                    <Link
                      href="/app/settings/billing"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-[#1A1A1A] hover:bg-[#F0EFEC] transition-colors"
                    >
                      Billing
                    </Link>
                    <div className="border-t border-[#E2E1DE] mt-1.5 pt-1.5">
                      <button
                        onClick={() => { setMenuOpen(false); signOut() }}
                        className="block w-full text-left px-3 py-2 text-sm text-[#DC2626] hover:bg-[#F0EFEC] transition-colors"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <Link href="/auth/login" className="text-sm text-[#C1440E] font-medium hover:underline">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-[#FAFAF8]">
        <AppNav />
        <main className="max-w-[1200px] mx-auto px-6 py-10">
          {children}
        </main>
      </div>
    </AuthProvider>
  )
}
