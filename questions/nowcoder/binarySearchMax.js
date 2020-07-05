/*
 * Desc: 使用二分查找搜索
 * File: /binarySearchMax.js
 * Project: nowcoder
 * File Created: Wednesday, 15th April 2020 11:32:42 am
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

// 以下函数使用二分查找搜索一个增序的数组，当有多个元素值与目标元素相等时，返回最后一个元素的下标，目标元素不存在时返回-1

const binarySearchMax = (datas, target) => {
  let left = 0;
  let right = datas.length;
  while (left < right) {
    let middle = Math.ceil((left + right) / 2) - 1;
    if (datas[middle] <= target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  if (datas[left - 1] === target) {
    return left - 1
  }
  return -1;
}

const arr = [1, 3, 3, 4, 6, 6, 6, 7, 8];
console.log(binarySearchMax(arr, 1))
