// 437. Path Sum III
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
function pathSum(root, targetSum) {
    if (!root)
        return 0;
    function rootSum(node, sum) {
        if (!node)
            return 0;
        let newSum = sum + node.val;
        let match = 0;
        if (newSum === targetSum)
            match = 1;
        else
            match = 0;
        return match + rootSum(node.left, newSum) + rootSum(node.right, newSum);
    }
    return (rootSum(root, 0) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum));
}
