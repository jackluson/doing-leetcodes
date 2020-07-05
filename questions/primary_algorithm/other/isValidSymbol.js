/*
 * Desc: 有效的括号
 * File: /isValidSymbol.js
 * Project: other
 * File Created: Sunday, 3rd May 2020 6:48:11 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */
/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [];
  const matchObj = {
    '(': ')',
    ')': '(',
    '{': '}',
    '}': '{',
    '[': ']',
    ']': '[',
  }
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    const matchSymbol = matchObj[element];

    if (stack.includes(matchSymbol)) {
      const popStr = stack.pop();

      if (popStr !== matchSymbol) return false;
    } else {
      stack.push(element);
    }
  }
  return stack.length === 0;
};

var str = "{[]}";
console.log(isValid(str));
