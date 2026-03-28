'use client'

import { useEffect, useRef, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { OrgChart } from '@/components/chart'
import { captureChartAsImage, generatePdf, generatePptx } from '@/lib/export'
import type { Session, TemplateId } from '@/types'
import { TEMPLATES } from '@/types'

export default function ExportPage() {
  const params = useParams()
  const router = useRouter()
  const sessionId = params.id as string
  const chartRef = useRef<HTMLDivElement>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>('editorial-classic')
  const [clientName, setClientName] = useState('')
  const [includeConfidence, setIncludeConfidence] = useState(true)
  const [exportingPdf, setExportingPdf] = useState(false)
  const [exportingPptx, setExportingPptx] = useState(false)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/session/${sessionId}`)
        if (res.ok) setSession(await res.json())
      } catch { /* ignore */ } finally { setLoading(false) }
    }
    load()
  }, [sessionId])

  const captureChart = async () => {
    const el = chartRef.current
    if (!el) throw new Error('Chart not rendered')
    const template = TEMPLATES[selectedTemplate]
    // Wait a tick for React Flow to settle after template change
    await new Promise(r => setTimeout(r, 300))
    return captureChartAsImage(el, template.colors.background)
  }

  const handleExportPDF = async () => {
    if (!session?.organization) return
    setExportingPdf(true)
    try {
      const chartImage = await captureChart()
      const blob = await generatePdf({
        organization: session.organization,
        template: TEMPLATES[selectedTemplate],
        chartImageDataUrl: chartImage,
        clientName,
        includeConfidence,
      })
      downloadBlob(blob, `${clientName || 'org-chart'}-report.pdf`)
    } catch (err) {
      console.error('PDF export failed:', err)
      alert('PDF export failed — check the console for details')
    } finally {
      setExportingPdf(false)
    }
  }

  const handleExportPPTX = async () => {
    if (!session?.organization) return
    setExportingPptx(true)
    try {
      const chartImage = await captureChart()
      const blob = await generatePptx({
        organization: session.organization,
        template: TEMPLATES[selectedTemplate],
        chartImageDataUrl: chartImage,
        clientName,
        includeConfidence,
      })
      downloadBlob(blob, `${clientName || 'org-chart'}-report.pptx`)
    } catch (err) {
      console.error('PPTX export failed:', err)
      alert('PowerPoint export failed — check the console for details')
    } finally {
      setExportingPptx(false)
    }
  }

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

  const template = TEMPLATES[selectedTemplate]

  return (
    <div className="max-w-[900px] mx-auto">
      <div className="flex items-start justify-between mb-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-[#1A1A1A]">
              Export your chart
            </h1>
          </div>
          <p className="text-[#6B7280]">
            Choose a template and export as PDF or PowerPoint.
          </p>
        </div>
        <Button variant="secondary" onClick={() => router.push(`/app/chart/${sessionId}`)}>
          Back to chart
        </Button>
      </div>

      {/* Chart preview */}
      <Card padding="lg" className="mb-6">
        <CardHeader>
          <CardTitle>Preview</CardTitle>
        </CardHeader>
        <div
          className="mt-4 rounded-md overflow-hidden border"
          style={{
            height: 400,
            borderColor: template.colors.border,
            background: template.colors.background,
          }}
        >
          <OrgChart
            ref={chartRef}
            organization={session.organization}
            templateId={selectedTemplate}
          />
        </div>
      </Card>

      {/* Template selector */}
      <Card padding="lg" className="mb-6">
        <CardHeader>
          <CardTitle>Choose a template</CardTitle>
        </CardHeader>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {Object.values(TEMPLATES).map(t => (
            <button
              key={t.id}
              onClick={() => setSelectedTemplate(t.id)}
              className={`p-4 rounded-[6px] border-2 transition-all text-left ${
                selectedTemplate === t.id
                  ? 'border-[#0D7377] shadow-md'
                  : 'border-[#E2E1DE] hover:border-[#0D7377]/50'
              }`}
            >
              <div
                className="w-full h-20 rounded mb-3"
                style={{
                  background: t.colors.background,
                  border: `1px solid ${t.colors.border}`,
                }}
              >
                <div className="p-2 space-y-1">
                  <div className="h-2 rounded" style={{ background: t.colors.nodeBackground, width: '80%', border: `1px solid ${t.colors.nodeBorder}` }} />
                  <div className="flex gap-1 pl-4">
                    <div className="h-2 rounded" style={{ background: t.colors.nodeBackground, width: '35%', border: `1px solid ${t.colors.nodeBorder}` }} />
                    <div className="h-2 rounded" style={{ background: t.colors.nodeBackground, width: '35%', border: `1px solid ${t.colors.nodeBorder}` }} />
                  </div>
                </div>
              </div>
              <p className="font-medium text-sm">{t.name}</p>
              <p className="text-xs text-[#6B7280]">{t.description}</p>
            </button>
          ))}
        </div>
      </Card>

      {/* Settings */}
      <Card padding="lg" className="mb-6">
        <CardHeader>
          <CardTitle>Report settings</CardTitle>
        </CardHeader>
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Client / Company name
            </label>
            <input
              type="text"
              value={clientName}
              onChange={e => setClientName(e.target.value)}
              placeholder="e.g. Acme Corporation"
              className="w-full border border-[#E2E1DE] rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0D7377]"
            />
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeConfidence}
              onChange={e => setIncludeConfidence(e.target.checked)}
              className="w-4 h-4 rounded border-[#E2E1DE] text-[#0D7377] focus:ring-[#0D7377]"
            />
            <span className="text-sm">Include confidence indicators</span>
          </label>
        </div>
      </Card>

      {/* Export actions */}
      <div className="flex items-center gap-4">
        <Button size="lg" onClick={handleExportPDF} loading={exportingPdf} disabled={exportingPptx}>
          Export as PDF
        </Button>
        <Button size="lg" variant="secondary" onClick={handleExportPPTX} loading={exportingPptx} disabled={exportingPdf}>
          Export as PowerPoint
        </Button>
      </div>
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
