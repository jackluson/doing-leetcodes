/*
 * Desc: 整数反转
 * File: /reverseNumber.js
 * Project: string
 * File Created: Monday, 13th April 2020 9:12:44 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
要求：给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

  if (x < (-Math.pow(2, 31)) || x > (Math.pow(2, 31) - 1)) return 0;
  if (x === 0) return x;
  // positive or negative
  var sign = Math.sign(x);
  // 是否是除以10整数
  while (!(x % 10)) {
    x = x / 10;
  }
  // console.log(x.toString(10).split('').reverse().join(''))
  return sign * parseInt(x.toString(10).split('').reverse().join(''), 10)
};

var num = -1230003;

console.log(reverse(num))
