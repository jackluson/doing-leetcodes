/*
 * Desc: 最长公共前缀
 * File: /longestCommonPrefix.js
 * Project: string
 * File Created: Tuesday, 14th April 2020 8:04:58 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
要求：
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

  if (strs.length < 2 || strs[0].length < 1) return strs[0] || '';

  let initIndex = 0;
  // 遍历字符串列表中每个字符的第几个是否相等
  function _recusiveList(strList, strIndex) {
    let index = 1;
    // let flag = false;
    while (index < strList.length && strList[index - 1][strIndex] === strList[index][strIndex]) {
      // flag = true;
      index++;
    }
    return (index === strList.length) ? true : false;
  }
  while (_recusiveList(strs, initIndex) && initIndex < strs[0].length) {
    initIndex++
  }
  return initIndex === 0 ? '' : strs[0].slice(0, initIndex);
};

// var strs = ["flower", "flowjs", "floight"];
var strs = ["", ""];

console.log(longestCommonPrefix(strs))

