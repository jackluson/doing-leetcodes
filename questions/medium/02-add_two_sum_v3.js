/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var listToStr = function(list) {
  // 倒序链表转为字符串
  let str = ''
  while (list) {
    val = list.val
    list = list.next ? list.next : null
    str += val
  }
  return str
    .split('')
    .reverse()
    .join('')
}

var strToList = function(str) {
  // 数字转为链表，且倒序
  const arr = str.split('')
  const listNode = new ListNode(arr.shift())
  return arr.reduce((ori, cur) => {
    const ln = new ListNode(cur)
    ln.next = ori
    return ln
  }, listNode)
}

var add = function(a, b) {
  // 两个字符串相加
  var res = ''
  var c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = (c % 10) + res
    c = c > 9
  }
  return res
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const sum = add(listToStr(l1), listToStr(l2))
  return strToList(sum)
}
addTwoNumbers()
