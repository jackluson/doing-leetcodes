/*
 * Desc:
 * File: /longest-palindromic-subsequence.js
 * Project: dynamic-programming
 * File Created: Saturday, 4th June 2022 10:58:12 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2022 Camel Lu
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  var dp = [];
  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
    dp[i][i] = 1;
  }
  let max = 1;
  for (let L = 2; L <= s.length; L++) {
    for (let i = 0; i < s.length; i++) {
      let j = i + L - 1;
      if (j >= s.length) continue;
      if (s[i] === s[j]) {
        if (i + 1 <= j - 1) {
          dp[i][j] = dp[i + 1][j - 1] + 2;
        } else {
          dp[i][j] = 2;
        }
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
      }
      max = Math.max(dp[i][j], max);
    }
  }
  return max;
};

longestPalindromeSubseq('cbbdc');
