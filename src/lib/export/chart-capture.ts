import { toPng } from 'html-to-image'

/**
 * Capture the React Flow chart DOM element as a PNG data URL.
 * Filters out controls, minimap, and attribution overlays.
 * Uses 2x pixel ratio for retina-quality output.
 */
export async function captureChartAsImage(
  element: HTMLElement,
  backgroundColor: string
): Promise<string> {
  return toPng(element, {
    backgroundColor,
    pixelRatio: 2,
    filter: (node: HTMLElement) => {
      // Skip controls, minimap, attribution panels
      const cls = node.classList
      if (!cls) return true
      if (
        cls.contains('react-flow__controls') ||
        cls.contains('react-flow__minimap') ||
        cls.contains('react-flow__attribution') ||
        cls.contains('react-flow__panel')
      ) {
        return false
      }
      return true
    },
  })
}
