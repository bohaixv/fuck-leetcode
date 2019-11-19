/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  if (!triangle.length) return 0
  const dp = new Array(triangle.length + 1).fill(null)
    .map(item => new Array())

  dp[0][0] = 0
  dp[0][1] = 0
  for (let i = 1; i <= triangle.length; i++) {
    for (let j = 1; j <= triangle[i - 1].length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] !== undefined ? dp[i - 1][j] + triangle[i - 1][j - 1] : Infinity,
        dp[i - 1][j - 1] !== undefined ? dp[i - 1][j - 1] + triangle[i - 1][j - 1] : Infinity
      )
    }
  }

  return dp[triangle.length].reduce((pre, next) => {
    return Math.min(pre, next)
  }, Infinity)
};
// @lc code=end
const arr = [
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
]

console.log('test 1', minimumTotal(arr))
console.log('test 2', minimumTotal([[-1], [2, 3], [1, -1, -3]]))
console.log('test 2', minimumTotal([[1]]))
