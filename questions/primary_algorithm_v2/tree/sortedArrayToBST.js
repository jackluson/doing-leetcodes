/*
 * Desc: 将有序数组转换为二叉搜索树
 * File: /sortedArrayToBST.js
 * Project: tree
 * File Created: Friday, 8th May 2020 11:06:10 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
将有序数组转换为二叉搜索树
将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;
  const mid = Math.floor(nums.length / 2)
  // if (root) {

  // }
  const root = new TreeNode(nums[mid])
  //  左节点
  if (mid > 0) {
    root.left = sortedArrayToBST(nums.slice(0, mid))
  }
  // 右节点
  if (mid < nums.length - 1) {
    root.right = sortedArrayToBST(nums.slice(mid + 1, nums.length))
  }
  return root;
};

const nums = [-10, -3, 0, 5, 9, 10]
const bst = sortedArrayToBST(nums)

