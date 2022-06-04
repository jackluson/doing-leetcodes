/*
 * Desc:
 * File: /5.longest-palindromic-substring.js
 * Project: dynamic-programming
 * File Created: Monday, 30th May 2022 5:05:36 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2022 Camel Lu
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let L = s.length;
  var dp = [];
  let start = 0;
  let maxLen = 1;
  for (let i = 0; i < L; i++) {
    if (!dp[i]) {
      dp[i] = [];
    }
    dp[i][i] = true;
  }
  for (let i = 2; i <= L; i++) {
    for (let j = 0; j < L; j++) {
      let k = j + i - 1;
      if (k >= L) break;
      if (s[j] !== s[k]) {
        dp[j][k] = false;
      } else {
        if (k - j < 3) {
          dp[j][k] = true;
        } else {
          dp[j][k] = dp[j + 1][k - 1];
        }
      }
      if (dp[j][k] && i > maxLen) {
        maxLen = i;
        start = j;
      }
    }
  }
  console.log(dp);
  return s.substring(start, start + maxLen);
};
// 27: 43

const str = 'aacabdkacaa';

const res = longestPalindrome(str);
console.log(
  '🚀 ~ file: 5.longest-palindromic-substring.js ~ line 54 ~ res',
  res
);
