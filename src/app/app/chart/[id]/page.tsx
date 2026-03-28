'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ConfidenceDot } from '@/components/ui/confidence-dot'
import { OrgChart } from '@/components/chart'
import type { Session, TemplateId } from '@/types'
import { TEMPLATES } from '@/types'

export default function ChartPage() {
  const params = useParams()
  const router = useRouter()
  const sessionId = params.id as string
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [templateId, setTemplateId] = useState<TemplateId>('editorial-classic')
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/session/${sessionId}`)
        if (res.ok) {
          const data = await res.json()
          setSession(data)
        }
      } catch {
        // ignore
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [sessionId])

  const handleNodeClick = useCallback((personId: string) => {
    setSelectedPerson(personId)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-2 border-[#0D7377] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!session?.organization) {
    return (
      <div className="text-center py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold mb-2">Session not found</h2>
        <Button onClick={() => router.push('/app/upload')}>Upload new CSV</Button>
      </div>
    )
  }

  const org = session.organization
  const person = selectedPerson ? org.people[selectedPerson] : null

  return (
    <div className="flex flex-col h-[calc(100vh-120px)]">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-semibold">
            Organization Chart
          </h1>
          <Badge variant="teal">
            {org.inferenceStats.totalPeople} people
          </Badge>
          <Badge variant={org.completenessScore > 80 ? 'success' : org.completenessScore > 50 ? 'warning' : 'danger'}>
            {org.completenessScore}% complete
          </Badge>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={templateId}
            onChange={e => setTemplateId(e.target.value as TemplateId)}
            className="text-sm border border-[#E2E1DE] rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#0D7377]"
          >
            {Object.values(TEMPLATES).map(t => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
          <Button variant="secondary" onClick={() => router.push(`/app/review/${sessionId}`)}>
            Back to review
          </Button>
          <Button onClick={() => router.push(`/app/export/${sessionId}`)}>
            Export
          </Button>
        </div>
      </div>

      {/* Chart + detail panel */}
      <div className="flex flex-1 gap-4 min-h-0">
        <div className="flex-1 bg-[#FAFAF8] border border-[#E2E1DE] rounded-[6px] overflow-hidden">
          <OrgChart
            organization={org}
            templateId={templateId}
            onNodeClick={handleNodeClick}
          />
        </div>

        {/* Detail panel */}
        {person && (
          <Card className="w-72 overflow-y-auto flex-shrink-0" padding="lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                {person.name}
              </h3>
              <button
                onClick={() => setSelectedPerson(null)}
                className="text-[#6B7280] hover:text-[#1A1A1A] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-[#6B7280] mb-0.5">Title</p>
                <p className="font-medium">{person.normalizedTitle || person.rawTitle}</p>
                {person.normalizedTitle !== person.rawTitle && person.rawTitle && (
                  <p className="text-xs text-[#6B7280] font-[family-name:var(--font-mono)]">Raw: {person.rawTitle}</p>
                )}
              </div>

              <div>
                <p className="text-[#6B7280] mb-0.5">Seniority</p>
                <p className="font-medium">{person.seniorityLevel} <span className="text-[#6B7280] font-[family-name:var(--font-mono)]">({person.seniorityScore})</span></p>
              </div>

              {person.department && (
                <div>
                  <p className="text-[#6B7280] mb-0.5">Department</p>
                  <p className="font-medium">{person.department}</p>
                </div>
              )}

              {person.reportsTo && org.people[person.reportsTo] && (
                <div>
                  <p className="text-[#6B7280] mb-0.5">Reports to</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedPerson(person.reportsTo!)}
                      className="font-medium text-[#0D7377] hover:underline"
                    >
                      {org.people[person.reportsTo].name}
                    </button>
                    <ConfidenceDot
                      confidence={person.reportsToConfidence}
                      reasoning={`Source: ${person.reportsToSource}`}
                    />
                  </div>
                </div>
              )}

              {person.directReports.length > 0 && (
                <div>
                  <p className="text-[#6B7280] mb-1">Direct reports ({person.directReports.length})</p>
                  <div className="space-y-1">
                    {person.directReports.map(id => {
                      const report = org.people[id]
                      return report ? (
                        <button
                          key={id}
                          onClick={() => setSelectedPerson(id)}
                          className="block text-left text-[#0D7377] hover:underline text-sm"
                        >
                          {report.name}
                        </button>
                      ) : null
                    })}
                  </div>
                </div>
              )}

              {person.flags.length > 0 && (
                <div>
                  <p className="text-[#6B7280] mb-1">Flags</p>
                  <div className="flex flex-wrap gap-1">
                    {person.flags.map(f => (
                      <Badge key={f} variant="warning">{f.replace(/-/g, ' ')}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {person.email && (
                <div>
                  <p className="text-[#6B7280] mb-0.5">Email</p>
                  <p className="font-[family-name:var(--font-mono)] text-xs">{person.email}</p>
                </div>
              )}

              {person.location && (
                <div>
                  <p className="text-[#6B7280] mb-0.5">Location</p>
                  <p>{person.location}</p>
                </div>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
