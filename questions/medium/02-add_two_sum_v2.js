/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 链表追加元素到当前链表
ListNode.prototype.prepend = function(val) {
  const tempNode = new ListNode(val)
  // 当前节点作为头结点
  //* 该方法行不通无法确定当前的this.next.next...位置(基于这个链表结构),所以采用颠倒的方式,先在首部追加节点
  tempNode.next = this
  return tempNode
  //
}
ListNode.prototype.toStr = function() {
  let strLink = this.val + ''
  let nextNode = this.next

  while (nextNode) {
    strLink = strLink + ',' + nextNode.val
    nextNode = nextNode.next
  }
  return strLink
}
/**
 * Reverse a linked list.
 * @returns {LinkedList}
 */
ListNode.prototype.toArray = function() {
  console.log(this.toStr())
  return this.toStr().split(',')
}
ListNode.prototype.reverse = function() {
  const tempLink = this.toArray().reduce(function(accumulator, val) {
    const tempNode = new ListNode(val)
    if (!accumulator) {
      accumulator = tempNode
      return accumulator
    } else {
      tempNode.next = accumulator
      return tempNode
    }
  }, null)
  return tempLink
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l3
  let currentNodeL1 = l1
  let currentNodeL2 = l2
  while (currentNodeL1 || currentNodeL2) {
    let sum = 0
    if (
      (currentNodeL1 && currentNodeL1.flag) ||
      (currentNodeL2 && currentNodeL2.flag)
    ) {
      sum = +1
    }
    const tempCurVal1 = currentNodeL1 ? currentNodeL1.val : 0
    const tempCurVal2 = currentNodeL2 ? currentNodeL2.val : 0
    sum = sum + tempCurVal1 + tempCurVal2
    var flag = 0
    if (sum > 9) {
      sum = sum % 10
      flag = 1
    }
    // 创建第一个节点
    if (!l3) {
      l3 = new ListNode(sum)
    } else {
      l3 = l3.prepend(sum)
    }

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
        currentNodeL1 = new ListNode(flag)
      }
    }
  }
  return l3.reverse()
}
