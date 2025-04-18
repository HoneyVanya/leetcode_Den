// 450. Delete Node in a BST
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
function deleteNode(root, key) {
    if (!root)
        return null;
    if (root.val === key) {
        if (!root.left && !root.right)
            return null;
        if (!root.left)
            return root.right;
        if (!root.right)
            return root.left;
        let temp = root.right;
        while (temp.left) {
            temp = temp.left;
        }
        root.val = temp.val;
        root.right = deleteNode(root.right, temp.val);
    }
    else if (key < root.val) {
        root.left = deleteNode(root.left, key);
    }
    else {
        root.right = deleteNode(root.right, key);
    }
    return root;
}
;
