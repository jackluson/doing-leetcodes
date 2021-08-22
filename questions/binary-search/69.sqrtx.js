/*
 * Desc:
 * File: /69.sqrtx.js
 * Project: binary-search
 * File Created: Sunday, 22nd August 2021 5:22:34 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/* 
69. x 的平方根
实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  let min = 1;
  let max = x >>> 1;
  let mid = 1;
  while (min <= max) {
    mid = (min + max) >>> 1;
    let midSquare = mid * mid;
    if (midSquare === x) {
      return mid;
    } else if (midSquare > x) {
      max = mid - 1;
      if (max * max <= x) {
        return max;
      }
    } else {
      min = mid + 1;
      if (min * min > x) {
        return mid;
      }
    }
  }
  return mid;
};
