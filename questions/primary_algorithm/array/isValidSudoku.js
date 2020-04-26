/*
 * Desc: 有效的数独
 * File: /isValidSudoku.js
 * Project: primary_algorithm
 * File Created: Sunday, 12th April 2020 10:23:07 am
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
要求：
判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
上图是一个部分填充的有效的数独。

数独部分空格内已填入了数字，空白格用 '.' 表示。

示例 1:

输入:
[
 ["5","3",".",".","7",".",".",".","."],
 ["6",".",".","1","9","5",".",".","."],
 [".","9","8",".",".",".",".","6","."],
 ["8",".",".",".","6",".",".",".","3"],
 ["4",".",".","8",".","3",".",".","1"],
 ["7",".",".",".","2",".",".",".","6"],
 [".","6",".",".",".",".","2","8","."],
 [".",".",".","4","1","9",".",".","5"],
 [".",".",".",".","8",".",".","7","9"]
]
输出: true

示例 2:

输入:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: false
解释: 除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。
     但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。
说明:

一个有效的数独（部分已被填充）不一定是可解的。
只需要根据以上规则，验证已经填入的数字是否有效即可。
给定数独序列只包含数字 1-9 和字符 '.' 。
给定数独永远是 9x9 形式的。
*/


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

  var len = board.length;
  // 3 x 3 宫
  var placeList = [];
  for (let lineIndex = 0; lineIndex < 3; lineIndex++) {
    for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
      const mergeArr = [];
      // 第几宫
      for (var n = 0; n < 3; n++) {
        mergeArr.push(...board[3 * lineIndex + n].slice(columnIndex * 3, columnIndex * 3 + 3));
      }
      placeList.push(mergeArr)
    }
  }

  for (let index = 0; index < len; index++) {

    var line = board[index];
    for (let k = 0; k < len; k++) {
      // 行
      var lineNum = line[k];
      // 不是‘.’
      if (!isNaN(+lineNum) && ~line.indexOf(lineNum, k + 1)) {
        return false;
      }
    }

    // 列
    for (let i = 0; i < len; i++) {
      var columnNum = board[i][index];
      for (let j = i + 1; j < len; j++) {
        // 从第二列开始 && 不是‘.’
        if (!isNaN(+columnNum) && columnNum === board[j][index]) {
          return false;
        }
      }
    }

    // 宫
    var place = placeList[index];
    for (let k = 0; k < len; k++) {
      // 行
      var placeNum = place[k];
      // 不是‘.’
      if (!isNaN(+placeNum) && ~place.indexOf(placeNum, k + 1)) {
        return false;
      }
    }
  }

  // console.log(placeList);
  return true;


};

var board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "3", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
console.log(isValidSudoku(board))
