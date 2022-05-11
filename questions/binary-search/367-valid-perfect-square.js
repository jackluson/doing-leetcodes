/**
 * @param {number} num
 * @return {boolean}
 * cost: 5:00
 */
var isPerfectSquare = function (num) {
  let low = 0;
  let high = num;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let square = mid * mid;
    if (square === num) {
      return true;
    } else if (square > num) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
};
