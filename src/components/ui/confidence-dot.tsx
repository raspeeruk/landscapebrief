import { clsx } from 'clsx'
import type { ConfidenceLevel } from '@/types'

interface ConfidenceDotProps {
  confidence: ConfidenceLevel
  score?: number
  showTooltip?: boolean
  reasoning?: string
  size?: 'sm' | 'md'
}

export function ConfidenceDot({ confidence, score, showTooltip = true, reasoning, size = 'sm' }: ConfidenceDotProps) {
  return (
    <span className="relative group inline-flex items-center gap-1">
      <span
        className={clsx(
          'rounded-full',
          {
            'w-2 h-2': size === 'sm',
            'w-3 h-3': size === 'md',
          },
          {
            'bg-[#059669]': confidence === 'high',
            'bg-[#D97706]': confidence === 'medium',
            'bg-[#DC2626]': confidence === 'low',
          }
        )}
      />
      {score !== undefined && (
        <span className="font-[family-name:var(--font-mono)] text-[11px] text-[#6B7280]">
          {score}%
        </span>
      )}
      {showTooltip && reasoning && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#1A1A1A] text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 max-w-xs">
          {reasoning}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1A1A1A]" />
        </span>
      )}
    </span>
  )
}
