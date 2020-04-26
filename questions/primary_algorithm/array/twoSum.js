/*
 * Desc: 两数之和
 * File: /twoSum.js
 * Project: primary_algorithm
 * File Created: Saturday, 11th April 2020 9:59:55 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
要求：
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/

/**
 * 思路： 审题，只有一个答案，必定有目标值
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    var element = nums[index];
    var diff = target - element;// 关键一步
    var diffIndex = nums.indexOf(diff, index + 1) // 从index+1开始
    if (~diffIndex) {
      return [index, diffIndex];
    }
  }
};

var nums = [2, 7, 7, 11, 15];
var target = 14;
console.log(twoSum(nums, target));
