'use client'

import { useState, useRef } from 'react'
import type { LandscapeDTO, Competitor, CompetitorTier } from '@/types/competitive'

interface CompetitiveLandscapeProps {
  landscape: LandscapeDTO
  width?: number
  height?: number
}

const TIER_COLORS: Record<CompetitorTier, string> = {
  direct: '#C1440E',      // vermillion
  indirect: '#4A6FA5',    // slate blue
  aspirational: '#1B2A4A', // deep navy
  emerging: '#9BA8B4',    // data neutral
}

const TIER_LABELS: Record<CompetitorTier, string> = {
  direct: 'Direct',
  indirect: 'Indirect',
  aspirational: 'Aspirational',
  emerging: 'Emerging',
}

function positionToPercent(value: number): number {
  // Convert -100..100 to 0..100 percent
  return ((value + 100) / 200) * 100
}

export function CompetitiveLandscape({ landscape, width = 800, height = 600 }: CompetitiveLandscapeProps) {
  const [hovered, setHovered] = useState<string | null>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const PADDING = 64
  const innerW = width - PADDING * 2
  const innerH = height - PADDING * 2

  function toSVGX(axisX: number) {
    return PADDING + (positionToPercent(axisX) / 100) * innerW
  }

  function toSVGY(axisY: number) {
    // Y is inverted in SVG: top = high, bottom = low
    return PADDING + ((100 - positionToPercent(axisY)) / 100) * innerH
  }

  const competitors = Object.values(landscape.competitors)
  const selectedComp = selected ? landscape.competitors[selected] : null
  const hoveredComp = hovered ? landscape.competitors[hovered] : null
  const activeComp = selectedComp || hoveredComp

  return (
    <div className="relative w-full" style={{ fontFamily: 'var(--font-body, sans-serif)' }}>
      {/* Main chart */}
      <div className="relative bg-[#FAFAF8] border border-[#E2E1DE] rounded-lg overflow-hidden" style={{ aspectRatio: `${width}/${height}` }}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full"
          style={{ userSelect: 'none' }}
        >
          {/* Quadrant backgrounds */}
          <rect x={PADDING} y={PADDING} width={innerW / 2} height={innerH / 2} fill="#F0EFF5" opacity="0.5" />
          <rect x={PADDING + innerW / 2} y={PADDING} width={innerW / 2} height={innerH / 2} fill="#FDF8F6" opacity="0.5" />
          <rect x={PADDING} y={PADDING + innerH / 2} width={innerW / 2} height={innerH / 2} fill="#F8F9FA" opacity="0.5" />
          <rect x={PADDING + innerW / 2} y={PADDING + innerH / 2} width={innerW / 2} height={innerH / 2} fill="#FAFAF8" opacity="0.5" />

          {/* Axis lines */}
          {/* X axis (horizontal center) */}
          <line
            x1={PADDING} y1={PADDING + innerH / 2}
            x2={PADDING + innerW} y2={PADDING + innerH / 2}
            stroke="#1B2A4A" strokeWidth="1.5" opacity="0.3"
          />
          {/* Y axis (vertical center) */}
          <line
            x1={PADDING + innerW / 2} y1={PADDING}
            x2={PADDING + innerW / 2} y2={PADDING + innerH}
            stroke="#1B2A4A" strokeWidth="1.5" opacity="0.3"
          />

          {/* Border frame */}
          <rect
            x={PADDING} y={PADDING}
            width={innerW} height={innerH}
            fill="none" stroke="#1B2A4A" strokeWidth="1" opacity="0.15"
          />

          {/* Axis labels */}
          {/* X axis label — left (low) */}
          <text
            x={PADDING + 6} y={PADDING + innerH / 2 - 8}
            fill="#9BA8B4" fontSize="10"
            fontFamily="var(--font-mono, monospace)"
          >
            ← Low {landscape.axisXLabel}
          </text>
          {/* X axis label — right (high) */}
          <text
            x={PADDING + innerW - 6} y={PADDING + innerH / 2 - 8}
            fill="#9BA8B4" fontSize="10" textAnchor="end"
            fontFamily="var(--font-mono, monospace)"
          >
            High {landscape.axisXLabel} →
          </text>
          {/* Y axis label — bottom (low) */}
          <text
            x={PADDING + innerW / 2 + 8} y={PADDING + innerH - 6}
            fill="#9BA8B4" fontSize="10"
            fontFamily="var(--font-mono, monospace)"
          >
            Low {landscape.axisYLabel}
          </text>
          {/* Y axis label — top (high) */}
          <text
            x={PADDING + innerW / 2 + 8} y={PADDING + 14}
            fill="#9BA8B4" fontSize="10"
            fontFamily="var(--font-mono, monospace)"
          >
            High {landscape.axisYLabel}
          </text>

          {/* Competitor dots */}
          {competitors.map(comp => {
            const cx = toSVGX(comp.axisX)
            const cy = toSVGY(comp.axisY)
            const color = TIER_COLORS[comp.tier]
            const isActive = hovered === comp.id || selected === comp.id
            const r = isActive ? 10 : 7

            return (
              <g
                key={comp.id}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHovered(comp.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(selected === comp.id ? null : comp.id)}
              >
                {/* Glow ring when active */}
                {isActive && (
                  <circle cx={cx} cy={cy} r={r + 6} fill={color} opacity="0.15" />
                )}
                <circle
                  cx={cx} cy={cy} r={r}
                  fill={color}
                  stroke="white"
                  strokeWidth="2"
                  opacity={isActive ? 1 : 0.85}
                />
                {/* Label */}
                <text
                  x={cx + r + 4} y={cy + 4}
                  fill="#1B2A4A"
                  fontSize="10"
                  fontWeight={isActive ? '700' : '400'}
                  fontFamily="var(--font-mono, monospace)"
                >
                  {comp.name.length > 18 ? comp.name.slice(0, 16) + '…' : comp.name}
                </text>
              </g>
            )
          })}

          {/* Your position dot */}
          {landscape.yourPosition && (
            <g>
              <circle
                cx={toSVGX(landscape.yourPosition.axisX)}
                cy={toSVGY(landscape.yourPosition.axisY)}
                r={10}
                fill="none"
                stroke="#1B2A4A"
                strokeWidth="2.5"
                strokeDasharray="4 2"
              />
              <circle
                cx={toSVGX(landscape.yourPosition.axisX)}
                cy={toSVGY(landscape.yourPosition.axisY)}
                r={4}
                fill="#1B2A4A"
              />
              <text
                x={toSVGX(landscape.yourPosition.axisX) + 14}
                y={toSVGY(landscape.yourPosition.axisY) + 4}
                fill="#1B2A4A"
                fontSize="10"
                fontWeight="700"
                fontFamily="var(--font-mono, monospace)"
              >
                {landscape.yourPosition.name} (you)
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Hover/selected detail card */}
      {activeComp && (
        <div className="absolute top-4 right-4 w-64 bg-white border border-[#E2E1DE] rounded-lg shadow-lg p-4 z-10">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: TIER_COLORS[activeComp.tier] }}
                />
                <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#9BA8B4] uppercase tracking-wider">
                  {TIER_LABELS[activeComp.tier]}
                </span>
              </div>
              <h4 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#1B2A4A]">
                {activeComp.name}
              </h4>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="text-[#9BA8B4] hover:text-[#1B2A4A] ml-2 flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {activeComp.description && (
            <p className="text-xs text-[#6B7280] mb-3 leading-relaxed">{activeComp.description}</p>
          )}
          {activeComp.strengths.length > 0 && (
            <div className="mb-2">
              <p className="text-[10px] font-semibold text-[#9BA8B4] uppercase tracking-wider mb-1">Strengths</p>
              <ul className="space-y-0.5">
                {activeComp.strengths.map((s, i) => (
                  <li key={i} className="text-xs text-[#1B2A4A] flex items-start gap-1">
                    <span className="text-[#4A6FA5] mt-0.5">+</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeComp.weaknesses.length > 0 && (
            <div className="mb-2">
              <p className="text-[10px] font-semibold text-[#9BA8B4] uppercase tracking-wider mb-1">Weaknesses</p>
              <ul className="space-y-0.5">
                {activeComp.weaknesses.map((w, i) => (
                  <li key={i} className="text-xs text-[#1B2A4A] flex items-start gap-1">
                    <span className="text-[#C1440E] mt-0.5">−</span> {w}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[#E2E1DE]">
            <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#9BA8B4]">
              X: {activeComp.axisX} / Y: {activeComp.axisY}
            </span>
            <span
              className="ml-auto text-[10px] font-[family-name:var(--font-mono)] px-1.5 py-0.5 rounded"
              style={{
                backgroundColor: activeComp.confidence === 'high' ? '#DCFCE7' : activeComp.confidence === 'medium' ? '#FEF9C3' : '#FEE2E2',
                color: activeComp.confidence === 'high' ? '#166534' : activeComp.confidence === 'medium' ? '#854D0E' : '#991B1B',
              }}
            >
              {activeComp.confidence} confidence
            </span>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-3 flex items-center gap-5 flex-wrap">
        {(Object.entries(TIER_COLORS) as [CompetitorTier, string][]).map(([tier, color]) => (
          <div key={tier} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
            <span className="text-xs font-[family-name:var(--font-mono)] text-[#6B7280]">{TIER_LABELS[tier]}</span>
          </div>
        ))}
        {landscape.yourPosition && (
          <div className="flex items-center gap-1.5">
            <svg className="w-3 h-3" viewBox="0 0 12 12">
              <circle cx="6" cy="6" r="5" fill="none" stroke="#1B2A4A" strokeWidth="1.5" strokeDasharray="2 1" />
              <circle cx="6" cy="6" r="2" fill="#1B2A4A" />
            </svg>
            <span className="text-xs font-[family-name:var(--font-mono)] text-[#6B7280]">Your position</span>
          </div>
        )}
      </div>
    </div>
  )
}
