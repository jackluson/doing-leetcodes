/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  var dp = [1, 2, 3];
  for (let i = 3; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};
