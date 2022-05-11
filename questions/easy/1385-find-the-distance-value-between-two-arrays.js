/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 * cost: 做不出来, 误解题意,还以为是连续序列的长度
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let max = 0;
  for (let i = 0; i < arr1.length; i++) {
    let flag = true;
    for (let j = 0; j < arr2.length; j++) {
      const distance = Math.abs(arr1[i] - arr2[j]);
      if (distance <= d) {
        flag = false;
        break;
      }
    }
    max = flag ? max + 1 : max;
  }
  return max;
};

const arr1 = [1, 4, 2, 3];
const arr2 = [-4, -3, 6, 10, 20, 30];
const d = 3;

const res = findTheDistanceValue(arr1, arr2, d);
console.log(res);
