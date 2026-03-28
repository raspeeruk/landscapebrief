import { jsPDF } from 'jspdf'
import type { MarketReport, OrgSection, PersonEntry, ClientBranding } from '@/types'

// Report colors
const TEAL = { r: 13, g: 115, b: 119 }        // #0D7377
const DARK_TEAL = { r: 8, g: 80, b: 83 }      // #085053
const RM_GREEN = { r: 74, g: 124, b: 89 }      // #4A7C59
const IA_GREEN = { r: 141, g: 184, b: 158 }    // #8DB89E
const NEUTRAL = { r: 226, g: 225, b: 222 }     // #E2E1DE
const WHITE = { r: 255, g: 255, b: 255 }
const TEXT = { r: 26, g: 26, b: 26 }           // #1A1A1A
const TEXT_SEC = { r: 107, g: 114, b: 128 }    // #6B7280
const RED = { r: 220, g: 38, b: 38 }           // #DC2626
const SURFACE = { r: 250, g: 250, b: 248 }     // #FAFAF8

type RGB = { r: number; g: number; b: number }

// A4 landscape dimensions in mm
const W = 297
const H = 210
const MARGIN = 15

function hexToRgb(hex: string): RGB {
  const clean = hex.replace('#', '')
  if (clean.length !== 6) return TEAL
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  }
}

function darkenRgb(c: RGB, amount: number): RGB {
  return {
    r: Math.max(0, Math.round(c.r * (1 - amount))),
    g: Math.max(0, Math.round(c.g * (1 - amount))),
    b: Math.max(0, Math.round(c.b * (1 - amount))),
  }
}

function setFill(doc: jsPDF, c: RGB) { doc.setFillColor(c.r, c.g, c.b) }
function setTextC(doc: jsPDF, c: RGB) { doc.setTextColor(c.r, c.g, c.b) }

interface PdfColors {
  accent: RGB
  accentDark: RGB
}

function getColors(branding?: ClientBranding): PdfColors {
  if (branding?.accentColor) {
    const accent = hexToRgb(branding.accentColor)
    return { accent, accentDark: darkenRgb(accent, 0.3) }
  }
  return { accent: TEAL, accentDark: DARK_TEAL }
}

function drawFooter(doc: jsPDF, pageNum: number, totalPages: number, colors: PdfColors) {
  setFill(doc, colors.accentDark)
  doc.rect(0, H - 10, W, 10, 'F')
  setTextC(doc, WHITE)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7)
  doc.text(`Page ${pageNum} of ${totalPages}`, W - MARGIN, H - 4, { align: 'right' })
}

function drawHeaderBar(doc: jsPDF, orgName: string, y: number, colors: PdfColors, logoUrl?: string, clientLogo?: string): number {
  setFill(doc, colors.accentDark)
  doc.rect(0, y, W, 16, 'F')

  let textX = MARGIN + 4

  // Try client logo first, then org logo
  const logo = clientLogo || logoUrl
  if (logo && logo.startsWith('data:')) {
    try {
      doc.addImage(logo, 'PNG', MARGIN + 2, y + 2, 12, 12)
      textX = MARGIN + 18
    } catch {
      // Logo embedding failed
    }
  }

  setTextC(doc, WHITE)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(14)
  doc.text(orgName, textX, y + 10.5)
  return y + 16
}

function drawWatermark(doc: jsPDF) {
  doc.saveGraphicsState()
  doc.setGState(new (doc as any).GState({ opacity: 0.08 }))
  setTextC(doc, TEXT)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(60)

  // Diagonal watermark
  const text = 'CompBrief TRIAL'
  const centerX = W / 2
  const centerY = H / 2

  // Rotate text
  doc.text(text, centerX, centerY, {
    align: 'center',
    angle: 35,
  })

  doc.restoreGraphicsState()
}

function truncate(s: string, max: number): string {
  return s.length > max ? s.slice(0, max - 1) + '\u2026' : s
}

