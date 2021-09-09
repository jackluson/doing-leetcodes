/*
给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

 

示例 1：

输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"
示例 2：

输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"
示例 3：

输入：s = ""
输出：0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let maxLen = 0;
  const stack = [-1];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length) {
        const curMaxLen = i - stack[stack.length - 1];
        maxLen = Math.max(maxLen, curMaxLen);
      } else {
        stack.push(i);
      }
    }
  }
  return maxLen;
};
