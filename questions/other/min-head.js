/*
 * Desc:
 * File: /min-head.js
 * Project: other
 * File Created: Wednesday, 15th June 2022 11:59:56 pm
 * Author: luxuemin2108@gmail.com
 * -----
 * Copyright (c) 2022 Camel Lu
 */

function push(heap, node) {
  const index = heap.length;
  heap.push(node); // 在堆尾部添加元素
  siftUp(heap, node, index); // 进行上浮操作
}

function siftUp(heap, node, i) {
  let index = i;
  while (true) {
    const parentIndex = (index - 1) >>> 1; // 父节点位置： parentIndex = childIndex / 2
    const parent = heap[parentIndex];
    if (parent !== undefined && compare(parent, node) > 0) {
      // The parent is larger. Swap positions.
      heap[parentIndex] = node;
      heap[index] = parent;
      index = parentIndex;
    } else {
      // The parent is smaller. Exit.
      return;
    }
  }
}

function pop(heap) {
  const first = heap[0]; // 取出根节点
  if (first !== undefined) {
    const last = heap.pop(); // 取出最后一位元素，并删除
    if (last !== first) {
      heap[0] = last; // 与根节点对调
      siftDown(heap, last, 0); // 下沉
    }
    return first;
  } else {
    return null;
  }
}

function siftDown(heap, node, i) {
  let index = i;
  const length = heap.length;
  while (index < length) {
    const leftIndex = (index + 1) * 2 - 1;
    const left = heap[leftIndex];
    const rightIndex = leftIndex + 1;
    const right = heap[rightIndex];

    // If the left or right node is smaller, swap with the smaller of those.
    // 寻找左右儿子较小的那一个替换
    if (left !== undefined && compare(left, node) < 0) {
      //左子节点小于根节点
      if (right !== undefined && compare(right, left) < 0) {
        heap[index] = right;
        heap[rightIndex] = node;
        index = rightIndex;
      } else {
        heap[index] = left;
        heap[leftIndex] = node;
        index = leftIndex;
      }
    } else if (right !== undefined && compare(right, node) < 0) {
      // 左子节点大于根节点，右子节点小于根节点
      heap[index] = right;
      heap[rightIndex] = node;
      index = rightIndex;
    } else {
      // Neither child is smaller. Exit.
      return;
    }
  }
}

const getRandom = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};
let head = [];
let count = 8;
for (let i = 0; i < count; i++) {
  let item = getRandom(0, 15);
  //console.log('item', item);
  push(head, item);
}

function compare(a, b) {
  return a - b;
}
console.log(head);
console.log('------------');
pop(head);
console.log(head);
console.log('------------');
