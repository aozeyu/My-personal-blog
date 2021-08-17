/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * 左根右
 * @param {TreeNode} root
 * @return {number[]}
 * 取跟节点为目标节点，开始遍历
1.左孩子入栈 -> 直至左孩子为空的节点
2.节点出栈 -> 访问该节点
3.以右孩子为目标节点，再依次执行1、2、3
 */
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left; // 左孩子入栈
    }
    current = stack.pop(); // 节点出栈
    result.push(current.val); // 访问值
    current = current.right;
  }
  return result;
};
// @lc code=end
