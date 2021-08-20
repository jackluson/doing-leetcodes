/*
 * Desc: 汉明距离
 * File: /hammingDistance.js
 * Project: other
 * File Created: Wednesday, 22nd April 2020 8:46:49 am
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 x 和 y，计算它们之间的汉明距离。

注意：
0 ≤ x, y < 231.

示例:

输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {

  var count = 0;
  var str1 = x.toString(2), str2 = y.toString(2);
  var max = Math.max(str1.length, str2.length);
  const abs = Math.abs(str1.length - str2.length);
  const diffStr = Array(abs).fill(0).join('');
  if (str1.length < str2.length) {
    str1 = diffStr + str1;
  } else if (str1.length > str2.length) {
    str2 = diffStr + str2;
  }
  let i = 0;
  console.log(str1, str2)
  while (i < max) {
    if (str1[i] !== str2[i]) {
      count++;
    }
    i++;
  }
  return count;
};

var num1 = 4; // 100
var num2 = 2; //  10

console.log(hammingDistance(num1, num2));
