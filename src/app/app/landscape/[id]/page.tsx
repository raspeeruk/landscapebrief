'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CompetitiveLandscape } from '@/components/chart/competitive-landscape'
import type { LandscapeDTO } from '@/types/competitive'

export default function LandscapePage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const [landscape, setLandscape] = useState<LandscapeDTO | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'map' | 'summary' | 'whitespace'>('map')

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/landscape/${id}`)
        if (res.ok) {
          const data = await res.json()
          setLandscape(data)
        }
      } catch {
        // ignore
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-2 border-[#C1440E] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!landscape) {
    return (
      <div className="text-center py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A] mb-2">
          Landscape not found
        </h2>
        <p className="text-[#9BA8B4] mb-6">This session may have expired.</p>
        <Button onClick={() => router.push('/app/upload')}>
          Upload new CSV
        </Button>
      </div>
    )
  }

  const competitors = Object.values(landscape.competitors)
  const clusterCount = landscape.clusters.length

  return (
    <div className="max-w-[1100px] mx-auto">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[#1B2A4A] mb-2">
            {landscape.title}
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            <Badge variant="teal">{competitors.length} competitors</Badge>
            <Badge variant="default">{clusterCount} clusters</Badge>
            <Badge variant="default">{landscape.whitespaceOpportunities.length} whitespace gaps</Badge>
          </div>
        </div>
        <Button onClick={() => router.push('/app/upload')}>
          New landscape
        </Button>
      </div>

      {/* Tabs */}
      <div className="mb-6 border-b border-[#E2E1DE]">
        <div className="flex gap-6">
          {[
            { id: 'map', label: '2×2 Map' },
            { id: 'summary', label: 'Executive Summary' },
            { id: 'whitespace', label: 'Whitespace' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors -mb-px ${
                activeTab === tab.id
                  ? 'border-[#C1440E] text-[#1B2A4A]'
                  : 'border-transparent text-[#9BA8B4] hover:text-[#1B2A4A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      {activeTab === 'map' && (
        <div>
          <CompetitiveLandscape landscape={landscape} width={960} height={640} />

          {/* Clusters */}
          {landscape.clusters.length > 0 && (
            <div className="mt-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1B2A4A] mb-4">
                Clusters
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {landscape.clusters.map(cluster => (
                  <div
                    key={cluster.id}
                    className="bg-[#F0EFF5] border border-[#E2E1DE] rounded-lg p-4"
                  >
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A] mb-2">
                      {cluster.name}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {cluster.competitorIds.map(compId => {
                        const comp = landscape.competitors[compId]
                        return comp ? (
                          <span
                            key={compId}
                            className="text-xs font-[family-name:var(--font-mono)] bg-white border border-[#E2E1DE] px-2 py-0.5 rounded text-[#1B2A4A]"
                          >
                            {comp.name}
                          </span>
                        ) : null
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'summary' && (
        <div className="max-w-[720px]">
          <div className="bg-[#F0EFF5] border border-[#E2E1DE] rounded-lg p-8 mb-8">
            <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#9BA8B4] uppercase tracking-widest mb-3">
              Executive Summary
            </p>
            <p className="font-[family-name:var(--font-heading)] text-lg text-[#1B2A4A] leading-relaxed">
              {landscape.executiveSummary}
            </p>
          </div>

          {/* Axis explanation */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-[#E2E1DE] rounded-lg p-5">
              <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#9BA8B4] uppercase tracking-widest mb-2">X Axis</p>
              <p className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1B2A4A]">{landscape.axisXLabel}</p>
            </div>
            <div className="bg-white border border-[#E2E1DE] rounded-lg p-5">
              <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#9BA8B4] uppercase tracking-widest mb-2">Y Axis</p>
              <p className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1B2A4A]">{landscape.axisYLabel}</p>
            </div>
          </div>

          {/* Competitor table */}
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1B2A4A] mb-4">
            All Competitors
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#E2E1DE] rounded-lg overflow-hidden">
              <thead className="bg-[#1B2A4A] text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-[family-name:var(--font-mono)] text-xs font-medium">Company</th>
                  <th className="text-left px-4 py-3 font-[family-name:var(--font-mono)] text-xs font-medium">Tier</th>
                  <th className="text-left px-4 py-3 font-[family-name:var(--font-mono)] text-xs font-medium">Cluster</th>
                  <th className="text-center px-4 py-3 font-[family-name:var(--font-mono)] text-xs font-medium">X</th>
                  <th className="text-center px-4 py-3 font-[family-name:var(--font-mono)] text-xs font-medium">Y</th>
                  <th className="text-left px-4 py-3 font-[family-name:var(--font-mono)] text-xs font-medium">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((comp, i) => (
                  <tr key={comp.id} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 font-medium text-[#1B2A4A]">{comp.name}</td>
                    <td className="px-4 py-3">
                      <span className="font-[family-name:var(--font-mono)] text-xs capitalize text-[#6B7280]">{comp.tier}</span>
                    </td>
                    <td className="px-4 py-3 text-xs text-[#6B7280]">{comp.cluster}</td>
                    <td className="px-4 py-3 text-center font-[family-name:var(--font-mono)] text-xs text-[#6B7280]">{comp.axisX}</td>
                    <td className="px-4 py-3 text-center font-[family-name:var(--font-mono)] text-xs text-[#6B7280]">{comp.axisY}</td>
                    <td className="px-4 py-3">
                      <span className={`font-[family-name:var(--font-mono)] text-xs ${
                        comp.confidence === 'high' ? 'text-green-700' :
                        comp.confidence === 'medium' ? 'text-amber-700' : 'text-red-700'
                      }`}>{comp.confidence}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'whitespace' && (
        <div className="max-w-[720px]">
          <p className="text-[#9BA8B4] mb-6">
            Strategic gaps identified in the competitive landscape — areas with little or no competition.
          </p>
          <div className="space-y-4">
            {landscape.whitespaceOpportunities.map((opp, i) => (
              <div key={i} className="bg-[#FAFAF8] border border-[#E2E1DE] rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[#9BA8B4] mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[#1B2A4A] leading-relaxed">{opp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
