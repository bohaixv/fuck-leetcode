/*
 * @lc app=leetcode id=115 lang=javascript
 *
 * [115] Distinct Subsequences
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  if (!s.length && !t.length) return 0
  const dp = new Array(t.length + 1).fill(null)
    .map(item => new Array(s.length + 1).fill(0))

  for (let j = 0; j < s.length + 1; j++) {
    dp[0][j] = 1
  }

  for (let i = 1; i <= t.length; i++) {
    for (let j = i; j <= s.length; j++) {
      if (t[i - 1] === s[j - 1]) {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j - 1]
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }


  return dp[t.length][s.length]
};
// @lc code=end

console.log('test num distant', numDistinct('rabbbit', 'rabbit'))
console.log('test num distant', numDistinct('babgbag', 'bag'))
console.log('test num distant', numDistinct('ccc', 'c'))
console.log('test num distant', numDistinct('aabb', 'abb'))
console.log('test num distant', numDistinct("aaabbaaaabbbaaaaba", "abba"))