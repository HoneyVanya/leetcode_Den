// 872. Leaf-similar trees

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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let stuck1 = [root1]
    let stuck2 = [root2]
    let leafs1 = []
    let leafs2 = []

    function collectLeafs(stuck, leafs) {
        while(stuck.length) {
            let current = stuck.pop()
            if (!current.right && !current.left) leafs.push(current.val)
            if (current.right) stuck.push(current.right)
            if (current.left) stuck.push(current.left)
        }
    }

    collectLeafs(stuck1, leafs1)
    collectLeafs(stuck2, leafs2)

    if (leafs1.length !== leafs2.length) return false

    for (let i = 0; i < leafs1.length; i++) {
        if(leafs1[i] !== leafs2[i]) return false
    }
    return true

};