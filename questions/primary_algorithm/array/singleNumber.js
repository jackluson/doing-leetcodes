/*
 * Desc:只出现一次的数字
 * File: /singleNumber.js
 * Project: primary_algorithm
 * File Created: Saturday, 11th April 2020 7:19:15 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4

*/

/**
 * 思路：只有一个元素出现一次，其他的均出现两次（不能大于2次）
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // let singleNum = nums[0];
  // for (let index = 1; index < nums.length; index++) {
  //   let findIndex = nums.indexOf(singleNum, index);
  //   if (findIndex > -1) {
  //     nums.splice(findIndex, 1);  // 删除之后再改变singleNum，防止两个相邻的数字；
  //     singleNum = nums[index];
  //   } else {
  //     return singleNum
  //   }
  // }
  // return singleNum;

  let singleNum = 0;
  for (let i = 0; i < nums.length; i++) {
    //除了某个元素只出现一次以外，其余每个元素均出现两次 做位运算
    singleNum ^= nums[i];
  }
  return singleNum;
};

var nums = [0, 0, 1, 2, 2, 3, 3, 4, 4];
// var nums = [1, 2, 6, 6, 2, 0, 0, 3, 3, 8, 1];
const singleNum = singleNumber(nums);
console.log(singleNum);
