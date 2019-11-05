/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const left = new Array(matrix.length).fill(null)
    .map(item => new Array())
  const right = new Array(matrix.length).fill(null)
    .map(item => new Array())
  const height = new Array(matrix.length).fill(null)
    .map(item => new Array())

  let max = 0
  for (let i = 0; i < matrix.length; i++) {
    let currentLeft = 0
    let currentRight = matrix[0].length
    for (let j = 0; j < matrix[i].length; j++) {
      currentLeft = matrix[i][j] === '1'
        ? currentLeft
        : j + 1
      if (matrix[i][j] === '1') {
        left[i][j] = Math.max(i - 1 >= 0 ? left[i - 1][j] : 0, currentLeft)
      } else {
        left[i][j] = 0
      }
    }

    for (let j = matrix[i].length - 1; j >= 0; j--) {
      currentRight = matrix[i][j] === '1'
        ? currentRight
        : j
      if (matrix[i][j] === '1') {
        right[i][j] = Math.min(i - 1 >= 0 ? right[i - 1][j] : Infinity, currentRight)
      } else {
        right[i][j] = matrix[i].length
      }
    }

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '1') {
        height[i][j] = (i - 1 >= 0 ? height[i - 1][j] : 0) + 1
      } else {
        height[i][j] = 0
      }
      max = Math.max(max, (right[i][j] - left[i][j]) * height[i][j])
    }

  }

  return max
};
// @lc code=end
const matrix = [["1", "0"]]
const matrix1 = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
]

console.log('maximalRectangle test ', maximalRectangle(matrix1))