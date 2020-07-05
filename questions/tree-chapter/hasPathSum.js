/*
 * Desc: 路径总和
 * File: /hasPathSum.js
 * Project: tree-chapter
 * File Created: Sunday, 3rd May 2020 6:07:55 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例:
给定如下二叉树，以及目标和 sum = 22，

             5
            / \
           4   8
          /   / \
         11  13  4
        /  \      \
       7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root === null) return false;
  if (root.left === null && root.right === null) {
    return root.val === sum
  }
  return hasPathSum(root.left, (sum - root.val)) || hasPathSum(root.right, (sum - root.val))
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: new TreeNode(7),
      right: new TreeNode(2),
    },
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: new TreeNode(0),
  },
}
console.log(hasPathSum(root, 22))
