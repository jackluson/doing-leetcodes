/*
 * Desc:
 * File: /numberToChinese.js
 * Project: common
 * File Created: Wednesday, 18th May 2022 10:55:06 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2022 Camel Lu
 */

const mapList = [
  {
    value: 10000,
    label: '万',
  },
  {
    value: 1000,
    label: '千',
  },
  {
    value: 100,
    label: '百',
  },
  {
    value: 10,
    label: '十',
  },
];
const numToTextMap = {
  9: '九',
  8: '八',
  7: '七',
  6: '六',
  5: '五',
  4: '四',
  3: '三',
  2: '二',
  1: '一',
};

const numberToChinese = (num) => {
  let res = '';
  if (num < 10) return numToTextMap[num];
  let flag = true;
  for (let i = 0; i < mapList.length; i++) {
    const val = mapList[i].value;
    if (val > num) continue;
    if (val === 10 && flag) {
      flag = false;
    }
    const label = mapList[i].label;
    const temp = Math.floor(num / val);
    res = res + numToTextMap[temp] + label;
    num = num % val;
  }
  res = res + (flag ? '零' + numToTextMap[num] : numToTextMap[num]);
  return res;
};
