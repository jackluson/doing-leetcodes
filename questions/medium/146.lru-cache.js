/*
 * Desc:
 * File: /146.lru-cache.js
 * Project: medium
 * File Created: Monday, 13th September 2021 6:08:31 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2020 Camel Lu
 */

/*
运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
实现 LRUCache 类：

LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 

进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？

 

示例：

输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
*/

/**
 * @param {any} value
 */
var isNil = function (value) {
  return value === null || value === undefined;
};

function LRUNode(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.size = 0;
  this.capacity = capacity;
  this.head = new LRUNode(null, null);
  this.tail = new LRUNode(null, null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const res = this.find(key);
  if (~res) {
    this.stack.splice(res.index, 1);
    this.stack.unshift(res.value);
    return res.value.get(key);
  }
  return -1;
};

LRUCache.prototype.find = function (key) {
  for (let i = 0; i < this.stack.length; i++) {
    const itemMap = this.stack[i];
    if (itemMap.has(key)) {
      return {
        index: i,
        value: itemMap,
      };
    }
  }
  return -1;
};

LRUCache.prototype.addHeadNode = function (node) {
  // const head = this.dummyHead.next
  // node.next = head
  // head.prev = node
  // node.prev = this.dummyHead
  // this.dummyHead.next = node
  this.head.prev = node;
  node.next = this.head;
  this.head = node;
  if (this.size === 0) {
    this.tail = this.head;
  }
  // this.size
  // if(this.tail)
  // this.tail
  // const head = this.head.next;
  // node.next = head;
  // head.prev = node;
  // node.prev = this.head;
  // this.head.next = node;
  // node.prev = this.head;
  // node.next = this.head.next;
  // this.head.next.prev = node;
  // this.head.next = node;
  // node.next = this.head;
};

LRUCache.prototype.removeTail = function () {
  const deletedTail = this.tail;

  if (this.head === this.tail) {
    // There is only one node in linked list.
    this.head = new LRUNode(null, null);
    this.tail = new LRUNode(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  this.tail = this.tail.prev;
  this.tail.next = new LRUNode(null, null);
  // this.tail.prev = this.tail;
  // this.
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = this.cache.get(key);
  if (isNil(node)) {
    const newNode = new LRUNode(key, value);
    this.addHeadNode(newNode);
    this.size++;
    if (this.size > this.capacity) {
      this.removeTail();
      this.size--;
    }
  }
  // if (~res) {
  //   const refleshMap = this.stack[res.index].set(key, value);
  //   this.stack.splice(res.index, 1);
  //   this.stack.unshift(refleshMap);
  // } else {
  //   const mapItem = new Map();
  //   mapItem.set(key, value);
  //   this.stack.unshift(mapItem);
  //   if (this.stack.length > this.capacity) {
  //     this.stack.length = this.capacity;
  //   }
  // }
};

const lRUCache = new LRUCache(2);
var res = lRUCache.put(2, 1); // 返回 1
console.log("res", res);
var res = lRUCache.put(1, 1); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
var res = lRUCache.put(3, 1); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.size);
// var res = lRUCache.put(2, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// console.log("res", res);
// console.log(lRUCache.stack);
// var res = lRUCache.put(4, 1); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// console.log("res", res);
// console.log(lRUCache.stack);
// var res = lRUCache.get(1); // 返回 -1 (未找到)
// console.log("res", res);
// var res = lRUCache.get(2); // 返回 3
// console.log("res", res);
// var res = lRUCache.get(4); // 返回 4
