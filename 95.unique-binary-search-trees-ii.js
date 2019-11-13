/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  function generateTree (left, mid, right) {
    if (left === mid && mid === right) return [new TreeNode(left)]
    let leftTrees = []
    if (left === mid) {
      leftTrees.push(null)
    } else {
      for (let i = left; i < mid; i++) {
        leftTrees = [...leftTrees, ...generateTree(left, i, mid - 1)]
        // leftTrees.concat(generateTree(left, i, mid - 1))
      }
    }
    let rightTrees = []

    if (right === mid) {
      rightTrees.push(null)
    } else {
      for (let i = mid + 1; i <= right; i++) {
        rightTrees = [...rightTrees, ...generateTree(mid + 1, i, right)]
        // rightTrees.concat(generateTree(mid + 1, i, right))
      }
    }

    const result = []
    for (let i = 0; i < leftTrees.length; i++) {
      for (let j = 0; j < rightTrees.length; j++) {
        const root = new TreeNode(mid)
        root.left = leftTrees[i]
        root.right = rightTrees[j]
        result.push(root)
      }
    }

    return result
  }

  function TreeNode (val) {
    this.val = val;
    this.left = this.right = null;
  }

  let result = []
  for (let i = 0; i <= n; i++) {
    // result = [...result, ...generateTree(1, i, n)]
    result = result.concat(generateTree(1, i, n))
  }

  return result
}

// @lc code=end

console.log('generate tree test ', generateTrees(3))