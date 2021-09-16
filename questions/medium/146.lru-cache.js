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

/**
 * @param {number} key
 * @param {number} value
 */
var LRUNode = function (key, value, next = null, prev = null) {
  this.key = key;
  this.value = value;
  this.next = next;
  this.prev = prev;
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.size = 0;
  this.capacity = capacity;
  this.cache = new Map();
  // 没有设置虚拟节点
  this.head = null;
  this.tail = null;
  // 虚拟节点
  /* this.head = new LRUNode(null, null);
  this.tail = new LRUNode(null, null);
  this.head.next = this.tail;
  this.tail.prev = this.head; */
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  var node = this.cache.get(key);
  if (!isNil(node)) {
    this.moveToHead(node);
    return node.value;
  }
  return -1;
};

/**
 * @param {number} node
 */
LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node);
  //改变原来node指向
  node.next = this.head;
  node.prev = null;
  this.prependNode(node);
};

/**
 * @param {number} node
 */
LRUCache.prototype.removeNode = function (node) {
  if (node === this.head) {
    this.head = node.next;
    if (this.head) {
      this.head.prev = null;
    }

    if (node === this.tail) {
      this.tail = null;
    }
  } else if (this.tail === node) {
    console.log("tailnode", node);
    this.tail = node.prev;
    this.tail.next = null;
    console.log("head--tail", this.tail);
    console.log("head--tail", this.head);
  } else {
    console.log("middle node", node);
    var prevNode = node.prev;
    var nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
};

/**
 * @param {number} node
 */
LRUCache.prototype.prependNode = function (node) {
  if (this.head) {
    this.head.prev = node;
  }

  this.head = node;
  if (!this.tail) {
    this.tail = node;
  }
};

/**
 * @param {number} node
 */
LRUCache.prototype.removeTail = function () {
  if (!this.tail) {
    return null;
  }
  const deletedTail = this.tail;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
    return deletedTail;
  }
  this.tail = this.tail.prev;
  this.tail.next = null;
  return deletedTail;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  var node = this.cache.get(key);
  if (!isNil(node)) {
    node.value = value;
    this.moveToHead(node);
  } else {
    var newNode = new LRUNode(key, value, this.head);
    this.cache.set(key, newNode);
    this.prependNode(newNode);
    this.size++;

    if (this.size > this.capacity) {
      var tailNode = this.removeTail();
      this.cache.delete(tailNode.key);
      this.size--;
    }
  }
};

const lRUCache = new LRUCache(2);
var res = lRUCache.put(2, 3); // 返回 1
var res = lRUCache.put(1, 1); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
var res = lRUCache.get(2);
console.log("res", res);
var res = lRUCache.put(3, 1); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
var res = lRUCache.put(2, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log("res", res);
var res = lRUCache.put(4, 1); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log("res", res);
var res = lRUCache.get(1); // 返回 -1 (未找到)
console.log("res", res);
var res = lRUCache.get(2); // 返回 3
console.log("res", res);
var res = lRUCache.get(4); // 返回 4
