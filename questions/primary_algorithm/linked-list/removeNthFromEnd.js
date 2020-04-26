/*
 * Desc: 删除链表的倒数第N个节点
 * File: /removeNthFromEnd.js
 * Project: linked-list
 * File Created: Wednesday, 15th April 2020 3:38:37 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
要求：
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let headNode = head;
  let tempNode = head;
  let size = 1;
  while (tempNode.next) {
    tempNode = tempNode.next;
    size++;
  }
  //  处理只有一个节点，和删除首节点的情况；
  if (size === 1) {
    return null;
  } else if (size === n) {
    headNode = head.next;
    return headNode;
  }
  tempNode = head;
  while (size - n !== 1) {
    tempNode = tempNode.next;
    size--;
  }
  tempNode.next = tempNode.next ? tempNode.next.next : null;
  return headNode;
};
