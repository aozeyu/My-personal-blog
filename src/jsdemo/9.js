//先序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 先序遍历为：根节点 -> 前序遍历左子树 -> 前序遍历右子树(根左右)
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function (root) {
  const result = []
  function pre(root) {
    if (root !== null) {
      result.push(root.val) //将根节点的值放入数组
      pre(root.left)
      pre(root.right)
    }
  }
  pre(root) // 先遍历根节点
  return result
}


//中序遍历为：中序遍历左子树 -> 根结点 -> 中序遍历右子树(左根右)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function (root) {
  const result = []
  function inorder(root) {
    if (root !== null) {
      //中序遍历左子树
      inorder(root.left)
      result.push(root.val)
      inorder(root.right)
    }
  }
  inorder(root)
  return result
}


//后序遍历为：后序遍历左子树 -> 后序遍历右子树 -> 根结点(左右根)

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var postinorderTraversal = function (root) {
  const result = []
  function postinorder(root) {
    if (root !== null) {
      postinorder(root.left)
      postinorder(root.right)
      result.push(root.val)
    }
  }
  postinorder(root)
  return result
}

