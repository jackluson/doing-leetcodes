/*
 * Desc: 最大子序和
 * File: /maxSubArray.js
 * Project: dynamicProgramming
 * File Created: Saturday, 2nd May 2020 3:02:04 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const len = nums.length;

  if (len < 1) return 0;
  var n = 0;
  var dp = [nums[n]];
  n++;
  while (n < len) {
    dp[n] = dp[n - 1] > 0 ? nums[n] + dp[n - 1] : nums[n];
    n++;
  }
  return Math.max(...dp);
};
var nums = [1, -6, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums))
// console.log()
