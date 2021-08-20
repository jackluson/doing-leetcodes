/*
 * Desc: 缺失数字
 * File: /missingNumber.js
 * Project: maths
 * File Created: Saturday, 9th May 2020 12:43:38 am
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

示例 1:

输入: [3,0,1]
输出: 2
示例 2:

输入: [9,6,4,2,3,5,7,0,1]
输出: 8
说明:
你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

  for (let index = 0; index < nums.length; index++) {
    if (nums.includes(index)) continue;
    return index

  }

};
