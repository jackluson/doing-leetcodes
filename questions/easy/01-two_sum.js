// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
/*
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 */
var twoSum = function(nums, target) {
  const hm = new Map()
  // Map -- es6引入的新的一种数据结构，突破传统上只有字符串能当key的限制
  for (let i = 0; i <= nums.length; i++) {
    const z = target - nums[i]
    if (hm.has(z)) {
      // 如果有存在该key
      return [hm.get(z), i] // 找到之前遍历的值的位置，和 当前的位置
    }
    hm.set(nums[i], i) // 值，位置
  }
}
const arr = [2, 11, 7, 15]
const target = 9
console.log(twoSum(arr, target))
