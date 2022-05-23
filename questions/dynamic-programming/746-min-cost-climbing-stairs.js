/*
 * Desc:
 * File: /746-min-cost-climbing-stairs.js
 * Project: dynamic-programming
 * File Created: Saturday, 21st May 2022 7:21:01 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2022 Camel Lu
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  var dp = new Array(cost.length + 1).fill(Infinity);
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[cost.length];
};
