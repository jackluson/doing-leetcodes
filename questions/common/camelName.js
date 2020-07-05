/*
 * Desc: 转驼峰命名
 * File: /camelName.js
 * Project: common
 * File Created: Monday, 4th May 2020 3:26:38 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

function transformCamelForm(str) {
  let result = '';
  let isPreCharCamel = false;
  for (let index = 0; index < str.length; index++) {
    const char = str[index];
    if (['_', '-', '@'].includes(char)) {
      isPreCharCamel = true;
    } else {
      result = result + (isPreCharCamel ? char.toUpperCase() : char);
      isPreCharCamel = false;
    }

  }
  return result;
}

const str = '_content@type';
console.log(transformCamelForm(str))
// (?!^) 除去开头的_
console.log(str.replace(/(?!^)[_ -@]([a-z])/g, (_match, $1, index, source) => {
  console.log(_match, $1, index, source)
  return $1.toUpperCase();
}))
