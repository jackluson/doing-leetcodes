/*
 * Desc: 存在重复元素
 * File: /containsDuplicate.js
 * Project: primary_algorithm
 * File Created: Saturday, 11th April 2020 7:02:28 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
要求：
给定一个整数数组，判断是否存在重复元素。

如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
 */


/**
* @param {number[]} nums
* @return {boolean}
*/
var containsDuplicate = function (nums) {
  // 解法1:
  // return nums.length > new Set(nums).size;
  // 解法2:
  for (let i = 0; i < nums.length; i++) {
    var preNums = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (preNums === nums[j]) {
        return true;
      }
    }
  }

  // 其他思路：利用includes，或者indexOf方法
  return false;
};
