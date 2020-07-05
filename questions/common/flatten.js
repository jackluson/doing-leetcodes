/*
 * Desc: 打平数组
 * File: /flatten.js
 * Project: common
 * File Created: Monday, 20th April 2020 1:58:52 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */


// 迭代的实现:

let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

const flatten = function (arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

//递归的实现(ES6简写):
const flatten = array => array.reduce((acc, cur) => (Array.isArray(cur) ? [...acc, ...flatten(cur)] : [...acc, cur]), []);

console.log(flatten(arr))
