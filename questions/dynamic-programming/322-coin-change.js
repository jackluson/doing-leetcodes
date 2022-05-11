/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount <= 0) return 0;
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      let diff = i - coin;
      if (diff >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[diff]);
      }
    }
  }
  return dp[amount] || -1;
};

let coins = [186, 419, 83, 408],
  amount = 6249;
const res = coinChange(coins, amount);
console.log('🚀 ~ file: 322-coin-change.js ~ line 23 ~ res', res);
