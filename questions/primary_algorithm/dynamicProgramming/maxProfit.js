/*
 * Desc: 买卖股票的最佳时机
 * File: /maxProfit.js
 * Project: dynamicProgramming
 * File Created: Saturday, 25th April 2020 8:53:46 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

注意：你不能在买入股票前卖出股票。



示例 1:

输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
示例 2:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

  const len = prices.length;

  if (len < 2) return 0;
  var n = 0;
  var dp = [0];
  let min = prices[0];
  while (n < len) {
    n++;
    min = Math.min(min, prices[n])
    dp[n] = Math.max(dp[n - 1], prices[n] - min)
  }
  return dp[len - 1];
};

const prices = [7, 6, 5, 4, 2, 4, 3];

console.log(maxProfit(prices));
