/*
 * Desc: 二叉树的最大深度
 * File: /maxDepth.js
 * Project: tree
 * File Created: Wednesday, 15th April 2020 5:52:54 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

   3
  / \
 9  20
   /  \
  15   7
返回它的最大深度 3 。
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
 * @return {number}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var maxDepth = function (root) {
  console.log(root)
  if (root === null) return 0;
  let depth = 1;
  depth = depth + Math.max(maxDepth(root.left), maxDepth(root.right));
  return depth;
};

// const tem

const root = {
  val: 3,
  left: new TreeNode(9),
  right: {
    val: 20,
    left: new TreeNode(15),
    right: new TreeNode(7),
  },
}
console.log(maxDepth(root))
