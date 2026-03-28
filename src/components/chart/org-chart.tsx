'use client'

import { forwardRef, useCallback, useEffect, useState } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import ELK from 'elkjs/lib/elk.bundled.js'
import type { OrganizationDTO, TemplateTokens } from '@/types'
import { TEMPLATES } from '@/types'
import { OrgNode } from './org-node'
import type { OrgNodeData } from './org-node'

const elk = new ELK()

const nodeTypes = {
  orgNode: OrgNode,
}

interface OrgChartProps {
  organization: OrganizationDTO
  templateId?: keyof typeof TEMPLATES
  onNodeClick?: (personId: string) => void
}

async function layoutWithElk(
  org: OrganizationDTO,
  template: TemplateTokens
): Promise<{ nodes: Node[]; edges: Edge[] }> {
  const people = Object.values(org.people)
  const deptMap = org.departments

  const elkNodes = people.map(p => ({
    id: p.id,
    width: template.node.width,
    height: template.node.height,
  }))

  const elkEdges = people
    .filter(p => p.reportsTo && org.people[p.reportsTo])
    .map(p => ({
      id: `e-${p.reportsTo}-${p.id}`,
      sources: [p.reportsTo!],
      targets: [p.id],
    }))

  const elkGraph = {
    id: 'root',
    layoutOptions: {
      'elk.algorithm': 'layered',
      'elk.direction': 'DOWN',
      'elk.spacing.nodeNode': '60',
      'elk.layered.spacing.nodeNodeBetweenLayers': '80',
      'elk.layered.considerModelOrder.strategy': 'PREFER_EDGES',
      'elk.layered.crossingMinimization.strategy': 'LAYER_SWEEP',
    },
    children: elkNodes,
    edges: elkEdges,
  }

  const layout = await elk.layout(elkGraph)

  const nodes: Node[] = (layout.children || []).map(n => {
    const person = org.people[n.id]
    const dept = person.department ? deptMap[person.department] : null

    return {
      id: n.id,
      type: 'orgNode',
      position: { x: n.x || 0, y: n.y || 0 },
      data: {
        name: person.name,
        title: person.normalizedTitle || person.rawTitle,
        department: person.department,
        departmentColor: dept?.color || '',
        confidence: person.reportsToConfidence,
        confidenceSource: person.reportsToSource,
        isRoot: org.rootIds.includes(person.id),
        directReportCount: person.directReports.length,
        flags: person.flags,
        template,
      } satisfies OrgNodeData,
    }
  })

  const edges: Edge[] = elkEdges.map(e => ({
    id: e.id,
    source: e.sources[0],
    target: e.targets[0],
    type: template.edge.type,
    style: {
      stroke: template.colors.edgeColor,
      strokeWidth: template.edge.strokeWidth,
    },
    animated: template.edge.animated,
  }))

  return { nodes, edges }
}

export const OrgChart = forwardRef<HTMLDivElement, OrgChartProps>(
  function OrgChart({ organization, templateId = 'editorial-classic', onNodeClick }, ref) {
    const template = TEMPLATES[templateId]
    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([])
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([])
    const [layoutDone, setLayoutDone] = useState(false)

    useEffect(() => {
      layoutWithElk(organization, template).then(({ nodes: n, edges: e }) => {
        setNodes(n)
        setEdges(e)
        setLayoutDone(true)
      })
    }, [organization, template, setNodes, setEdges])

    const handleNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
      onNodeClick?.(node.id)
    }, [onNodeClick])

    if (!layoutDone) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-3 border-2 border-[#0D7377] border-t-transparent rounded-full animate-spin" />
            <p className="text-[#6B7280] text-sm">Laying out chart...</p>
          </div>
        </div>
      )
    }

    return (
      <div ref={ref} style={{ width: '100%', height: '100%' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={handleNodeClick}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          minZoom={0.1}
          maxZoom={2}
          proOptions={{ hideAttribution: true }}
        >
          <Background color={template.colors.border} gap={20} size={1} />
          <Controls
            style={{
              background: template.colors.surface,
              border: `1px solid ${template.colors.border}`,
              borderRadius: 6,
            }}
          />
          <MiniMap
            nodeColor={(node) => {
              const data = node.data as unknown as OrgNodeData
              return data.departmentColor || template.colors.accent
            }}
            style={{
              background: template.colors.surface,
              border: `1px solid ${template.colors.border}`,
              borderRadius: 6,
            }}
          />
        </ReactFlow>
      </div>
    )
  }
)
