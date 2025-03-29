// 1448. Count good nodes in a binary tree 

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

function goodNodes(root: TreeNode | null): number {
    let goodOnes = 0

    function rootExplorer (node, max) {
        if (!node) return 
        if(node.val >= max) {
            goodOnes++
            max = node.val
        }
        rootExplorer(node.right, max)
        rootExplorer(node.left, max)
        
    }
    rootExplorer(root, root.val)
    return goodOnes
};