/*
 * @lc app=leetcode id=97 lang=javascript
 *
 * [97] Interleaving String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (!s3.length && !s1.length && !s2.length) return true
  if (s1.length + s2.length !== s3.length) return false
  const dp = new Array(s1.length + 1).fill(null)
    .map(item => new Array())

  dp[0][0] = true
  for (let i = 1; i <= s2.length; i++) {
    dp[0][i] = dp[0][i - 1] && s2[i - 1] === s3[i - 1]
  }
  for (let i = 1; i <= s1.length; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1]
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) || (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1])
    }
  }

  return dp[s1.length][s2.length]
};
// @lc code=end

// console.log('isInterleave test ', isInterleave('aabcc', 'dbbca', 'aadbbcbcac'))
// console.log('isInterleave test 2', isInterleave('aabcc', 'dbbca', 'aadbbbaccc'))
// console.log('isInterleave test 2', isInterleave(
//   "a",
//   "b",
//   "a"))
// console.log('isInterleave test 2', isInterleave(
//   "aacaac",
//   "aacaaeaac",
//   "aacaaeaaeaacaac"))
console.log('isInterleave test 2', isInterleave(
  "ab",
  "b",
  "cbb"))