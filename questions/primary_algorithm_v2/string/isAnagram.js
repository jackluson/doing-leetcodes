/*
 * Desc: 有效的字母异位词
 * File: /isAnagram.js
 * Project: string
 * File Created: Tuesday, 14th April 2020 10:22:36 am
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
要求：
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  if (s === t) return true;
  // for (let i = 0; i < s.length; i++) {
  //   var curChar = s[i];
  //   var restStr = s.slice(0, i) + s.slice(i + 1, s.length);
  //   for (let j = 0; j < restStr.length; j++) {
  //     const mergeStr = restStr.slice(0, j) + curChar + restStr.slice(j, restStr.length);
  //     if (mergeStr === t) {
  //       return true;
  //     }
  //   }
  // }
  // 可以无限次易位，这样换成判断，两个字符串的字符出现的次数是否一样
  var selfSet = new Set();
  for (let i = 0; i < s.length; i++) {
    var curChar = s[i];
    if (selfSet.has(curChar)) {
      continue;
    }
    selfSet.add(curChar);
    var charAppearCount = 1;
    var findIndex = s.indexOf(curChar, i + 1);
    while (~findIndex) {
      charAppearCount += 1;
      findIndex = s.indexOf(curChar, findIndex + 1);
    }
    findIndex = t.indexOf(curChar);

    while (~findIndex) {
      charAppearCount -= 1; // 注意减
      findIndex = t.indexOf(curChar, findIndex + 1);
    }
    console.log(charAppearCount);
    // 判断出现次数是否一样
    if (charAppearCount !== 0) {
      return false;
    }
  }
  return true;
};

var s = "acrabc", t = "abccar";
console.log(isAnagram(s, t))
