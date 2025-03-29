// 199. Binary Tree Right Side View

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

function rightSideView(root: TreeNode | null): number[] {
    if (!root) return []
    let queue = [root] 
    let arr = []

    while (queue.length) {
        let lvl = queue.length
        for (let i = 0; i < lvl; i++) {
            let current = queue.shift()!
            if (i === 0) arr.push(current.val)

            if (current.right) queue.push(current.right)
            if (current.left) queue.push(current.left)
        }
    }
    return arr
};
