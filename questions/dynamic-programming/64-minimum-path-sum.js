/*
 * Desc:
 * File: /64-minimum-path-sum.js
 * Project: dynamic-programming
 * File Created: Sunday, 15th May 2022 1:52:09 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2022 Camel Lu
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j === 0) {
        grid[i][j] = grid[i][j];
      } else if (i === 0) {
        grid[i][j] = grid[i][j] + grid[i][j - 1];
      } else if (j === 0) {
        grid[i][j] = grid[i][j] + grid[i - 1][j];
      } else {
        grid[i][j] = grid[i][j] + Math.min(grid[i][j - 1], grid[i - 1][j]);
      }
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
};

const grid = [
  [1, 3, 9],
  [9, 5, 4],
  [4, 2, 1],
];
const res = minPathSum(grid);
console.log('🚀 ~ file: 64-minimum-path-sum.js ~ line 37 ~ res', res);
