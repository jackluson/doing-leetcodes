/*
 * Desc: 最小栈
 * File: /minStack.js
 * Project: designProblem
 * File Created: Sunday, 3rd May 2020 7:44:14 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
  最小栈
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。


示例:

输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.


提示：

pop、top 和 getMin 操作总是在 非空栈 上调用。
*/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.container = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.container.push(x);
  return null
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.container.pop();
  return null;

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.container[this.container.length - 1];

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...this.container);

};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
