/*
 * Desc: 合并两个有序链表
 * File: /mergeTwoLists.js
 * Project: linked-list
 * File Created: Wednesday, 15th April 2020 10:01:43 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */
/* 
将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例：

输入：1->2->4, 0->3->4
输出：0->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // if have null
  if (!l1 || !l2) {
    return l1 || l2
  }
  const head = l1.val > l2.val ? l2 : l1
  let cur1 = l1.val > l2.val ? l2 : l1
  let cur2 = l1.val > l2.val ? l1 : l2
  let pre = null;
  while (cur1 && cur2) {
    while (cur2 && cur1.val > cur2.val) {
      const tempNode = {
        val: cur2.val,
        next: null,
      };

      // delete node
      if (cur2.next === null) {
        cur2 = null;
      } else {
        cur2.val = cur2.next.val;
        cur2.next = cur2.next.next;
      }
      // insert node to l1
      if (pre) {
        pre.next = tempNode;
      }
      tempNode.next = cur1;
      pre = tempNode;
    }
    // l1 遍历结束，来l2 还有节点
    if (cur1.next === null && cur2) {
      cur1.next = cur2;
      break;
    }
    pre = cur1;
    cur1 = cur1.next;
  }

  return head;
};

var l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 5,
      next: null
    }
  }
}

var l2 = {
  val: 1,
  next: {
    val: 3,
    next: null
    // next: {
    //   val: 4,
    //   next: null
    // }
  }
}

console.log(mergeTwoLists(l1, l2))
