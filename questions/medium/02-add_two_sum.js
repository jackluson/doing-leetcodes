/* eslint-disable no-irregular-whitespace */
// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
/*
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 */
class LinkedListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}

class LinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    /** @var LinkedListNode */
    this.head = null

    /** @var LinkedListNode */
    this.tail = null

    // this.compare = new Comparator(comparatorFunction)
  }
  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value)

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  /**
   * @return {LinkedListNode[]}
   */
  toArray() {
    const nodes = []

    let currentNode = this.head
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }
  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString()
  }
}
// l1 -- [2,3,3]
// l2 -- [5, 2, 2]
// 先构造一个链表L1
const l1 = new LinkedList()
// 向链表追加数据
l1.append(2)
l1.append(3)
l1.append(3)
l1.append(6)

console.log(l1.toString())

// 先构造一个链表L2
const l2 = new LinkedList()
// 向链表追加数据
l2.append(5)
l2.append(9)
l2.append(7)
l2.append(4)
l2.append(5)
console.log(l2.toString())

var addTwoNumbers = function(l1, l2) {
  const l3 = new LinkedList()
  let currentNodeL1 = l1.head
  let currentNodeL2 = l2.head
  while (currentNodeL1 || currentNodeL2) {
    let sum = 0
    if (
      (currentNodeL1 && currentNodeL1.flag) ||
      (currentNodeL2 && currentNodeL2.flag)
    ) {
      sum = +1
    }
    const tempCurVal1 = currentNodeL1 ? currentNodeL1.value : 0
    const tempCurVal2 = currentNodeL2 ? currentNodeL2.value : 0
    sum = sum + tempCurVal1 + tempCurVal2
    let flag = 0
    if (sum > 9) {
      sum = sum % 10
      flag = 1
    }

    l3.append(sum)
    currentNodeL1 = currentNodeL1 && currentNodeL1.next
    currentNodeL2 = currentNodeL2 && currentNodeL2.next
    if (flag) {
      if (currentNodeL1) {
        currentNodeL1.flag = flag
      }
      if (currentNodeL2) {
        currentNodeL2.flag = flag
      }
      // 进阶且都没节点的情况
      if (!currentNodeL1 && !currentNodeL2) {
        currentNodeL1 = new LinkedListNode(flag)
      }
    }
  }
  return l3
}

console.log(addTwoNumbers(l1, l2).toString())
