// 1161. Maximum Level Sum of a Binary Tree

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

function maxLevelSum(root: TreeNode | null): number {
    let queue = [root]
    let floor = 1
    let max = -Infinity
    let res = 0
    
    while (queue.length) {
        let lvl = queue.length
        let sum = 0
        while (lvl > 0) {
            let current = queue.shift()
            sum += current.val

            if(current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
            lvl--

        }
        if (max < sum) {
            max = sum
            res = floor
        }
        floor++
    }
    return res
};