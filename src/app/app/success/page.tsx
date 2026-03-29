'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import type { LandscapeDTO } from '@/types/competitive'

function SuccessPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const reportId = searchParams.get('report_id')
  const sessionId = searchParams.get('session_id')

  const [landscape, setLandscape] = useState<LandscapeDTO | null>(null)
  const [loading, setLoading] = useState(true)
  const [downloadingPdf, setDownloadingPdf] = useState(false)
  const [downloadingPptx, setDownloadingPptx] = useState(false)
  const [pdfDone, setPdfDone] = useState(false)
  const [pptxDone, setPptxDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!reportId) {
      setLoading(false)
      return
    }

    async function load() {
      try {
        // Try to load from sessionStorage first (fastest)
        const stored = sessionStorage.getItem(`landscapebrief_report_${reportId}`)
        if (stored) {
          setLandscape(JSON.parse(stored))
          setLoading(false)
          return
        }

        // Fallback to API
        const res = await fetch(`/api/landscape/${reportId}`)
        if (res.ok) {
          const data = await res.json()
          setLandscape(data)
          sessionStorage.setItem(`landscapebrief_report_${reportId}`, JSON.stringify(data))
        } else {
          setError('Landscape data not found. It may have expired.')
        }
      } catch {
        setError('Failed to load landscape data.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [reportId])

  const handleDownloadPdf = async () => {
    if (!landscape) return
    setDownloadingPdf(true)
    try {
      // PDF generation using jsPDF — landscape brief specific
      const { generateLandscapePdf } = await import('@/lib/export/landscape-pdf-generator')
      const blob = await generateLandscapePdf(landscape)
      downloadBlob(blob, `${landscape.title.replace(/[^a-zA-Z0-9]+/g, '-')}-landscape.pdf`)
      setPdfDone(true)
    } catch (err) {
      console.error('PDF export failed:', err)
      setError('PDF export failed — please try again.')
    } finally {
      setDownloadingPdf(false)
    }
  }

  const handleDownloadPptx = async () => {
    if (!landscape) return
    setDownloadingPptx(true)
    try {
      const { generateLandscapePptx } = await import('@/lib/export/landscape-pptx-generator')
      const blob = await generateLandscapePptx(landscape)
      downloadBlob(blob, `${landscape.title.replace(/[^a-zA-Z0-9]+/g, '-')}-landscape.pptx`)
      setPptxDone(true)
    } catch (err) {
      console.error('PPTX export failed:', err)
      setError('PPTX export failed — please try again.')
    } finally {
      setDownloadingPptx(false)
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <div className="w-8 h-8 border-2 border-[#C1440E] border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-[#9BA8B4]">Preparing your downloads&hellip;</p>
      </div>
    )
  }

  return (
    <div className="max-w-[620px] mx-auto py-16">
      {/* Success header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-[#059669]/10 flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1B2A4A]">
            Payment confirmed
          </h1>
          <p className="text-sm text-[#9BA8B4] mt-0.5">
            Your competitive landscape report is ready to download.
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {landscape ? (
        <div className="bg-[#FAFAF8] border border-[#E2E1DE] rounded-lg p-6 mb-6">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1B2A4A] mb-1">
            {landscape.title}
          </h2>
          <p className="text-sm text-[#9BA8B4] mb-5">
            {Object.keys(landscape.competitors).length} competitors &bull; {landscape.clusters.length} clusters &bull; {landscape.whitespaceOpportunities.length} whitespace gaps
          </p>

          <div className="space-y-3">
            {/* PDF download */}
            <div className="flex items-center justify-between bg-white border border-[#E2E1DE] rounded-lg px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#C1440E]/10 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#C1440E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1B2A4A]">Competitive Landscape PDF</p>
                  <p className="text-xs text-[#9BA8B4]">Full report — print &amp; share ready</p>
                </div>
              </div>
              {pdfDone ? (
                <span className="text-xs text-[#059669] font-medium flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Downloaded
                </span>
              ) : (
                <Button size="sm" variant="secondary" onClick={handleDownloadPdf} loading={downloadingPdf}>
                  Download PDF
                </Button>
              )}
            </div>

            {/* PPTX download */}
            <div className="flex items-center justify-between bg-white border border-[#E2E1DE] rounded-lg px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1B2A4A]/10 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#1B2A4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-1.5C2.25 15.25 3.375 15 4.5 15m15 4.5h-1.5c-.621 0-1.125-.504-1.125-1.125m1.5 1.125h-1.5M18 15c1.125 0 2.25.25 2.25 1.875v1.5M6 18.375V15m0 0c0-1.125 1.125-1.375 2.25-1.375h7.5C16.875 13.625 18 13.875 18 15" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1B2A4A]">PowerPoint Presentation</p>
                  <p className="text-xs text-[#9BA8B4]">6-slide PPTX — ready to present</p>
                </div>
              </div>
              {pptxDone ? (
                <span className="text-xs text-[#059669] font-medium flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Downloaded
                </span>
              ) : (
                <Button size="sm" onClick={handleDownloadPptx} loading={downloadingPptx}>
                  Download PPTX
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-4 mb-6">
          <p className="text-sm text-amber-800 font-medium mb-1">Session data unavailable</p>
          <p className="text-sm text-amber-700">
            Your payment was successful, but the landscape session has expired.
            Please{' '}
            <a href="mailto:hello@landscapebrief.com?subject=Download%20Request" className="underline">
              contact support
            </a>{' '}
            with your payment confirmation and we&apos;ll manually send your report.
          </p>
          {sessionId && (
            <p className="text-xs text-amber-600 mt-2 font-[family-name:var(--font-mono)]">
              Session ID: {sessionId}
            </p>
          )}
        </div>
      )}

      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          onClick={() => reportId ? router.push(`/app/landscape/${reportId}`) : router.push('/app/upload')}
        >
          Back to landscape
        </Button>
        <Button variant="ghost" onClick={() => router.push('/app/upload')}>
          New landscape
        </Button>
      </div>

      <p className="mt-8 text-xs text-[#9BA8B4]">
        Need help? Email{' '}
        <a href="mailto:hello@landscapebrief.com" className="underline hover:text-[#1B2A4A]">
          hello@landscapebrief.com
        </a>
      </p>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-2 border-[#C1440E] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <SuccessPageContent />
    </Suspense>
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
