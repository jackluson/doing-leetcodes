/*
 * Desc: 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
 * File: /isPowerOfThree.js
 * Project: maths
 * File Created: Saturday, 25th April 2020 10:32:57 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
示例 1:

输入: 27
输出: true
示例 2:

输入: 0
输出: false
示例 3:

输入: 9
输出: true
示例 4:

输入: 45
输出: false
进阶：
你能不使用循环或者递归来完成本题吗？
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {

  if (n < 1) return false;
  if (n === 1 || n === 3) return true;
  let res = n / 3;
  while (res % 3 === 0) {
    n = Math.floor(n / 3);
    if (n === 3) return true;
    res = n / 3;
  }
  return false;
};

const n = 3
console.log(isPowerOfThree(n))
