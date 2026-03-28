import type { TemplateId } from './session'

export interface TemplateTokens {
  id: TemplateId
  name: string
  description: string
  colors: {
    background: string
    surface: string
    text: string
    textSecondary: string
    accent: string
    border: string
    nodeBackground: string
    nodeBorder: string
    nodeText: string
    edgeColor: string
    highlightedEdge: string
  }
  typography: {
    fontFamily: string
    titleFontFamily: string
    fontSize: number
    titleFontSize: number
    fontWeight: number
    titleFontWeight: number
  }
  node: {
    width: number
    height: number
    borderRadius: number
    borderWidth: number
    shadow: string
    padding: number
  }
  edge: {
    type: 'smoothstep' | 'bezier' | 'straight'
    strokeWidth: number
    animated: boolean
  }
}

export const TEMPLATES: Record<TemplateId, TemplateTokens> = {
  'executive-dark': {
    id: 'executive-dark',
    name: 'Executive Dark',
    description: 'Charcoal & gold — C-suite presentations',
    colors: {
      background: '#1a1a2e',
      surface: '#232340',
      text: '#f0f0f0',
      textSecondary: '#9ca3af',
      accent: '#d4a853',
      border: '#2d2d4a',
      nodeBackground: '#232340',
      nodeBorder: '#d4a853',
      nodeText: '#f0f0f0',
      edgeColor: '#4a4a6a',
      highlightedEdge: '#d4a853',
    },
    typography: {
      fontFamily: "'Public Sans', sans-serif",
      titleFontFamily: "'EB Garamond', serif",
      fontSize: 13,
      titleFontSize: 15,
      fontWeight: 400,
      titleFontWeight: 600,
    },
    node: {
      width: 220,
      height: 90,
      borderRadius: 4,
      borderWidth: 1,
      shadow: '0 4px 12px rgba(0,0,0,0.3)',
      padding: 16,
    },
    edge: { type: 'smoothstep', strokeWidth: 1.5, animated: false },
  },
  'clean-minimal': {
    id: 'clean-minimal',
    name: 'Clean Minimal',
    description: 'Light & spacious — modern companies',
    colors: {
      background: '#fafafa',
      surface: '#ffffff',
      text: '#1a1a1a',
      textSecondary: '#6b7280',
      accent: '#2563eb',
      border: '#e5e7eb',
      nodeBackground: '#ffffff',
      nodeBorder: '#e5e7eb',
      nodeText: '#1a1a1a',
      edgeColor: '#d1d5db',
      highlightedEdge: '#2563eb',
    },
    typography: {
      fontFamily: "'Public Sans', sans-serif",
      titleFontFamily: "'Public Sans', sans-serif",
      fontSize: 13,
      titleFontSize: 15,
      fontWeight: 400,
      titleFontWeight: 600,
    },
    node: {
      width: 200,
      height: 80,
      borderRadius: 8,
      borderWidth: 1,
      shadow: '0 1px 3px rgba(0,0,0,0.08)',
      padding: 14,
    },
    edge: { type: 'smoothstep', strokeWidth: 1, animated: false },
  },
  'editorial-classic': {
    id: 'editorial-classic',
    name: 'Editorial Classic',
    description: 'Serif & structured — McKinsey-report styling',
    colors: {
      background: '#f5f3ef',
      surface: '#fffffe',
      text: '#1a1a1a',
      textSecondary: '#6b7280',
      accent: '#0d7377',
      border: '#e2e1de',
      nodeBackground: '#fffffe',
      nodeBorder: '#d4d3cf',
      nodeText: '#1a1a1a',
      edgeColor: '#c5c4c0',
      highlightedEdge: '#0d7377',
    },
    typography: {
      fontFamily: "'Public Sans', sans-serif",
      titleFontFamily: "'EB Garamond', serif",
      fontSize: 13,
      titleFontSize: 16,
      fontWeight: 400,
      titleFontWeight: 600,
    },
    node: {
      width: 220,
      height: 90,
      borderRadius: 2,
      borderWidth: 1,
      shadow: '0 1px 2px rgba(0,0,0,0.06)',
      padding: 16,
    },
    edge: { type: 'smoothstep', strokeWidth: 1, animated: false },
  },
  'branded-report': {
    id: 'branded-report',
    name: 'Branded Report',
    description: 'Customizable — white-label deliverables',
    colors: {
      background: '#f8f9fa',
      surface: '#ffffff',
      text: '#212529',
      textSecondary: '#6c757d',
      accent: '#0d7377',
      border: '#dee2e6',
      nodeBackground: '#ffffff',
      nodeBorder: '#dee2e6',
      nodeText: '#212529',
      edgeColor: '#ced4da',
      highlightedEdge: '#0d7377',
    },
    typography: {
      fontFamily: "'Public Sans', sans-serif",
      titleFontFamily: "'Public Sans', sans-serif",
      fontSize: 13,
      titleFontSize: 15,
      fontWeight: 400,
      titleFontWeight: 600,
    },
    node: {
      width: 210,
      height: 85,
      borderRadius: 6,
      borderWidth: 1,
      shadow: '0 2px 4px rgba(0,0,0,0.06)',
      padding: 14,
    },
    edge: { type: 'smoothstep', strokeWidth: 1, animated: false },
  },
}
