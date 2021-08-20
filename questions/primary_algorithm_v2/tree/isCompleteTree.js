/*
 * Desc: 二叉树的完全性检验
 * File: /isCompleteTree.js
 * Project: tree
 * File Created: Friday, 24th April 2020 2:11:39 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
给定一个二叉树，确定它是否是一个完全二叉树。

百度百科中对完全二叉树的定义如下：

若设二叉树的深度为 h，除第 h 层外，其它各层 (1～h-1) 的结点数都达到最大个数，第 h 层所有的结点都连续集中在最左边，这就是完全二叉树。（注：第 h 层可能包含 1~ 2h 个节点。）



示例 1：



输入：[1,2,3,4,5,6]
输出：true
解释：最后一层前的每一层都是满的（即，结点值为 {1} 和 {2,3} 的两层），且最后一层中的所有结点（{4,5,6}）都尽可能地向左。
示例 2：



输入：[1,2,3,4,5,null,7]
输出：false
解释：值为 7 的结点没有尽可能靠向左侧。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/check-completeness-of-a-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var maxDepth = function (root) {
  if (root === null) return 0;
  let depth = 1;
  depth = depth + Math.max(maxDepth(root.left), maxDepth(root.right));
  return depth;
};


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root, depth = maxDepth(root), lastQueueArr = []) {

  const lastQueue = lastQueueArr || [];
  if (depth > 2) {
    if (!root.left || !root.right) return false;
  } else {
    // 收集最后一层节点（叶子）
    lastQueue.push(root.left, root.right);
    // console.log(lastQueue);
    var findNullIndex = lastQueue.findIndex(item => item === null);
    // console.log('findNullIndex', findNullIndex);
    if (~findNullIndex && lastQueue.slice(findNullIndex + 1).length > 0 && lastQueue.slice(findNullIndex + 1).some(item => !!item)) {
      return false;
    }
    return true;
  }

  if (!isCompleteTree(root.left, depth - 1, lastQueue) || !isCompleteTree(root.right, depth - 1, lastQueue)) return false;
  return true;

};

const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    right: {
      val: 7,
      left: null,
      right: null
    },
    left: {
      val: 8,
      left: null,
      right: null
    },
  }

}

console.log(isCompleteTree(tree));
