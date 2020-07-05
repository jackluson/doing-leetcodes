/*
 * Desc: 用户喜好
 * File: /searchRangeUserCount.js
 * Project: nowcoder
 * File Created: Wednesday, 15th April 2020 10:40:41 am
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/* 
输入描述:
输入： 第1行为n代表用户的个数 第2行为n个整数，第i个代表用户标号为i的用户对某类文章的喜好度 第3行为一个正整数q代表查询的组数  第4行到第（3+q）行，每行包含3个整数l,r,k代表一组查询，即标号为l<=i<=r的用户中对这类文章喜好值为k的用户的个数。 数据范围n <= 300000,q<=300000 k是整型

输出描述:
输出：一共q行，每行一个整数代表喜好值为k的用户的个数

输入例子1:
5
1 2 3 3 5
3
1 2 1
2 4 5
3 5 3

输出例子1:
1
0
2
*/

const searchRangeUserCount = (userCount, userInterestList, lookupList) => {
  if (userCount > 300000 || lookupList.length > 300000) return;
  let result = [];
  for (let i = 0; i < lookupList.length; i++) {
    const curlookup = lookupList[i];
    const count = userInterestList.slice(curlookup[0] - 1, curlookup[1]).filter(item => item === curlookup[2]).length;
    result.push(count);
  }
  return result;
}

const userCount = 6;
const userInterestList = [1, 2, 3, 4, 3, 3, 6, 2, 5];
const lookupList = [[1, 2, 1], [2, 4, 4], [3, 5, 3], [2, 3, 3]];

const result = searchRangeUserCount(userCount, userInterestList, lookupList);

console.log(result)
