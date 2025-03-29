// 1372. Longest ZigZag Path in a Binary Tree 

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function longestZigZag(root: TreeNode | null): number { 
    let max = 0

    function zigZag (node, string: string, count) {
        if (!node) return 0

        max = Math.max(count, max)

        if (string === 'left') {
            zigZag(node.left, 'left', 1)
            zigZag(node.right, 'right', count + 1)

        } else {
            zigZag(node.right, 'right', 1)
            zigZag(node.left, 'left', count + 1)
        }
    }
    if (root.left) zigZag(root.left, 'left', 1)
    if (root.right) zigZag(root.right, 'right', 1)

    return max
}