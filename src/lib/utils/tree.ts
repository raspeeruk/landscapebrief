import type { Person, OrganizationDTO } from '@/types'

export interface TreeNode {
  person: Person
  children: TreeNode[]
  depth: number
}

/**
 * Build a tree structure from flat organization data
 */
export function buildTree(org: OrganizationDTO): TreeNode[] {
  const roots: TreeNode[] = []
  const nodeMap = new Map<string, TreeNode>()

  // Create nodes
  for (const [id, person] of Object.entries(org.people)) {
    nodeMap.set(id, { person, children: [], depth: 0 })
  }

  // Link children to parents
  for (const [id, person] of Object.entries(org.people)) {
    const node = nodeMap.get(id)!
    if (person.reportsTo && nodeMap.has(person.reportsTo)) {
      const parent = nodeMap.get(person.reportsTo)!
      parent.children.push(node)
    } else if (org.rootIds.includes(id)) {
      roots.push(node)
    }
  }

  // Calculate depths
  function setDepth(node: TreeNode, depth: number) {
    node.depth = depth
    for (const child of node.children) {
      setDepth(child, depth + 1)
    }
  }
  roots.forEach(r => setDepth(r, 0))

  return roots
}

/**
 * Count total nodes in tree
 */
export function countNodes(nodes: TreeNode[]): number {
  let count = 0
  for (const node of nodes) {
    count += 1 + countNodes(node.children)
  }
  return count
}

/**
 * Flatten tree to array with depth info
 */
export function flattenTree(nodes: TreeNode[]): TreeNode[] {
  const result: TreeNode[] = []
  for (const node of nodes) {
    result.push(node)
    result.push(...flattenTree(node.children))
  }
  return result
}
