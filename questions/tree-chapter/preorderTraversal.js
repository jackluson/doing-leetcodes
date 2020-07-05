/*
 * Desc:   二叉树的前序遍历
 * File: /preorderTraversal.js
 * Project: tree
 * File Created: Saturday, 2nd May 2020 10:39:29 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
给定一个二叉树，返回它的 前序 遍历。

示例:

输入: [1,null,2,3]
  1
   \
    2
   /
  3

输出: [1,2,3]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {



  return root ? [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] : [];
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
console.log(preorderTraversal(root))
