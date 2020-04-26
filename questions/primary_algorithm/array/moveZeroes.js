/*
 * Desc: 移动零
 * File: /moveZeroes.js
 * Project: primary_algorithm
 * File Created: Saturday, 11th April 2020 9:49:17 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
要求：
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var zeroCount = 0;
  for (let index = 0; index < (nums.length - zeroCount); index) {
    if (nums[index] === 0) {
      nums.splice(index, 1);
      nums.push(0);
      zeroCount++;
    } else {
      index++;
    }
  }
};

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums)
