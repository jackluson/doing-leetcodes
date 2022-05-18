/*
 * Desc: 最小数量数的平方根之和
 * File: /cube_root_sum.js
 * Project: hard
 * File Created: Monday, 13th September 2021 5:25:13 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

function findSmallCubeCount(num) {
  var dp = [1, 2, 3, 4, 5, 6, 7, 1];
  for (let i = 2; i < num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[dp.length - 1];
}
