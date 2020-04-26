/*
 * Desc:旋转数组
 * File: /rotateArray.js
 * Project: primary_algorithm
 * File Created: Saturday, 11th April 2020 6:37:15 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
要求：
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
 */

/**
* @param {number[]} nums
* @param {number} k
* @return {void} Do not return anything, modify nums in-place instead.
*/
var rotate = function (nums, k) {
  if (k < 1) return;
  // 解法一：
  // let count = k;
  // while (k < 0) {
  //   nums.unshift(nums.pop);
  //   count = count - 1;
  // }

  // 解法二：
  const rear = nums.splice(-(k % nums.length));
  nums.unshift(...rear)
};

var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const len = rotate(nums, 3);
console.log(len, nums);
