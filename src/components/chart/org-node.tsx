'use client'

import { memo } from 'react'
import { Handle, Position } from '@xyflow/react'
import type { TemplateTokens } from '@/types'
import type { ConfidenceLevel } from '@/types'

export interface OrgNodeData {
  name: string
  title: string
  department: string | null
  departmentColor: string
  confidence: ConfidenceLevel
  confidenceSource: string
  isRoot: boolean
  directReportCount: number
  flags: string[]
  template: TemplateTokens
}

function OrgNodeComponent({ data }: { data: OrgNodeData }) {
  const t = data.template
  const confidenceColor = data.confidence === 'high' ? '#059669' : data.confidence === 'medium' ? '#D97706' : '#DC2626'

  return (
    <div
      style={{
        width: t.node.width,
        minHeight: t.node.height,
        background: t.colors.nodeBackground,
        border: `${t.node.borderWidth}px solid ${t.colors.nodeBorder}`,
        borderRadius: t.node.borderRadius,
        boxShadow: t.node.shadow,
        padding: t.node.padding,
        fontFamily: t.typography.fontFamily,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Department color strip */}
      {data.departmentColor && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 3,
            height: '100%',
            background: data.departmentColor,
          }}
        />
      )}

      {/* Content */}
      <div style={{ paddingLeft: data.departmentColor ? 8 : 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <span
            style={{
              fontFamily: t.typography.titleFontFamily,
              fontSize: t.typography.titleFontSize,
              fontWeight: t.typography.titleFontWeight,
              color: t.colors.nodeText,
              lineHeight: 1.2,
            }}
          >
            {data.name}
          </span>
          {!data.isRoot && data.confidence !== 'high' && (
            <span
              title={`${data.confidence} confidence — ${data.confidenceSource}`}
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: confidenceColor,
                flexShrink: 0,
              }}
            />
          )}
        </div>
        <div
          style={{
            fontSize: t.typography.fontSize - 1,
            color: t.colors.textSecondary,
            lineHeight: 1.3,
            marginBottom: 4,
          }}
        >
          {data.title}
        </div>
        {data.department && (
          <div
            style={{
              fontSize: t.typography.fontSize - 2,
              color: t.colors.textSecondary,
              opacity: 0.7,
            }}
          >
            {data.department}
            {data.directReportCount > 0 && (
              <span style={{ marginLeft: 8 }}>
                {data.directReportCount} report{data.directReportCount !== 1 ? 's' : ''}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Flags */}
      {data.flags.length > 0 && (
        <div style={{ position: 'absolute', top: 4, right: 4 }}>
          <span
            title={data.flags.join(', ')}
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#D97706',
              display: 'block',
            }}
          />
        </div>
      )}

      {!data.isRoot && (
        <Handle type="target" position={Position.Top} style={{ background: t.colors.edgeColor, width: 6, height: 6, border: 'none' }} />
      )}
      <Handle type="source" position={Position.Bottom} style={{ background: t.colors.edgeColor, width: 6, height: 6, border: 'none' }} />
    </div>
  )
}

export const OrgNode = memo(OrgNodeComponent)
