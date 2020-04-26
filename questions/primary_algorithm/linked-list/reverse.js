/*
 * Desc: 反转链表
 * File: /reverse.js
 * Project: linked-list
 * File Created: Wednesday, 15th April 2020 5:03:38 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) return head;
  var preNode = null;
  var nextNode = null;
  var curNode = head;
  while (curNode) {
    nextNode = curNode.next;
    curNode.next = preNode;
    preNode = curNode;
    curNode = nextNode;
  }
  return preNode;

  // 解法二：递归结束条件
  // if (head === null || head.next === null) {
  //   return head
  // }

  // // 递归反转 子链表
  // let newReverseList = reverseList(head.next)
  // // 获取原来链表的第2个节点newReverseListTail
  // let newReverseListTail = head.next
  // // 调整原来头结点和第2个节点的指向
  // newReverseListTail.next = head
  // head.next = null

  // // 将调整后的链表返回
  // return newReverseList
};
