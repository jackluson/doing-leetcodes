/*
 * Desc: 插入排序
 * File: /insertion_sort.js
 * Project: sort
 * File Created: Sunday, 15th March 2020 2:06:00 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */
/*
1. 从i = 1开始，遍历前面的元素
2. 比较大小，如果大于当前元素，移位赋值
3. 然后插入到有序的队列中(有序的队列是逐渐形成的)
 */
const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    var j = i - 1
    while (j >= 0 && arr[j] > item) { // 如果大于当前item
      arr[j + 1] = arr[j] //数组个位各移一位
      j -= 1;
    }
    arr[j + 1] = item; //填补前面的arr[j + 1]
  }
}

const arr = [12, 1, 11, 13, 5, 6]
insertSort(arr);
console.log(arr)
