/*
 * Desc: Shuffle an Array
 * File: /shuffle.js
 * Project: designProblem
 * File Created: Monday, 20th April 2020 11:08:24 am
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
打乱一个没有重复元素的数组。

示例:

// 以数字集合 1, 2 和 3 初始化数组。
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
solution.shuffle();

// 重设数组到它的初始状态[1,2,3]。
solution.reset();

// 随机返回数组[1,2,3]打乱后的结果。
solution.shuffle();
*/

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {

  this.nums = nums;

};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {

  return this.nums;

};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {

  const nums = this.nums;

  for (var i = 0, len = nums.length; i < len; i++) {
    // 随机选择一个队友
    var randomIndex = i + Math.floor(Math.random() * (len - i));
    // 咱俩换换，找别人换过的相当于出列了，因此上面的 randomIndex 需要在剩下的人当中挑选
    [nums[i], nums[randomIndex]] = [nums[randomIndex], nums[i]];
  }

  return nums;

};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */


var nums = [1, 2, 3];
const numsObj = new Solution(nums);
console.log('numsObj', numsObj);
console.log('shuffle', numsObj.shuffle());