function formatSurname(fullName: string): string {
  const parts = fullName.split(/\s+/)
  if (parts.length <= 1) return fullName
  return `${parts[0]} ${parts.slice(1).join(' ').toUpperCase()}`
}

export interface PdfOptions {
  branding?: ClientBranding
  watermark?: boolean
}

export async function generateReportPdf(report: MarketReport, options?: PdfOptions): Promise<Blob> {
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
  const branding = options?.branding || report.clientBranding
  const colors = getColors(branding)
  const shouldWatermark = options?.watermark === true

  // Count total pages for footer: 1 cover + 2 per org (summary + chart)
  const totalPages = 1 + report.organizations.length * 2
  let pageNum = 1

  // ────── PAGE 1: COVER ──────
  setFill(doc, SURFACE)
  doc.rect(0, 0, W, H, 'F')

  // Top band
  setFill(doc, colors.accentDark)
  doc.rect(0, 0, W, 50, 'F')

  // Client logo on cover
  const clientLogo = branding?.logoDataUrl || branding?.logoUrl
  if (clientLogo && clientLogo.startsWith('data:')) {
    try {
      doc.addImage(clientLogo, 'PNG', W - MARGIN - 20, 10, 16, 16)
    } catch {
      // Logo failed
    }
  }

  // Title on dark band
  setTextC(doc, WHITE)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(28)
  const titleLines = doc.splitTextToSize(report.title, W - MARGIN * 2 - 30)
  doc.text(titleLines, MARGIN, 28)

  // Stats bar below band
  const statsY = 60
  setTextC(doc, TEXT)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(12)
  const totalPeople = report.organizations.reduce((sum, o) => sum + o.headcount, 0)
  doc.text(`${report.organizations.length} Organizations  |  ${totalPeople} People`, MARGIN, statsY)

  // Org name list
  let listY = statsY + 15
  doc.setFontSize(10)
  setTextC(doc, TEXT_SEC)
  for (const org of report.organizations) {
    doc.text(`\u2022  ${org.name} (${org.headcount})`, MARGIN + 5, listY)
    listY += 6
    if (listY > H - 50) break
  }

  // Date badge bottom-right
  const dateW = 60
  const dateH = 14
  setFill(doc, colors.accent)
  doc.roundedRect(W - MARGIN - dateW, H - 40, dateW, dateH, 3, 3, 'F')
  setTextC(doc, WHITE)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  doc.text(`Updated: ${report.date}`, W - MARGIN - dateW / 2, H - 40 + 9, { align: 'center' })

  // Client branding
  if (branding?.name) {
    setTextC(doc, TEXT_SEC)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.text(`Prepared by ${branding.name}`, MARGIN, H - 20)
    if (branding.phone) doc.text(branding.phone, MARGIN, H - 14)
    if (branding.email) doc.text(branding.email, MARGIN + 50, H - 14)
  }

  if (shouldWatermark) drawWatermark(doc)
  drawFooter(doc, pageNum, totalPages, colors)
  pageNum++

  // ────── PER-ORG PAGES ──────
  for (const org of report.organizations) {
    // ── SUMMARY PAGE ──
    doc.addPage('a4', 'landscape')
    setFill(doc, SURFACE)
    doc.rect(0, 0, W, H, 'F')

    let y = drawHeaderBar(doc, org.name, 0, colors, org.logoUrl, clientLogo)
    y += 6

    // Team AuM
    if (org.teamAum) {
      setFill(doc, WHITE)
      doc.roundedRect(MARGIN, y, 60, 18, 2, 2, 'F')
      doc.setDrawColor(NEUTRAL.r, NEUTRAL.g, NEUTRAL.b)
      doc.roundedRect(MARGIN, y, 60, 18, 2, 2, 'S')
      setTextC(doc, TEXT_SEC)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8)
      doc.text('Team AuM', MARGIN + 4, y + 6)
      setTextC(doc, TEXT)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(14)
      doc.text(org.teamAum, MARGIN + 4, y + 14)
      y += 24
    }

    // Summary text columns
    const colW = (W - MARGIN * 2 - 10) / 3
    const summaryFields: { label: string; text: string }[] = [
      { label: 'Hiring Activity', text: org.hiringActivity },
      { label: 'Recent Departures', text: org.recentDepartures },
      { label: 'General Comments', text: org.generalComments },
    ]

    const colStartY = y
    summaryFields.forEach((field, i) => {
      const x = MARGIN + i * (colW + 5)
      let fy = colStartY

      // Label
      setFill(doc, colors.accent)
      doc.rect(x, fy, colW, 0.5, 'F')
      fy += 4

      setTextC(doc, colors.accent)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(9)
      doc.text(field.label, x, fy)
      fy += 5

      // Text content
      setTextC(doc, TEXT)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8)
      if (field.text) {
        const lines = doc.splitTextToSize(field.text, colW - 2)
        doc.text(lines, x, fy)
      } else {
        setTextC(doc, TEXT_SEC)
        doc.text('No data provided', x, fy)
      }
    })

    // Recent Activity section below
    const activityY = colStartY + 60
    if (org.recentActivity) {
      setFill(doc, colors.accent)
      doc.rect(MARGIN, activityY, W - MARGIN * 2, 0.5, 'F')

      setTextC(doc, colors.accent)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(9)
      doc.text('Recent Activity', MARGIN, activityY + 6)

      setTextC(doc, TEXT)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8)
      const actLines = doc.splitTextToSize(org.recentActivity, W - MARGIN * 2)
      doc.text(actLines, MARGIN, activityY + 12)
    }

    // Headcount stats
    setTextC(doc, TEXT_SEC)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    const locSummary = org.locations.map(l => `${l.name} (${l.people.length})`).join('  |  ')
    doc.text(`${org.headcount} people: ${locSummary}`, MARGIN, H - 16)

    if (shouldWatermark) drawWatermark(doc)
    drawFooter(doc, pageNum, totalPages, colors)
    pageNum++

    // ── CHART PAGE ──
    doc.addPage('a4', 'landscape')
    setFill(doc, WHITE)
    doc.rect(0, 0, W, H, 'F')

    y = drawHeaderBar(doc, org.name, 0, colors, org.logoUrl, clientLogo)
    y += 4

    // Draw location sections
    for (const loc of org.locations) {
      // Check if we need a new page
      if (y > H - 40) {
        if (shouldWatermark) drawWatermark(doc)
        drawFooter(doc, pageNum, totalPages, colors)
        doc.addPage('a4', 'landscape')
        setFill(doc, WHITE)
        doc.rect(0, 0, W, H, 'F')
        y = drawHeaderBar(doc, org.name, 0, colors, org.logoUrl, clientLogo)
        y += 4
        pageNum++
      }

      // Location header bar
      setFill(doc, colors.accentDark)
      doc.rect(MARGIN, y, W - MARGIN * 2, 7, 'F')
      setTextC(doc, WHITE)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8)
      doc.text(loc.name.toUpperCase(), MARGIN + 3, y + 5)
      y += 8

      // Person cards grid
      const gridW = W - MARGIN * 2
      const maxCols = Math.min(6, Math.max(3, loc.people.length))
      const cardW = (gridW - (maxCols - 1) * 2) / maxCols
      const cardH = 18

      for (let i = 0; i < loc.people.length; i++) {
        const col = i % maxCols
        const row = Math.floor(i / maxCols)
        const cx = MARGIN + col * (cardW + 2)
        const cy = y + row * (cardH + 2)

        // Check page overflow for cards
        if (cy + cardH > H - 18) {
          y = cy
          if (shouldWatermark) drawWatermark(doc)
          drawFooter(doc, pageNum, totalPages, colors)
          doc.addPage('a4', 'landscape')
          setFill(doc, WHITE)
          doc.rect(0, 0, W, H, 'F')
          y = drawHeaderBar(doc, `${org.name} — ${loc.name} (cont.)`, 0, colors, org.logoUrl, clientLogo)
          y += 4
          pageNum++
          const remaining = loc.people.slice(i)
          drawPersonCards(doc, remaining, MARGIN, y, gridW, maxCols, cardW, cardH)
          y += Math.ceil(remaining.length / maxCols) * (cardH + 2) + 4
          break
        }

        drawPersonCard(doc, loc.people[i], cx, cy, cardW, cardH)

        if (i === loc.people.length - 1) {
          y = cy + cardH + 4
        }
      }
    }

    // Legend at bottom-right
    const legendY = Math.min(y + 4, H - 24)
    const legendX = W - MARGIN - 90
    doc.setFontSize(7)
    setTextC(doc, TEXT_SEC)
    doc.text('Legend:', legendX, legendY)

    const legendItems: { label: string; color: RGB }[] = [
      { label: 'Relationship Manager', color: RM_GREEN },
      { label: 'IA / IC / Portfolio Mgr', color: IA_GREEN },
      { label: 'Other', color: NEUTRAL },
    ]
    legendItems.forEach((item, i) => {
      const lx = legendX + (i * 30)
      const ly = legendY + 5
      setFill(doc, item.color)
      doc.rect(lx, ly, 4, 4, 'F')
      setTextC(doc, TEXT_SEC)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(6)
      doc.text(item.label, lx + 5, ly + 3)
    })

    if (shouldWatermark) drawWatermark(doc)
    drawFooter(doc, pageNum, totalPages, colors)
    pageNum++
  }

  return doc.output('blob')
}

