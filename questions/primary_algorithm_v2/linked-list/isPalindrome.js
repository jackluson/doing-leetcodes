/*
 * Desc: 回文链表
 * File: /isPalindrome.js
 * Project: linked-list
 * File Created: Tuesday, 21st April 2020 10:06:30 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

  if (!head) return true;

  const arr = [];

  let cur = head;

  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }

  return arr.join('') === arr.reverse().join('');


};
