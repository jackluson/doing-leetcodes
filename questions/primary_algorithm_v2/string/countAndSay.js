/*
 * Desc: 外观数列
 * File: /countAndSay.js
 * Project: string
 * File Created: Tuesday, 14th April 2020 5:42:42 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */


/*
要求：
「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 被读作  "one 1"  ("一个一") , 即 11。
11 被读作 "two 1s" ("两个一"）, 即 21。
21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。

注意：整数序列中的每一项将表示为一个字符串。



示例 1:

输入: 1
输出: "1"
解释：这是一个基本样例。
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {

  if (n <= 1) return n.toString();

  var preStr = countAndSay(n - 1);
  let sayStr = '';
  let initCount = 1;
  for (let i = 0; i < preStr.length; i++) {
    if (preStr[i] === preStr[i + 1]) {
      initCount++;
      continue;
    } else {
      sayStr += String(initCount) + preStr[i]
      initCount = 1;
    }
  }
  return sayStr;

};

var n = 7;
console.log(countAndSay(n))
