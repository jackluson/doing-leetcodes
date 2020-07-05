
/*
 * Desc: 对称二叉树
 * File: /isSymmetric.js
 * Project: dynamicProgramming
 * File Created: Sunday, 3rd May 2020 1:39:33 am
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */
/*
给定一个二叉树，检查它是否是镜像对称的。



例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3


但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let res = true, arr = [];
  if (root === null) return true;
  if (root.left && root.right) {
    root.left && arr.push(root.left);
    root.right && arr.push(root.right);
  }
  if ((root.left === null || root.right === null)) {
    return false;
  }

  while (arr.length > 0) {
    // let n = arr.length;
    // while (n > 0) {
    var first = arr.shift();
    var last = arr.shift();
    console.log('arr', arr)
    // n = n - 2;
    if (!last && !first) continue;
    if ((first === null || last === null)) {
      return false;
    }
    if (first.val !== last.val) {
      return false;
    }

    arr.push(first.left)
    arr.push(last.right)
    arr.push(first.right)
    arr.push(last.left)
    // }
  };
  return res;

}
const root = {
  val: 1,
  left: {
    val: 2,
    left: new TreeNode(0),
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: new TreeNode(0),
  },
}
console.log(isSymmetric(root))
