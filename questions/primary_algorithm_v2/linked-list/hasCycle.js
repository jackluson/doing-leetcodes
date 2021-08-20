/*
 * Desc: 环形链表
 * File: /hasCycle.js
 * Project: linked-list
 * File Created: Tuesday, 21st April 2020 9:42:47 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。



示例 1：

输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。


示例 2：

输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。


示例 3：

输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head, weakMapHash = new WeakMap()) {

  if (!head) return false;

  if (weakMapHash.has(head)) return true;

  weakMapHash.set(head, true);

  const res = hasCycle(head.next, weakMapHash);

  return res;
};

const cycleNode = {
  val: 5,
  next: {
    val: 6,
    next: null
  }
}

const link = {
  val: 2,
  next: {
    val: 3,
    next: {
      val: 4,
      next: cycleNode
    }
  }
}

//cycleNode.next.next = link
cycleNode.next.next = cycleNode
console.log(hasCycle(link))
