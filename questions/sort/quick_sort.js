/*
 * Desc: 快速排序
 * File: /quick_sort.js
 * Project: sort
 * File Created: Sunday, 15th March 2020 4:38:32 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/**
 * @description 找出当前合适的位置，把小于pivot的放在一边，然后替换left的位置
 * @param {*} arr
 * @param {*} low 最低位
 * @param {*} high 最高位
 */
const partition = (arr, low, high) => {
  const pivot = arr[high];
  let left = low - 1;
  for (let i = low; i < high; i++) {
    if (arr[i] < pivot) {
      left += 1;
      if (left !== i) {
        [arr[left], arr[i]] = [arr[i], arr[left]];
      }
    }
  }
  left += 1;
  if (left !== high) {
    [arr[left], arr[high]] = [arr[high], arr[left]];
  }
  return left;
};

let arr = [10, 80, 60, 30, 90, 40, 50, 70];
const high = arr.length;

/**
 * @description 分支
 * @param {*} arr
 * @param {*} low 最低位
 * @param {*} high 最高位
 */
const quickSort = (arr, low, high) => {
  if (low < high) {
    const pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
};

quickSort(arr, 0, high - 1);
console.log(arr, arr.length);
