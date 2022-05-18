function longestValidParentheses(str) {
  let longestNum = 0;
  const stack = [];
  stack.push(-1);
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (item === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length) {
        console.log("in1");
        const curLongestNum = i - stack[stack.length - 1];
        longestNum = Math.max(longestNum, curLongestNum);
      } else {
        console.log("in2");
        stack.push(i);
      }
    }
  }
  return longestNum;
}

console.log(longestValidParentheses("))(())")); // 4
console.log(longestValidParentheses("(()")); // 2
console.log(longestValidParentheses(")()())")); // 4
