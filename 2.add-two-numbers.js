/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
var addTwoNumbers = function (l1, l2) {
  function ListNode (val) {
    this.val = val;
    this.next = null;
  }

  let l3
  let current = null
  let init = false
  let carryOver = false

  function add (l1, l2) {
    let sum = l1.val + l2.val + (carryOver ? 1 : 0)

    if (sum > 9) {
      sum -= 10
      carryOver = true
    } else {
      carryOver = false
    }

    if (!current) {
      current = new ListNode(sum)
    } else {
      current.next = new ListNode(sum)
      current = current.next
    }

    if (!init) {
      l3 = current
      init = true
    }

    l1 = l1.next
    l2 = l2.next

    if (l1 && l2) add(l1, l2)

  }

  add(l1, l2, false)

  if (carryOver) {
    current.next = new ListNode(1)
  }

  return l3
};

