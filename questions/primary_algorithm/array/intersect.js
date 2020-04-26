/*
 * Desc: 两个数组的交集 II
 * File: /intersect.js
 * Project: primary_algorithm
 * File Created: Saturday, 11th April 2020 8:46:04 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
说明：

输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
我们可以不考虑输出结果的顺序。
进阶:

如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小很多，哪种方法更优？
如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
*/

/**
 * 思路：遍历nums，检查每个元素是否出现再nums2
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  var intersectArr = [];
  for (let index = 0; index < nums1.length; index++) {
    const findIndex = nums2.indexOf(nums1[index]);
    if (findIndex > -1) {
      intersectArr.push(nums1[index]);
      nums2.splice(findIndex, 1);
    }
  }
  return intersectArr;
};

var nums1 = [1, 2, 2, 1], nums2 = [2];
// var nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2))
