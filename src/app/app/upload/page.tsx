'use client'

import { Suspense, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { FileDropzone } from '@/components/ui/file-dropzone'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { ProgressBar } from '@/components/ui/progress-bar'

export default function UploadPageWrapper() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-2 border-[#C1440E] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <UploadPage />
    </Suspense>
  )
}

function UploadPage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [headers, setHeaders] = useState<string[]>([])
  const [preview, setPreview] = useState<string[][]>([])
  const [nameColumn, setNameColumn] = useState<string>('')
  const [descriptionColumn, setDescriptionColumn] = useState<string>('__none__')
  const [attributeColumns, setAttributeColumns] = useState<Set<string>>(new Set())
  const [yourCompanyName, setYourCompanyName] = useState<string>('')
  const [processing, setProcessing] = useState(false)
  const [progress, setProgress] = useState({ step: '', progress: 0, detail: '' })
  const [error, setError] = useState<string | null>(null)
  const [pasteText, setPasteText] = useState('')
  const [rawCsv, setRawCsv] = useState<string>('')

  const parseCSVText = useCallback(async (text: string) => {
    setError(null)
    setRawCsv(text)

    const Papa = (await import('papaparse')).default
    const result = Papa.parse(text, { header: false, skipEmptyLines: true })
    const rows = result.data as string[][]
    if (rows.length < 2) {
      setError('CSV must have at least a header row and one data row')
      return
    }

    const hdrs = rows[0].map((h: string) => (h || '').trim())
    const dataRows = rows.slice(1).filter((r: string[]) => r.some((c: string) => c?.trim()))

    setHeaders(hdrs)
    setPreview(dataRows.slice(0, 5))

    // Auto-detect name column
    const nameGuess = hdrs.find(h =>
      /^(name|company|competitor|vendor|product|brand)$/i.test(h.trim())
    ) || hdrs[0]
    setNameColumn(nameGuess)

    // Auto-detect description column
    const descGuess = hdrs.find(h =>
      /^(description|desc|about|summary|overview)$/i.test(h.trim())
    )
    setDescriptionColumn(descGuess || '__none__')

    // Default: all non-name, non-description columns are attributes
    const autoAttrs = new Set(
      hdrs.filter(h => h !== nameGuess && h !== descGuess)
    )
    setAttributeColumns(autoAttrs)
  }, [])

  const handleFileSelect = useCallback(async (selectedFile: File) => {
    setFile(selectedFile)
    const text = await selectedFile.text()
    await parseCSVText(text)
  }, [parseCSVText])

  const handlePaste = async () => {
    if (!pasteText.trim()) return
    await parseCSVText(pasteText)
  }

  const toggleAttribute = (col: string) => {
    setAttributeColumns(prev => {
      const next = new Set(prev)
      if (next.has(col)) {
        next.delete(col)
      } else {
        next.add(col)
      }
      return next
    })
  }

  const resetData = () => {
    setFile(null)
    setHeaders([])
    setPreview([])
    setNameColumn('')
    setDescriptionColumn('__none__')
    setAttributeColumns(new Set())
    setPasteText('')
    setRawCsv('')
  }

  const canProcess = headers.length > 0 && nameColumn !== ''

  const handleProcess = async () => {
    if (!canProcess) return
    setProcessing(true)
    setError(null)

    try {
      const res = await fetch('/api/process-landscape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          csvContent: rawCsv,
          nameColumn,
          descriptionColumn: descriptionColumn === '__none__' ? undefined : descriptionColumn,
          attributeColumns: Array.from(attributeColumns),
          yourCompanyName: yourCompanyName.trim() || undefined,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Processing failed')
      }

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let resultId = ''

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          const text = decoder.decode(value)
          const lines = text.split('\n').filter(l => l.startsWith('data: '))
          for (const line of lines) {
            try {
              const data = JSON.parse(line.slice(6))
              if (data.type === 'progress') {
                setProgress({ step: data.step, progress: data.progress, detail: data.detail || '' })
              } else if (data.type === 'complete') {
                resultId = data.sessionId
              } else if (data.type === 'error') {
                throw new Error(data.error)
              }
            } catch (e) {
              if (e instanceof Error && e.message !== 'Unexpected end of JSON input') {
                throw e
              }
            }
          }
        }
      }

      if (resultId) {
        router.push(`/app/landscape/${resultId}`)
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
      setProcessing(false)
    }
  }

  return (
    <div className="max-w-[800px] mx-auto">
      <div className="mb-10">
        <p className="font-[family-name:var(--font-mono)] text-xs text-[#C1440E] tracking-widest uppercase mb-3">
          New landscape
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-[#1B2A4A] mb-3">
          Upload your competitor list
        </h1>
        <p className="text-[#9BA8B4]">
          CSV with one competitor per row. Add any attributes — pricing, market share, feature set — and Claude will determine the best positioning axes.
        </p>
      </div>

      {!headers.length && !processing && (
        <div className="space-y-6">
          <FileDropzone onFileSelect={handleFileSelect} disabled={processing} />

          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-[#E2E1DE]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#FAFAF8] px-3 text-sm text-[#9BA8B4]">or paste CSV data</span>
            </div>
          </div>

          <div>
            <textarea
              value={pasteText}
              onChange={e => setPasteText(e.target.value)}
              placeholder={`Paste CSV here...\n\nName,Description,Pricing,Market Share,Founded\nSalesforce,CRM leader,Enterprise,32%,1999\nHubSpot,Mid-market CRM,Freemium,15%,2006`}
              className="w-full h-40 border border-[#E2E1DE] rounded-lg p-4 text-sm font-[family-name:var(--font-mono)] bg-white text-[#1B2A4A] placeholder:text-[#9BA8B4]/50 focus:outline-none focus:ring-2 focus:ring-[#C1440E] focus:border-transparent resize-y"
            />
            {pasteText.trim() && (
              <div className="mt-3 flex justify-end">
                <Button size="sm" onClick={handlePaste}>
                  Parse data
                </Button>
              </div>
            )}
          </div>

          {/* CSV format hint */}
          <div className="bg-[#F0EFF5] border border-[#E2E1DE] rounded-lg p-4 text-sm">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#9BA8B4] uppercase tracking-wider mb-2">Recommended columns</p>
            <p className="text-[#6B7280] leading-relaxed">
              <strong className="text-[#1B2A4A]">Name</strong> (required) — company or product name<br />
              <strong className="text-[#1B2A4A]">Description</strong> (optional) — brief description<br />
              <strong className="text-[#1B2A4A]">Any attributes</strong> — pricing tier, market share, employee count, founded year, NPS score, etc.
            </p>
          </div>
        </div>
      )}

      {headers.length > 0 && !processing && (
        <div className="space-y-6">
          {/* File info */}
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-[#1B2A4A]">{file?.name || 'Pasted data'}</p>
                <p className="text-sm text-[#9BA8B4]">{preview.length} rows previewed, {headers.length} columns detected</p>
              </div>
              <Button variant="ghost" size="sm" onClick={resetData}>
                Change file
              </Button>
            </div>
          </Card>

          {/* Column mapping */}
          <Card padding="lg">
            <CardHeader>
              <CardTitle>Map your columns</CardTitle>
              <p className="text-sm text-[#9BA8B4] mt-1">
                Tell us which column is the competitor name, and which attributes to use for positioning.
              </p>
            </CardHeader>

            <div className="mt-6 space-y-5">
              {/* Name column */}
              <div>
                <label className="block text-xs font-[family-name:var(--font-mono)] text-[#9BA8B4] uppercase tracking-wider mb-2">
                  Name column <span className="text-[#C1440E]">*</span>
                </label>
                <select
                  value={nameColumn}
                  onChange={e => setNameColumn(e.target.value)}
                  className="w-full text-sm border border-[#E2E1DE] rounded-md px-3 py-2.5 bg-white text-[#1B2A4A] focus:outline-none focus:ring-2 focus:ring-[#C1440E] focus:border-transparent"
                >
                  {headers.map(h => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
              </div>

              {/* Description column */}
              <div>
                <label className="block text-xs font-[family-name:var(--font-mono)] text-[#9BA8B4] uppercase tracking-wider mb-2">
                  Description column (optional)
                </label>
                <select
                  value={descriptionColumn}
                  onChange={e => setDescriptionColumn(e.target.value)}
                  className="w-full text-sm border border-[#E2E1DE] rounded-md px-3 py-2.5 bg-white text-[#1B2A4A] focus:outline-none focus:ring-2 focus:ring-[#C1440E] focus:border-transparent"
                >
                  <option value="__none__">— None —</option>
                  {headers.filter(h => h !== nameColumn).map(h => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
              </div>

              {/* Attribute columns */}
              <div>
                <label className="block text-xs font-[family-name:var(--font-mono)] text-[#9BA8B4] uppercase tracking-wider mb-2">
                  Attribute columns (used for positioning)
                </label>
                <div className="space-y-2">
                  {headers.filter(h => h !== nameColumn && h !== (descriptionColumn === '__none__' ? '' : descriptionColumn)).map(col => (
                    <label key={col} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={attributeColumns.has(col)}
                        onChange={() => toggleAttribute(col)}
                        className="w-4 h-4 accent-[#C1440E]"
                      />
                      <span className="text-sm font-[family-name:var(--font-mono)] text-[#1B2A4A]">{col}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Your company */}
              <div>
                <label className="block text-xs font-[family-name:var(--font-mono)] text-[#9BA8B4] uppercase tracking-wider mb-2">
                  What are you evaluating? (optional)
                </label>
                <input
                  type="text"
                  value={yourCompanyName}
                  onChange={e => setYourCompanyName(e.target.value)}
                  placeholder="Your company name — adds a 'you' dot to the map"
                  className="w-full text-sm border border-[#E2E1DE] rounded-md px-3 py-2.5 bg-white text-[#1B2A4A] placeholder:text-[#9BA8B4]/60 focus:outline-none focus:ring-2 focus:ring-[#C1440E] focus:border-transparent"
                />
              </div>
            </div>
          </Card>

          {/* Data preview */}
          <Card padding="lg">
            <CardHeader>
              <CardTitle>Data preview</CardTitle>
              <p className="text-sm text-[#9BA8B4] mt-1">First 5 rows</p>
            </CardHeader>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#E2E1DE]">
                    {headers.map(h => (
                      <th key={h} className="text-left py-2 px-3 font-[family-name:var(--font-mono)] text-xs font-medium text-[#9BA8B4] whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {preview.map((row, i) => (
                    <tr key={i} className="border-b border-[#E2E1DE]/50">
                      {row.map((cell, j) => (
                        <td key={j} className="py-2 px-3 font-[family-name:var(--font-mono)] text-xs text-[#6B7280] whitespace-nowrap max-w-[200px] truncate">
                          {cell || '\u2014'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="flex justify-end">
            <Button size="lg" onClick={handleProcess} disabled={!canProcess}>
              Build competitive landscape
            </Button>
          </div>
        </div>
      )}

      {processing && (
        <Card padding="lg">
          <div className="text-center py-8">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C1440E]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#C1440E] animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1B2A4A] mb-2">
                {progress.step || 'Processing...'}
              </h3>
              {progress.detail && (
                <p className="text-sm text-[#9BA8B4]">{progress.detail}</p>
              )}
            </div>
            <ProgressBar progress={progress.progress} />
          </div>
        </Card>
      )}
    </div>
  )
}
