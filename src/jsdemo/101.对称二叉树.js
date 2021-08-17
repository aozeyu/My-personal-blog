/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 两个根结点相等
左子树的右节点和右子树的左节点相同。
右子树的左节点和左子树的右节点相同。
 */
function isSymmetrical(root) {
  return isSymmetricalTree(root, root);
}

function isSymmetricalTree(node1, node2) {
  if (!node1 && !node2) {
    return true;
  }
  if (!node1 || !node2) {
    return false;
  }
  if (node1.val != node2.val) {
    return false;
  }
  return isSymmetricalTree(node1.left, node2.right) && isSymmetricalTree(node1.right, node2.left);
}
// @lc code=end
