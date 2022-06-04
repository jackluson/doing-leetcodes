/*
 * Desc:
 * File: /implement-strstr
 * Project: other
 * File Created: Saturday, 4th June 2022 10:55:32 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2022 Camel Lu
 */

// KMP 解决
const getNext = (needle) => {
  let next = [];
  let left = 0,
    right = 1;
  next.push(0);
  while (right < needle.length) {
    while (left > 0 && needle[left] !== needle[right]) {
      // left--;
      left = next[left - 1];
    }
    if (needle[left] === needle[right]) {
      left++;
    }
    right++;
    next.push(left);
  }

  return next;
};

var strStr = function (haystack, needle) {
  if (haystack.length < needle.length) return -1;
  const next = getNext(needle);
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === needle.length) return i - j + 1;
  }
  return -1;
};
console.log('🚀 ~ file: index.js ~ line 16 ~ res', res);

const test = strStr(
  'ababaabbbbababbaabaaabaabbaaaabbabaabbbbbbabbaabbabbbabbbbbaaabaababbbaabbbabbbaabbbbaaabbababbabbbabaaabbaabbabababbbaaaaaaababbabaababaabbbbaaabbbabb',
  'abbabbbabaa'
);
