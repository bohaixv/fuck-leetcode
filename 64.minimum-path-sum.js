/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (!grid.length) return 0
  if (!grid[0].length) return 0
  const dp = new Array(grid.length).fill(null)
    .map(item => new Array())

  dp[0][0] = grid[0][0]
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i === 0 && j === 0) continue
      if (grid[i - 1] === undefined) {
        dp[i][j] = dp[i][j - 1] + grid[i][j]
      } else if (grid[i][j - 1] === undefined) {
        dp[i][j] = dp[i - 1][j] + grid[i][j]
      } else {
        dp[i][j] = Math.min(dp[i][j - 1] + grid[i][j], dp[i - 1][j] + grid[i][j])
      }
    }
  }

  return dp[grid.length - 1][grid[0].length - 1]
};
// @lc code=end

const grid = [[1, 2], [1, 1]]

console.log('minPathSum:', minPathSum(grid))