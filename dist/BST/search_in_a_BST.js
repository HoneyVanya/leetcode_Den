// 700. Search in a Binary Search Tree
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function searchBST(root, val) {
    let current = root;
    while (current) {
        if (current.val === val)
            return current;
        if (current.val > val)
            current = current.left;
        else
            current = current.right;
    }
    return current;
}
;
