/*
 * Desc: https://leetcode-cn.com/problems/add-binary/
 * File: /67. 二进制求和.js
 * Project: easy
 * File Created: Friday, 20th August 2021 11:41:35 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const longStr = a.length >= b.length ? a : b;
  const shortStr = longStr !== a ? a : b;
  let res = "";
  let carry = 0;
  let shortLen = shortStr.length - 1;
  let longLen = longStr.length - 1;
  for (let i = 0; i <= longLen; i++) {
    let bitSum;
    if (i <= shortLen) {
      bitSum = carry + +shortStr[shortLen - i] + +longStr[longLen - i];
    } else {
      bitSum = carry + +longStr[longLen - i];
    }
    carry = bitSum >= 2 ? 1 : 0;
    bitSum = bitSum % 2;
    res = `${bitSum}${res}`;
  }
  return carry ? `${carry}${res}` : res;
};

var addBinary_v2 = function (a, b) {
  let res = "";
  let carry = 0;
  let maxLenth = Math.max(a.length, b.length);
  a = a.padStart(maxLenth, 0);
  b = b.padStart(maxLenth, 0);
  for (let i = 0; i < maxLenth; i++) {
    let bitSum = carry + +a[maxLenth - i - 1] + +b[maxLenth - i - 1];
    carry = bitSum >= 2 ? 1 : 0;
    bitSum = bitSum % 2;
    res = `${bitSum}${res}`;
  }
  return carry ? `${carry}${res}` : res;
};

var res = addBinary_v2("110", "111111");
console.log("res", parseInt(res, 2));
