/*
 * Desc: 二叉树的后序遍历
 * File: /postorderTraversal.js
 * Project: tree
 * File Created: Saturday, 2nd May 2020 11:29:00 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
给定一个二叉树，返回它的 后序 遍历。

示例:

输入: [1,null,2,3]
  1
   \
    2
   /
  3

输出: [3,2,1]
*/


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {

  return root ? [...postorderTraversal(root.right), ...postorderTraversal(root.left), root.val] : []

};


const root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: new TreeNode(3),
    right: null,
  },
}
console.log(postorderTraversal(root))
