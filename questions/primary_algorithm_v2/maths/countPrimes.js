/*
 * Desc: 计数质数
 * File: /countPrimes.js
 * Project: maths
 * File Created: Saturday, 25th April 2020 4:22:20 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */
/*
统计所有小于非负整数 n 的质数的数量。

示例:

输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {

  const initNum = n;

  let count = 0;

  const isPrimes = (num) => {
    let res = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        res = false;
        break;
      }
    }
    return res;
  }

  while (n > 1) {
    if (isPrimes(n) && n !== initNum) count++;
    n--;
  }

  return count;

};
