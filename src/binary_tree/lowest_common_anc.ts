// 236. Lowest Common Ancestor of a Binary Tree

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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	function dfs (node) {
        if (!node) return null
        if (p === node || q === node) return node 

        const left = dfs(node.left)
        const right = dfs(node.right)

        if (left && right) return node
        return left || right
    }
    return dfs(root)
};
