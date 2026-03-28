'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { MarketReport, OrgSection, PersonEntry, ClientBranding } from '@/types'

const ROLE_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  rm: { bg: '#4A7C59', text: '#FFFFFF', label: 'RM' },
  'ia-ic': { bg: '#8DB89E', text: '#1A1A1A', label: 'IA/IC' },
  other: { bg: '#E2E1DE', text: '#1A1A1A', label: 'Other' },
}

export default function ReportEditorPage() {
  const params = useParams()
  const router = useRouter()
  const reportId = params.id as string
  const [report, setReport] = useState<MarketReport | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [exporting, setExporting] = useState(false)
  const [exportingPptx, setExportingPptx] = useState(false)
  const [expandedOrgs, setExpandedOrgs] = useState<Set<string>>(new Set())
  const [logoErrors, setLogoErrors] = useState<Set<string>>(new Set())
  const [previewing, setPreviewing] = useState(false)
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const [branding, setBranding] = useState<ClientBranding | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/report/${reportId}`)
        if (res.ok) {
          const data = await res.json()
          setReport(data)
          setExpandedOrgs(new Set(data.organizations.map((o: OrgSection) => o.id)))
        }
      } catch { /* ignore */ } finally { setLoading(false) }
    }
    load()
    // Fetch branding for PDF export
    fetch('/api/branding').then(r => r.ok ? r.json() : null).then(data => {
      if (data?.company_name) {
        setBranding({
          name: data.company_name,
          phone: data.phone || undefined,
          email: data.email || undefined,
          accentColor: data.accent_color || '#0D7377',
          logoUrl: data.logo_url || undefined,
        })
      }
    }).catch(() => {})
  }, [reportId])

  const toggleOrg = (orgId: string) => {
    setExpandedOrgs(prev => {
      const next = new Set(prev)
      if (next.has(orgId)) next.delete(orgId)
      else next.add(orgId)
      return next
    })
  }

  const updateReport = useCallback((updater: (r: MarketReport) => MarketReport) => {
    setReport(prev => prev ? updater(prev) : prev)
  }, [])

  const updateOrg = useCallback((orgId: string, field: keyof OrgSection, value: string) => {
    updateReport(r => ({
      ...r,
      organizations: r.organizations.map(o =>
        o.id === orgId ? { ...o, [field]: value } : o
      ),
    }))
  }, [updateReport])

  const saveReport = async () => {
    if (!report) return
    setSaving(true)
    try {
      await fetch(`/api/report/${reportId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(report),
      })
    } catch { /* ignore */ } finally { setSaving(false) }
  }

  const handleExport = async () => {
    if (!report) return
    setExporting(true)
    try {
      await saveReport()
      const { generateReportPdf } = await import('@/lib/export/report-pdf-generator')
      const blob = await generateReportPdf(report, { branding: branding || undefined })
      downloadBlob(blob, `${report.title.replace(/[^a-zA-Z0-9]+/g, '-')}.pdf`)
    } catch (err) {
      console.error('PDF export failed:', err)
      alert('PDF export failed — check the console for details')
    } finally {
      setExporting(false)
    }
  }

  const handleExportPptx = () => {
    // PPTX is a paid feature — show upgrade modal
    setShowUpgradeModal(true)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-2 border-[#0D7377] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!report) {
    return (
      <div className="text-center py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold mb-2">Report not found</h2>
        <Button onClick={() => router.push('/app/upload')}>Upload new CSV</Button>
      </div>
    )
  }

  // ── PREVIEW MODE ──
  if (previewing) {
    return (
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1A1A1A]">
            Report Preview
          </h2>
          <div className="flex items-center gap-3">
            <Button variant="secondary" size="sm" onClick={() => setPreviewing(false)}>
              Back to editor
            </Button>
            <Button size="sm" onClick={handleExport} loading={exporting}>
              Export PDF
            </Button>
          </div>
        </div>

        {/* Cover page preview */}
        <div className="bg-[#FAFAF8] border border-[#E2E1DE] rounded-lg overflow-hidden mb-6 shadow-sm">
          <div className="bg-[#085053] px-8 py-10">
            <h1 className="text-white text-3xl font-bold">{report.title}</h1>
          </div>
          <div className="px-8 py-6">
            <p className="text-[#6B7280] text-sm mb-3">
              {report.organizations.length} Organizations &nbsp;|&nbsp; {report.organizations.reduce((s, o) => s + o.headcount, 0)} People
            </p>
            <div className="space-y-1">
              {report.organizations.map(org => (
                <p key={org.id} className="text-sm text-[#1A1A1A]">&bull; {org.name} ({org.headcount})</p>
              ))}
            </div>
            <div className="mt-6 inline-block bg-[#0D7377] text-white text-xs font-semibold px-4 py-2 rounded">
              Updated: {report.date}
            </div>
          </div>
        </div>

        {/* Per-org preview pages */}
        {report.organizations.map(org => (
          <div key={org.id} className="mb-8">
            {/* Summary page */}
            <div className="bg-[#FAFAF8] border border-[#E2E1DE] rounded-lg overflow-hidden mb-3 shadow-sm">
              <div className="bg-[#085053] px-6 py-4 flex items-center gap-4">
                <OrgLogo org={org} logoErrors={logoErrors} setLogoErrors={setLogoErrors} size="sm" />
                <h3 className="text-white text-xl font-bold">{org.name}</h3>
              </div>
              <div className="p-6">
                {org.teamAum && (
                  <div className="mb-4 inline-block border border-[#E2E1DE] rounded px-4 py-2">
                    <span className="text-xs text-[#6B7280] block">Team AuM</span>
                    <span className="text-lg font-bold text-[#1A1A1A]">{org.teamAum}</span>
                  </div>
                )}
                <div className="grid grid-cols-3 gap-6">
                  <SummaryColumn label="Hiring Activity" text={org.hiringActivity} />
                  <SummaryColumn label="Recent Departures" text={org.recentDepartures} />
                  <SummaryColumn label="General Comments" text={org.generalComments} />
                </div>
                {org.recentActivity && (
                  <div className="mt-5 pt-4 border-t border-[#0D7377]/20">
                    <h4 className="text-xs font-semibold text-[#0D7377] uppercase tracking-wide mb-1">Recent Activity</h4>
                    <p className="text-sm text-[#1A1A1A] whitespace-pre-line">{org.recentActivity}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Chart page */}
            <div className="bg-white border border-[#E2E1DE] rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[#085053] px-6 py-4 flex items-center gap-4">
                <OrgLogo org={org} logoErrors={logoErrors} setLogoErrors={setLogoErrors} size="sm" />
                <h3 className="text-white text-xl font-bold">{org.name}</h3>
              </div>
              <div className="p-4">
                {org.locations.map(loc => (
                  <div key={loc.name} className="mb-4 last:mb-0">
                    <div className="bg-[#085053] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-t">
                      {loc.name}
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1.5 p-2 bg-[#FAFAF8] rounded-b border border-t-0 border-[#E2E1DE]">
                      {loc.people.map(person => (
                        <PersonCard key={person.id} person={person} />
                      ))}
                    </div>
                  </div>
                ))}
                <Legend />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // ── EDITOR MODE ──
  const manualHours = Math.max(4, Math.round(report.organizations.length * 2.5))

  return (
    <div className="max-w-[1000px] mx-auto">
      {/* Time saved banner */}
      <div className="mb-6 bg-[#059669]/5 border border-[#059669]/20 rounded-lg px-5 py-4 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#059669]/10 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-[#1A1A1A]">
            This report covers {report.organizations.length} organizations and {report.organizations.reduce((s, o) => s + o.headcount, 0)} people across {new Set(report.organizations.flatMap(o => o.locations.map(l => l.name))).size} locations.
          </p>
          <p className="text-xs text-[#6B7280] mt-0.5">
            Estimated manual effort: <span className="font-semibold text-[#DC2626]">{manualHours}+ hours</span> of analyst time.
            CompBrief processed it in seconds.
          </p>
        </div>
      </div>

      {/* Report header */}
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div className="flex-1 mr-6">
            <input
              type="text"
              value={report.title}
              onChange={e => updateReport(r => ({ ...r, title: e.target.value }))}
              className="w-full font-[family-name:var(--font-heading)] text-3xl font-semibold text-[#1A1A1A] bg-transparent border-b-2 border-transparent hover:border-[#E2E1DE] focus:border-[#0D7377] focus:outline-none pb-1 transition-colors"
              placeholder="Report title..."
            />
            <div className="flex items-center gap-4 mt-2">
              <input
                type="text"
                value={report.date}
                onChange={e => updateReport(r => ({ ...r, date: e.target.value }))}
                className="text-sm text-[#6B7280] bg-transparent border-b border-transparent hover:border-[#E2E1DE] focus:border-[#0D7377] focus:outline-none transition-colors"
                placeholder="e.g. Feb 2026"
              />
              <span className="text-sm text-[#6B7280]">
                {report.organizations.length} organizations
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" size="sm" onClick={saveReport} loading={saving}>
              Save
            </Button>
            <Button variant="secondary" size="sm" onClick={() => setPreviewing(true)}>
              Preview
            </Button>
            <Button variant="secondary" size="sm" onClick={handleExport} loading={exporting}>
              Export PDF
            </Button>
            <Button size="sm" onClick={handleExportPptx} loading={exportingPptx}>
              Export PPTX
              <span className="ml-1 text-[10px] bg-white/20 px-1.5 py-0.5 rounded">PRO</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Organization list */}
      <div className="space-y-4">
        {report.organizations.map(org => (
          <Card key={org.id} padding="none" className="overflow-hidden">
            {/* Org header — clickable accordion */}
            <button
              onClick={() => toggleOrg(org.id)}
              className="w-full flex items-center gap-4 p-5 text-left hover:bg-[#FAFAF8] transition-colors"
            >
              <OrgLogo org={org} logoErrors={logoErrors} setLogoErrors={setLogoErrors} />

              <div className="flex-1 min-w-0">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1A1A1A] truncate">
                  {org.name}
                </h3>
                <p className="text-sm text-[#6B7280]">
                  {org.headcount} people across {org.locations.length} location{org.locations.length !== 1 ? 's' : ''}
                </p>
              </div>

              <svg
                className={`w-5 h-5 text-[#6B7280] transition-transform ${expandedOrgs.has(org.id) ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Expanded content */}
            {expandedOrgs.has(org.id) && (
              <div className="border-t border-[#E2E1DE]">
                {/* Team AuM */}
                <div className="p-5 border-b border-[#E2E1DE]/50">
                  <label className="block text-xs font-medium text-[#6B7280] uppercase tracking-wide mb-1.5">
                    Team AuM
                  </label>
                  <input
                    type="text"
                    value={org.teamAum || ''}
                    onChange={e => updateOrg(org.id, 'teamAum', e.target.value)}
                    placeholder="e.g. $2.5bn"
                    className="w-48 text-sm border border-[#E2E1DE] rounded-md px-3 py-1.5 bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#0D7377]"
                  />
                </div>

                {/* Location grid preview */}
                <div className="p-5 border-b border-[#E2E1DE]/50">
                  <h4 className="text-xs font-medium text-[#6B7280] uppercase tracking-wide mb-3">
                    Personnel by Location
                  </h4>
                  {org.locations.map(loc => (
                    <div key={loc.name} className="mb-4 last:mb-0">
                      <div className="bg-[#0D7377] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-t-md">
                        {loc.name}
                      </div>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1.5 p-2 bg-[#FAFAF8] rounded-b-md border border-t-0 border-[#E2E1DE]">
                        {loc.people.map(person => (
                          <PersonCard key={person.id} person={person} />
                        ))}
                      </div>
                    </div>
                  ))}
                  <Legend />
                </div>

                {/* Editable text fields */}
                <div className="p-5 space-y-4">
                  <TextAreaField
                    label="Hiring Activity"
                    value={org.hiringActivity}
                    onChange={v => updateOrg(org.id, 'hiringActivity', v)}
                    placeholder="Notable hires, open roles, team growth..."
                  />
                  <TextAreaField
                    label="Recent Departures"
                    value={org.recentDepartures}
                    onChange={v => updateOrg(org.id, 'recentDepartures', v)}
                    placeholder="Key departures, where they went..."
                  />
                  <TextAreaField
                    label="General Comments"
                    value={org.generalComments}
                    onChange={v => updateOrg(org.id, 'generalComments', v)}
                    placeholder="Market position, strategy shifts, team dynamics..."
                  />
                  <TextAreaField
                    label="Recent Activity"
                    value={org.recentActivity}
                    onChange={v => updateOrg(org.id, 'recentActivity', v)}
                    placeholder="Recent news, deals, regulatory changes..."
                  />
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Bottom export bar */}
      <div className="mt-8 flex items-center justify-between py-6 border-t border-[#E2E1DE]">
        <p className="text-sm text-[#6B7280]">
          {report.organizations.length} organizations, {report.organizations.reduce((sum, o) => sum + o.headcount, 0)} people total
        </p>
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={saveReport} loading={saving}>
            Save draft
          </Button>
          <Button variant="secondary" onClick={() => setPreviewing(true)}>
            Preview report
          </Button>
          <Button variant="secondary" onClick={handleExport} loading={exporting}>
            Export PDF
          </Button>
          <Button onClick={handleExportPptx} loading={exportingPptx}>
            Export PPTX
            <span className="ml-1 text-[10px] bg-white/20 px-1.5 py-0.5 rounded">PRO</span>
          </Button>
        </div>
      </div>

      {/* Upgrade modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-8">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1A1A1A] mb-2">
              Upgrade to Professional
            </h3>
            <p className="text-sm text-[#6B7280] mb-6">
              Editable PowerPoint exports are available on the Professional plan.
              Get fully customizable PPTX files you can rebrand and present as your own.
            </p>

            <div className="bg-[#FAFAF8] border border-[#E2E1DE] rounded-md p-5 mb-6">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[#1A1A1A]">£499</span>
                <span className="text-sm text-[#6B7280]">/month</span>
              </div>
              <ul className="space-y-2 text-sm text-[#6B7280]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#059669] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Editable PPTX exports — fully rebrandable
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#059669] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  White-label client branding
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#059669] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Unlimited reports — produce 10x more in the same time
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#059669] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Less than 2 hours of analyst time — pays for itself on day one
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="flex-1 text-center border border-[#E2E1DE] text-[#6B7280] px-4 py-2.5 rounded-md text-sm font-medium hover:bg-[#F0EFEC] transition-colors"
              >
                Maybe later
              </button>
              <a
                href="mailto:hello@landscapebrief.com?subject=CompBrief Professional"
                className="flex-1 text-center bg-[#0D7377] text-white px-4 py-2.5 rounded-md text-sm font-medium hover:bg-[#095B5E] transition-colors"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Shared components ──

function OrgLogo({ org, logoErrors, setLogoErrors, size = 'md' }: {
  org: OrgSection
  logoErrors: Set<string>
  setLogoErrors: React.Dispatch<React.SetStateAction<Set<string>>>
  size?: 'sm' | 'md'
}) {
  const dim = size === 'sm' ? 'w-8 h-8' : 'w-12 h-12'
  const textSize = size === 'sm' ? 'text-sm' : 'text-lg'

  return (
    <div className={`${dim} rounded-lg overflow-hidden flex-shrink-0 bg-[#E2E1DE] flex items-center justify-center`}>
      {org.logoUrl && !logoErrors.has(org.id) ? (
        <img
          src={org.logoUrl}
          alt={org.name}
          className="w-full h-full object-contain"
          onError={() => setLogoErrors(prev => new Set(prev).add(org.id))}
        />
      ) : (
        <span className={`${textSize} font-bold text-[#6B7280]`}>
          {org.name.split(/\s+/).filter(w => !/^(the|of|and|&)$/i.test(w)).slice(0, 2).map(w => w[0]?.toUpperCase()).join('')}
        </span>
      )}
    </div>
  )
}

function SummaryColumn({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="border-t-2 border-[#0D7377] pt-2 mb-1">
        <h4 className="text-xs font-semibold text-[#0D7377] uppercase tracking-wide">{label}</h4>
      </div>
      <p className="text-sm text-[#1A1A1A] whitespace-pre-line">
        {text || <span className="text-[#6B7280] italic">No data provided</span>}
      </p>
    </div>
  )
}

function Legend() {
  return (
    <div className="flex items-center gap-4 mt-3">
      {Object.entries(ROLE_COLORS).map(([key, val]) => (
        <div key={key} className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: val.bg }} />
          <span className="text-xs text-[#6B7280]">{val.label}</span>
        </div>
      ))}
    </div>
  )
}

function PersonCard({ person }: { person: PersonEntry }) {
  const colors = ROLE_COLORS[person.roleType] || ROLE_COLORS.other
  const nameParts = person.fullName.split(/\s+/)
  const displayName = nameParts.length > 1
    ? `${nameParts[0]} ${nameParts.slice(1).join(' ').toUpperCase()}`
    : person.fullName

  return (
    <div
      className="rounded px-2 py-1.5 text-[10px] leading-tight"
      style={{
        backgroundColor: person.departed ? '#FEF2F2' : colors.bg,
        color: person.departed ? '#DC2626' : colors.text,
      }}
    >
      <div className={`font-semibold truncate ${person.departed ? 'line-through' : ''}`}>
        {displayName}
      </div>
      <div className="truncate opacity-80">{person.jobTitle}</div>
      {person.level && <div className="truncate opacity-70">{person.level}</div>}
      {person.startDate && <div className="truncate opacity-60">{person.startDate}</div>}
      {person.departed && person.departedNote && (
        <div className="text-[#DC2626] font-medium mt-0.5">{person.departedNote}</div>
      )}
    </div>
  )
}

function TextAreaField({ label, value, onChange, placeholder }: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder: string
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-[#6B7280] uppercase tracking-wide mb-1.5">
        {label}
      </label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        className="w-full text-sm border border-[#E2E1DE] rounded-md px-3 py-2 bg-white text-[#1A1A1A] placeholder:text-[#6B7280]/50 focus:outline-none focus:ring-2 focus:ring-[#0D7377] resize-y"
      />
    </div>
  )
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
