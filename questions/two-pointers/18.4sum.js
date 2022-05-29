/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[j - 1] && j - 1 !== i) continue;
      let l = j + 1,
        r = nums.length - 1;
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum === target) {
          arr.push([nums[i], nums[j], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) {
            l++;
          }
          while (l < r && nums[r] === nums[r - 1]) {
            r--;
          }
          l++;
          r--;
        } else if (sum > target) {
          r--;
        } else {
          l++;
        }
      }
    }
  }
  return arr;
};
