/*
 * Desc:
 * File: /4.remove-duplicates-from-sorted-array.js
 * Project: two-pointers
 * File Created: Friday, 20th May 2022 9:56:14 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2022 Camel Lu
 */

var removeDuplicates = function (nums) {
  let deplicateCount = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(i, 1);
        nums[i];
        i--;
        console.log(i, j, nums);
        break;
      }
    }
  }
  console.log('nums');
  return nums;
};
const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const res = removeDuplicates(arr);
console.log(res);
