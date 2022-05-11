/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 * cost: 做不出来, 误解题意,还以为是连续序列的长度
 */
var binarySearch = (arr2, target, d) => {
  let left = 0;
  let right = arr2.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const distance = arr2[mid] - target;
    if (Math.abs(distance) <= d) {
      return true;
    } else if (distance > d) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
var findTheDistanceValue = function (arr1, arr2, d) {
  let max = 0;
  arr2 = arr2.sort((a, b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    let flag = binarySearch(arr2, arr1[i], d);
    max = flag ? max : max + 1;
  }
  return max;
};

const arr1 = [1, 4, 2, 3];
const arr2 = [-4, -3, 6, 10, 20, 30];
const d = 3;

const res = findTheDistanceValue(arr1, arr2, d);
console.log(res);
