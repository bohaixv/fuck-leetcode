/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const dp = new Array(word1.length + 1).fill(null)
    .map(item => new Array())

  dp[0][0] = 0

  for (let i = 0; i <= word1.length; i++) {
    for (let j = 0; j <= word2.length; j++) {
      if (i === 0 && j === 0) continue
      if (word1[i - 1] === word2[j - 1]) {
        if (i - 1 >= 0 && i - 2 >= 0 && word1[i - 1] === word1[i - 2]) {
          dp[i][j] = j - 1 >= 0 ? dp[i - 1][j - 1] : i
        } else {
          dp[i][j] = j - 1 >= 0 && i - 1 >= 0
            ? dp[i - 1][j - 1]
            : j - 1 < 0 ? i : i - 1 < 0 ? j : 0
        }
      } else {
        dp[i][j] = Math.min(
          i - 1 >= 0 ? dp[i - 1][j] + 1 : Infinity,
          i - 1 >= 0 && j - 1 >= 0 ? dp[i - 1][j - 1] + 1 : Infinity,
          j - 1 >= 0 ? dp[i][j - 1] + 1 : Infinity
        )
      }
    }
  }

  return dp[word1.length][word2.length]
};
// @lc code=end
"kitten"
"sitting"

console.log('minDistance test  horse', minDistance("horse", "ros"))
console.log('minDistance test  kitten', minDistance("kitten", "sitting"))
console.log('minDistance test  kitten', minDistance("e", "eeeeee"))