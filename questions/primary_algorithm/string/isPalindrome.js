/*
 * Desc: 验证回文字符串
 * File: /isPalindrome.js
 * Project: string
 * File Created: Tuesday, 14th April 2020 11:13:58 am
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
要求：
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

  s = s.replace(/\W|_|([a-z])/gi, (_match, p) => {
    return p ? p.toLowerCase() : ''
  });
  return s === s.split('').reverse().join('');
};
var s = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(s))
