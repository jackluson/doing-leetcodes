/*
 * Desc: Fizz Buzz
 * File: /fizzBuzz.js
 * Project: maths
 * File Created: Saturday, 25th April 2020 3:44:01 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
写一个程序，输出从 1 到 n 数字的字符串表示。

1. 如果 n 是3的倍数，输出“Fizz”；

2. 如果 n 是5的倍数，输出“Buzz”；

3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。

示例：

n = 15,

返回:
[
   "1",
   "2",
   "Fizz",
   "4",
   "Buzz",
   "Fizz",
   "7",
   "8",
   "Fizz",
   "Buzz",
   "11",
   "Fizz",
   "13",
   "14",
   "FizzBuzz"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (num, res = []) {
  // const iteratorFun = (num) => {
  //   var str = num.toString();
  //   if (!(num % 3) && !(num % 5)) {
  //     str = "FizzBuzz"
  //   } else if (!(num % 3)) {
  //     str = 'Fizz'
  //   } else if (!(num % 5)) {
  //     str = 'Buzz'
  //   }
  //   return (num > 1 ? iteratorFun(num - 1) + ',' : '') + str
  // }

  var str = num.toString();
  if (!(num % 3) && !(num % 5)) {
    str = "FizzBuzz"
  } else if (!(num % 3)) {
    str = 'Fizz'
  } else if (!(num % 5)) {
    str = 'Buzz'
  }
  res.unshift(str)
  if (num > 1) fizzBuzz(num - 1, res);
  return res;

  // res.push(iteratorFun(n))
  // return iteratorFun(n).split(',')

};

var num = 15;

var res = fizzBuzz(num);
console.log(res)
