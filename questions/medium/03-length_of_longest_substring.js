/*
示例 1:

输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
/**
 * 从一个对象找出出最大的数字 key:num
 * @param {*} obj
 * return maxNum
 */
// var findMaxNumFromObj = function(obj) {
//   let maxNum = 0
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const tempVal = obj[key]
//       if (tempVal > maxNum) {
//         maxNum = tempVal
//       }
//     }
//   }
//   return maxNum
// }
/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
// 方法一：暴力法
var lengthOfLongestSubstring = function(s) {
  // 新建一个obj存储不重复字符串的长度
  // const objStr = {}
  let maxNum = 0
  for (let i = 0; i < s.length; i++) {
    let currentSubstr = s[i]
    for (let j = i + 1; j < s.length; j++) {
      if (currentSubstr.indexOf(s[j]) > -1) {
        if (currentSubstr.length > maxNum) {
          maxNum = currentSubstr.length
        }
        // objStr[currentSubstr] = currentSubstr.length
        break
      } else {
        currentSubstr = currentSubstr + s[j]
      }
      // 最后一个字符时
      if (j === s.length - 1) {
        // objStr[currentSubstr] = currentSubstr.length
        if (currentSubstr.length > maxNum) {
          maxNum = currentSubstr.length
        }
      }
    }
    // 第一层遍历最后一个字符时
    if (i + 1 === s.length && currentSubstr.length > 0) {
      // objStr[currentSubstr] = currentSubstr.length
      //
      if (currentSubstr.length > maxNum) {
        maxNum = currentSubstr.length
      }
    }
  }
  // const maxNum = findMaxNumFromObj(objStr)
  return maxNum
}
// 方法二：滑动窗口
var lengthOfLongestSubstring2 = function(s) {
  if (!s) return 0
  const len = s.length
  if (len === 1) return 1
  let num = 0
  const index = new Array(len)
  for (let j = 0, i = 0; j < len; j++) {
    i = Math.max(index[s.charAt(j)] || 0, i)
    num = Math.max(num, j - i + 1)
    index[s.charAt(j)] = j + 1
  }
  return num
}
// 方法三：优化的滑动窗口
var lengthOfLongestSubstring3 = function(s) {
  let num = 0
  let j = 0
  let t = 0
  for (let i = 0; i < s.length; i++) {
    t = s.slice(j, i).indexOf(s[i])
    if (t === -1) {
      num = Math.max(num, i - j + 1)
    } else {
      j = j + t + 1
    }
  }
  return num
}
console.time()
console.log(lengthOfLongestSubstring('jiosdijfo'))
console.timeEnd()

console.time()
console.log(lengthOfLongestSubstring2('jiosdijfo'))
console.timeEnd()

console.time()
console.log(lengthOfLongestSubstring3('jiosdijfo'))
console.timeEnd()
