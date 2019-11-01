/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (!obstacleGrid.length) return 0
  if (!obstacleGrid[0].length) return 0
  const dp = new Array(obstacleGrid.length)
    .fill(null)
    .map(item => new Array())

  dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1
  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      if (i === 0 && j === 0) continue
      const left = (obstacleGrid[i - 1] !== undefined && obstacleGrid[i - 1][j] === 0) ? dp[i - 1][j] : 0
      const top = (obstacleGrid[i][j - 1] !== undefined && obstacleGrid[i][j - 1] === 0) ? dp[i][j - 1] : 0
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : left + top
    }
  }

  return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
};
// @lc code=end
const obstacle = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]
console.log('unique path II:  ', uniquePathsWithObstacles(obstacle))