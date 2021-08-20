/*
 * Desc: 验证二叉搜索树
 * File: /isValidBST.js
 * Project: tree
 * File Created: Sunday, 19th April 2020 10:04:15 am
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例 1:

输入:
   2
  / \
 1   3
输出: true
示例 2:

输入:
   5
  / \
 1   4
    / \
   3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
    根节点的值为 5 ，但是其右子节点值为 4 。
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isValidBST = function (root, upper, lowwer) {

//   if (!root) return true;
//   upper = typeof upper === 'number' ? upper : root.right.val;
//   lowwer = typeof lowwer === 'number' ? lowwer : root.val;

//   const val = root.val;
//   if (val <= lowwer || val > upper) return false;

//   let flag = isValidBST(root.left, lowwer, val);
//   if (!flag) return false;

//   flag = isValidBST(root.right, upper, val);
//   if (!flag) return false;

//   return true;
// };

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// 右孩子一定大于根，左孩子一定小于根；
// 需要再附加条件：任意节点的值必须大于其左子树的最右节点；同时小于右子树的最左节点。从根节点开始检查，一旦发现不满足则返回false。
// min 先设置min = Infinity，这个首次判断root，root.right.val >= min不进入， max = -Infinity，另 max >= root.left.val
var isValidBST = function (root, min = Infinity, max = -Infinity) {
  if (!root) return true;
  const val = root.val;

  if (root.right && (root.right.val <= val || root.right.val >= min)) {
    return false;
  }
  if (root.left && (root.left.val >= val || max >= root.left.val)) {
    return false;
  }
  // if (root.right.val <= val || root.left.val >= val) return false;
  // if (min <= root.right.val || max >= root.left.val) return false;

  return isValidBST(root.left, val, max) && isValidBST(root.right, min, val);

}

const root = {
  val: 0,
  left: {
    val: -1,
    left: {
      val: -3,
      left: new TreeNode(-5),
      right: new TreeNode(-2)
    },
    right: new TreeNode(-0.5),
  },
  right: {
    val: 4,
    left: new TreeNode(3),
    // right: {
    //   val: 2,
    //   right: new TreeNode(5),
    // }
    right: new TreeNode(5),
  },
}
console.log(isValidBST(root))
