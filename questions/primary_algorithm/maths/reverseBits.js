/*
 * Desc: 颠倒二进制位
 * File: /reverseBits.js
 * Project: maths
 * File Created: Saturday, 25th April 2020 11:26:40 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/* 
颠倒给定的 32 位无符号整数的二进制位。



示例 1：

输入: 00000010100101000001111010011100
输出: 00111001011110000010100101000000
解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
      因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。
示例 2：

输入：11111111111111111111111111111101
输出：10111111111111111111111111111111
解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，
      因此返回 3221225471 其二进制表示形式为 10101111110010110010011101101001。

*/
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  var str = (n).toString(2);
  var diff = 32 - str.length;
  str = diff > 0 ? Array(diff).fill('0').join('') + str : str;
  return parseInt(str.split('').reverse().join(''), 2);
};
