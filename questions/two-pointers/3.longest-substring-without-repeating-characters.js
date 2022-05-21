/*
 * Desc:
 * File: /3.longest-substring-without-repeating-characters.js
 * Project: sliding-window
 * File Created: Friday, 20th May 2022 8:44:32 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2022 Camel Lu
 */

/**
 * 3. 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   if (!s) return 0;
//   var map = new Map();
//   map.set(s[0], 0);
//   var max = 1;
//   var tempMax = 1;
//   var startPos = 0;
//   for (let i = 1; i < s.length; i++) {
//     const pos = map.get(s[i]);
//     if (pos === undefined || pos < startPos) {
//       tempMax++;
//       max = Math.max(max, tempMax);
//     } else {
//       tempMax = i - pos;
//       startPos = pos + 1;
//     }
//     map.set(s[i], i);
//   }
//   return max;
// };

var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  var map = new Set();
  map.add(s[0]);
  var max = 1;
  var tempMax = 1;
  var startPos = 0;
  for (let i = 1; i < s.length; i++) {
    const pos = map.get(s[i]);
    if (pos === undefined || pos < startPos) {
      tempMax++;
      max = Math.max(max, tempMax);
    } else {
      tempMax = i - pos;
      startPos = pos + 1;
    }
    map.set(s[i], i);
  }
  return max;
};

const s = 'pwwkew';
const res = lengthOfLongestSubstring(s);
console.log(
  '🚀 ~ file: 3.longest-substring-without-repeating-characters.js ~ line 39 ~ res',
  res
);
