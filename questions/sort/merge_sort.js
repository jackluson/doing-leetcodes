/*
 * Desc: 合并排序算法
 * File: /merge_sort.js
 * Project: sort
 * File Created: Sunday, 15th March 2020 8:20:33 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/* 
  1. 首选利用递归二分法一个数组成为只有一个元素的若干个数组（arr.length 其中arr是原来的数组）
  2. 从k=0开始，循环遍历左边和右边的数组，比较大小，然后赋值给原来的数组
  note： 也是类似快速排序的思想，分而治之，逐一击破的思想
 */

const mergeSort = arr => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, mid));
  const arightArr = mergeSort(arr.slice(mid));
  let index = lIndex = rIndex = 0;
  while (lIndex < leftArr.length && rIndex < arightArr.length) {
    if (leftArr[lIndex] < arightArr[rIndex]) {
      arr[index] = leftArr[lIndex]
      lIndex += 1;
    } else {
      arr[index] = arightArr[rIndex]
      rIndex += 1;
    }
    index += 1
  }

  while (lIndex < leftArr.length) {
    arr[index] = leftArr[lIndex]
    index += 1;
    lIndex += 1;
  }
  while (rIndex < arightArr.length) {
    arr[index] = arightArr[rIndex]
    index += 1;
    rIndex += 1;
  }
  return arr;
}

let arr = [12, 11, 13, 5, 6, 7];
arr = mergeSort(arr);
console.log(arr);