function drawPersonCards(
  doc: jsPDF, people: PersonEntry[],
  startX: number, startY: number, gridW: number,
  maxCols: number, cardW: number, cardH: number,
) {
  for (let i = 0; i < people.length; i++) {
    const col = i % maxCols
    const row = Math.floor(i / maxCols)
    const cx = startX + col * (cardW + 2)
    const cy = startY + row * (cardH + 2)
    drawPersonCard(doc, people[i], cx, cy, cardW, cardH)
  }
}

function drawPersonCard(doc: jsPDF, person: PersonEntry, x: number, y: number, w: number, h: number) {
  const bgColor = person.departed
    ? { r: 254, g: 242, b: 242 }
    : person.roleType === 'rm' ? RM_GREEN
    : person.roleType === 'ia-ic' ? IA_GREEN
    : NEUTRAL

  setFill(doc, bgColor)
  doc.roundedRect(x, y, w, h, 1, 1, 'F')

  const textColor = person.departed
    ? RED
    : (person.roleType === 'rm' ? WHITE : TEXT)

  // Name (surname in CAPS)
  setTextC(doc, textColor)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(6.5)
  const displayName = formatSurname(person.fullName)
  doc.text(truncate(displayName, Math.floor(w / 2)), x + 2, y + 4)

  // Job title
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(5.5)
  const titleOpacity = person.departed ? RED : { ...textColor }
  setTextC(doc, titleOpacity)
  doc.text(truncate(person.jobTitle, Math.floor(w / 1.8)), x + 2, y + 8)

  // Level
  if (person.level) {
    doc.setFontSize(5)
    doc.text(truncate(person.level, Math.floor(w / 2)), x + 2, y + 11.5)
  }

  // Start date
  if (person.startDate) {
    doc.setFontSize(5)
    setTextC(doc, person.departed ? RED : TEXT_SEC)
    doc.text(person.startDate, x + 2, y + 14.5)
  }

  // Departed indicator
  if (person.departed) {
    setTextC(doc, RED)
    doc.setFontSize(5)
    doc.text(person.departedNote || 'Departed', x + 2, y + h - 1.5)

    doc.setDrawColor(RED.r, RED.g, RED.b)
    doc.setLineWidth(0.2)
    doc.line(x + 2, y + 3, x + 2 + doc.getTextWidth(truncate(displayName, Math.floor(w / 2))), y + 3)
  }
}
