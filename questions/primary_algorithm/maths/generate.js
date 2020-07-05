/*
 * Desc: 帕斯卡三角形
 * File: /generate.js
 * Project: maths
 * File Created: Friday, 8th May 2020 11:42:14 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = []
  if (numRows < 1) return res
  while (numRows > 0) {
    const rear = res[res.length - 1];
    const cur = [1]
    // [1]
    if (rear && rear.length === 1) {
      cur.push(1)
    } else if (rear && rear.length > 1) {
      for (let index = 1; index < rear.length; index++) {
        const sum = rear[index - 1] + rear[index];
        cur.push(sum)
      }
      cur.push(1)
    }
    res.push(cur)
    numRows--
  }
  return res
};

console.log(generate(5))
