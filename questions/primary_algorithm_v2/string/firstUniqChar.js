/*
 * Desc: 字符串中的第一个唯一字符
 * File: /firstUniqChar.js
 * Project: string
 * File Created: Tuesday, 14th April 2020 9:39:22 am
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
要求：
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

案例:

s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.


注意事项：您可以假定该字符串只包含小写字母。
*/


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (str) {

  let s = str;

  for (let i = 0; i < s.length; i++) {
    // var charIndex = s.indexOf(s[i], i + 1);
    // if (charIndex === -1) {
    //   return str.indexOf(s[i]);;
    // }
    // while (~charIndex) {
    //   s = s.slice(0, charIndex) + s.slice(charIndex + 1, s.length);
    //   console.log(s)
    //   charIndex = s.indexOf(s[i], i + 1);
    // }
    // 解法二
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i
    }
  }
  return -1;
};

var str = "aadadaadjsidfjao";

console.log(firstUniqChar(str));
