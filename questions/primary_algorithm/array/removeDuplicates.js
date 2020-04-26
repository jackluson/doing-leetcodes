/*
 * Desc: 删除排序数组中的重复项
 * File: /removeDuplicates.js
 * Project: primary_algorithm
 * File Created: Saturday, 11th April 2020 11:31:39 am
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */
/*
描述：
给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

示例 1:

给定数组 nums = [1,1,2],

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。

你不需要考虑数组中超出新长度后面的元素。
示例 2:

给定 nums = [0,0,1,1,1,2,2,3,3,4],

函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

你不需要考虑数组中超出新长度后面的元素。
 */

// 不是在原地改变
// var removeDuplicates = function (nums) {
//   nums = Array.from(new Set(nums));
//   console.log(nums)
//   return nums.length;
// };
/**
Get：
  0. 遍历nums
  1. 巧妙地利用IndexOf的第二个参数
* @param {number[]} nums
* @return {number}
*/

var removeDuplicates = function (nums) {
  for (let index = 0; index < nums.length - 1; index++) {
    const element = nums[index];
    let findIndex = nums.indexOf(element, index + 1);
    while (findIndex > -1) {
      nums.splice(findIndex, 1);
      findIndex = nums.indexOf(element, index + 1);
    }
  }
  return nums.length;
};
var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const len = removeDuplicates(nums);
console.log(len, nums);
