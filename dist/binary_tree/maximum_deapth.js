// 104. Maximum depth of binary tree 
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function maxDepth(root) {
    let stuck = [[root, 1]];
    let maxDepth = 0;
    while (stuck.length) {
        let [current, depth] = stuck.pop();
        maxDepth = Math.max(maxDepth, depth);
        if (current.left)
            stuck.push([current.left, depth + 1]);
        if (current.right)
            stuck.push([current.right, depth + 1]);
    }
    return maxDepth;
}
;
const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(maxDepth(root));
