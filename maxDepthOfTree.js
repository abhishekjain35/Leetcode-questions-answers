var maxDepth = function (root) {
    if (!root) return 0;
    let max = 0;
    function depthChecker(s, depth) {
        if (!s.left && !s.right) {
            max = Math.max(depth, max);
            return depth;
        }
        if (s.left) {
            depthChecker(s.left, depth + 1);
        }
        if (s.right) {
            depthChecker(s.right, depth + 1);
        }
    }
    depthChecker(root, 1);
    return max;
};


/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its depth = 3.

*/