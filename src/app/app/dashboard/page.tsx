import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { getUserReports, getUserSessions } from '@/lib/session-store'
import { getUserTier, getTrialDaysLeft } from '@/lib/auth/tier'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/auth/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const tier = getUserTier(profile)
  const trialDays = getTrialDaysLeft(profile)

  const [reports, sessions] = await Promise.all([
    getUserReports(user.id),
    getUserSessions(user.id),
  ])

  return (
    <div className="max-w-[1000px] mx-auto">
      {/* Trial / Upgrade banner */}
      {tier === 'trial' && (
        <div className="mb-6 bg-[#C1440E]/5 border border-[#C1440E]/20 rounded-lg px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-[#1B2A4A]">
              Free plan — landscapes expire after 2 hours
            </p>
            <p className="text-xs text-[#9BA8B4]">
              Upgrade to Pro to save landscapes permanently + unlock PDF export.
            </p>
          </div>
          <a
            href="/api/checkout"
            className="text-sm font-medium text-[#C1440E] hover:underline"
          >
            Upgrade to Pro
          </a>
        </div>
      )}

      {tier === 'trial_expired' && (
        <div className="mb-6 bg-[#854D0E]/5 border border-[#854D0E]/20 rounded-lg px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-[#1B2A4A]">
              Upgrade to save your landscapes
            </p>
            <p className="text-xs text-[#9BA8B4]">
              Free landscapes expire after 2 hours. Pro keeps them forever.
            </p>
          </div>
          <a
            href="/api/checkout"
            className="bg-[#C1440E] text-white text-sm font-medium rounded px-4 py-2 hover:bg-[#A33A0C] transition-colors"
          >
            Upgrade now
          </a>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[#1B2A4A]">
            My Landscapes
          </h1>
          <p className="text-sm text-[#9BA8B4] mt-1">
            {reports.length + sessions.length === 0
              ? 'Upload a CSV to create your first competitive landscape.'
              : `${reports.length + sessions.length} saved`
            }
          </p>
        </div>
        <Link
          href="/app/upload"
          className="bg-[#C1440E] text-white text-sm font-medium rounded px-5 py-2.5 hover:bg-[#A33A0C] transition-colors"
        >
          New landscape
        </Link>
      </div>

      {/* Reports (legacy) */}
      {reports.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xs font-[family-name:var(--font-mono)] font-medium text-[#9BA8B4] uppercase tracking-widest mb-3">
            Saved Landscapes
          </h2>
          <div className="space-y-2">
            {reports.map(report => (
              <Link
                key={report.id}
                href={`/app/report/${report.id}`}
                className="block bg-white border border-[#E2E1DE] rounded-lg px-5 py-4 hover:border-[#C1440E]/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A]">
                      {report.title}
                    </h3>
                    <p className="text-xs text-[#9BA8B4] mt-0.5">
                      {report.organizations.length} organization{report.organizations.length !== 1 ? 's' : ''} &middot; {report.date}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-[#9BA8B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Sessions */}
      {sessions.length > 0 && (
        <section>
          <h2 className="text-xs font-[family-name:var(--font-mono)] font-medium text-[#9BA8B4] uppercase tracking-widest mb-3">
            Recent Sessions
          </h2>
          <div className="space-y-2">
            {sessions.map(session => (
              <Link
                key={session.id}
                href={`/app/landscape/${session.id}`}
                className="block bg-white border border-[#E2E1DE] rounded-lg px-5 py-4 hover:border-[#C1440E]/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A]">
                      {session.fileName}
                    </h3>
                    <p className="text-xs text-[#9BA8B4] mt-0.5">
                      {session.status}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-[#9BA8B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Empty state */}
      {reports.length === 0 && sessions.length === 0 && (
        <div className="text-center py-16 bg-white border border-[#E2E1DE] rounded-lg">
          <div className="w-16 h-16 bg-[#C1440E]/5 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[#C1440E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3zm9 0v18M3 12h18" />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1B2A4A] mb-1">
            No landscapes yet
          </h3>
          <p className="text-sm text-[#9BA8B4] mb-5">
            Upload a CSV to generate your first competitive landscape.
          </p>
          <Link
            href="/app/upload"
            className="inline-block bg-[#C1440E] text-white text-sm font-medium rounded px-6 py-2.5 hover:bg-[#A33A0C] transition-colors"
          >
            Upload competitor CSV
          </Link>
        </div>
      )}
    </div>
  )
}
