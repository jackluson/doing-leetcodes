/* eslint-disable no-irregular-whitespace */
/* 给定两个大小为 m和n的有序数组 nums1 和 nums2。
请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // 情况一 nums1所有的元素都比nums2大
  // 情况二 nums1所有的元素都比nums2小
  const len1 = nums1.length // [2,3,4,5,9,22,44,55]
  const len2 = nums2.length // [1,4,14,18,25,67]
  const minLen = Math.min(len1, len2)
  const sortedArray = nums1
  // 思路： 找出两位数组的中位数，
  // for (let i = 0; i < minLen; i++) {
  //   if (nums1[i] < nums2[i]) {
  //   }
  //   sortedArray.push()
  // }
}
