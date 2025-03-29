// 700. Search in a Binary Search Tree


class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    let current = root 

    while (current) {
        if (current.val === val) return current
        if (current.val > val) current = current.left
        else current = current.right
    }
    return current

};