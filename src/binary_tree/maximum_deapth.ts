// 104. Maximum depth of binary tree 

// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
// }
// }
 
function maxDepth(root: TreeNode | null): number {
    let stuck: [TreeNode | null, number][] = [[root, 1]]
    let maxDepth = 0

    while(stuck.length) {
        let [current, depth] = stuck.pop()

        maxDepth = Math.max(maxDepth, depth)

        if (current.left) stuck.push([current.left, depth + 1])
        
        if (current.right) stuck.push([current.right, depth + 1])
    }
    return maxDepth
 };