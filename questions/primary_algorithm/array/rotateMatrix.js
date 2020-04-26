
/*
 * Desc: 旋转图像
 * File: /rotateMatrix.js
 * Project: primary_algorithm
 * File Created: Sunday, 12th April 2020 9:02:20 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/* 
给定一个 n × n 的二维矩阵表示一个图像。

将图像顺时针旋转 90 度。

说明：

你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

示例 1:

给定 matrix =
[
 [1,2,3],
 [4,5,6],
 [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
 [7,4,1],
 [8,5,2],
 [9,6,3]
]
示例 2:

给定 matrix =
[
 [ 5, 1, 9,11],
 [ 2, 4, 8,10],
 [13, 3, 6, 7],
 [15,14,12,16]
],

3 - 0 => 3
3 - 1 => 2

[0][0] --> [0][3]
[0][1] --> [1][3]
[0][2] --> [2][3]
[0][3] --> [3][3]

[1][0] --> [0][2]
[1][1] --> [1][2]
[1][2] --> [2][2]
[1][3] --> [3][2]

[2][0] --> [0][1]
[2][1] --> [1][1]
[2][2] --> [2][1]
[2][3] --> [3][1]

[3][0] --> [0][0]
[3][1] --> [1][0]
[3][2] --> [2][0]
[3][3] --> [3][0]


原地旋转输入矩阵，使其变为:
[
 [15,13, 2, 5],
 [14, 3, 4, 1],
 [12, 6, 8, 9],
 [16, 7,10,11]
]
*/

/**
* @param {number[][]} matrix
* @return {void} Do not return anything, modify matrix in-place instead.
*/
var rotate = function (matrix) {
  // 判断是单数还是双数
  const isSingle = matrix.length % 2;
  const len = matrix.length;
  const otherLen = len - 1;
  // 只遍历 len * len / 4 的四分之一,如果是单数的话，中间不改变
  for (var i = 0; i < len / 2; i++) {
    for (var j = 0; j < (len / 2 - isSingle); j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[otherLen - j][i];
      matrix[otherLen - j][i] = matrix[otherLen - i][otherLen - j];
      matrix[otherLen - i][otherLen - j] = matrix[j][otherLen - i];
      matrix[j][otherLen - i] = temp;
    }
  }
};

var matrix =
  [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
  ];
rotate(matrix);
console.log(matrix)
