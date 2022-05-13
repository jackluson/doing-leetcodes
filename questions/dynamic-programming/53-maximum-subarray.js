/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let pre = 0;
  for (let i = 0; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    maxSum = Math.max(maxSum, pre); // f(i)=max{f(i−1)+nums[i],nums[i]}
  }
  return maxSum;
};
