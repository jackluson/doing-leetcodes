/*
 * Desc:
 * File: /plusone.js
 * Project: primary_algorithm
 * File Created: Saturday, 11th April 2020 9:17:46 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
要求：
给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。`

示例 1:

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
示例 2:

输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
*/

/**
 * 思路： 从个位数算起,设置一个进位
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const tailValue = digits[digits.length - 1];
  if (tailValue === 9) {
    let carry = 1;
    digits[digits.length - 1] = 0;
    for (let index = digits.length - 2; index > -1; index--) {
      const sum = digits[index] + carry;
      if (sum >= 10) {
        digits[index] = 0;
        carry = 1;
      } else {
        carry = 0;
        digits[index] = sum;
      }
      // 最大的进位，增加一位
      if (carry && index === 0) {
        digits.unshift(1)
      }
    }
    // 最大的进位，增加一位
    if (carry && digits.length - 1 === 0) {
      digits.unshift(1)
    }
  } else {
    digits[digits.length - 1] = tailValue + 1;
  }
  return digits;
};

var nums = [9];
console.log(plusOne(nums));
