/*
 * Desc: 二叉树的层序遍历
 * File: /levelOrder.js
 * Project: tree
 * File Created: Saturday, 2nd May 2020 11:34:47 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */
/*
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。



示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [],
    arr = [];
  root && arr.push(root);
  while (arr.length > 0) {
    // let n = arr.length;
    // console.log("n ", n);
    // let nowLevel = [];

    // while (n > 0) {
    var node = arr.shift();
    res.push(node.val);
    node.left && arr.push(node.left);
    node.right && arr.push(node.right);
    // n--;
    // }
    // res.push(nowLevel);
  }
  return res;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: new TreeNode(4),
    right: new TreeNode(5),
  },
  right: {
    val: 3,
    left: new TreeNode(6),
    right: null,
  },
};
console.log(levelOrder(root));
