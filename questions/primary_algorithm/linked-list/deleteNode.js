/*
 * Desc: 删除链表中的节点
 * File: /deleteNode.js
 * Project: linked-list
 * File Created: Wednesday, 15th April 2020 9:35:31 am
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
要求：
请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。

现有一个链表-- head = [4, 5, 1, 9]，它可以表示为:

示例 1:

输入: head = [4, 5, 1, 9], node = 5
输出: [4, 1, 9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

说明:
链表至少包含两个节点。
链表中所有节点的值都是唯一的。
给定的节点为非末尾节点并且一定是链表中的一个有效节点。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {

  node.val = node.next.val
  node.next = node.next.next;

};
