/*
 * @lc app=leetcode id=87 lang=javascript
 *
 * [87] Scramble String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  const dp = new Array(s1.length).fill(null)
    .map(item => new Array(s2.length).fill(null).map(item => new Array()))

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      dp[i][j][1] = s1[i] === s2[j]
    }
  }

  for (let len = 2; len <= s1.length; len++) {
    for (let i = 0; i <= s1.length - len; i++) {
      for (let j = 0; j <= s2.length - len; j++) {
        for (let k = 1; k < len; k++) {
          dp[i][j][len] |= (dp[i][j][k] && dp[i + k][j + k][len - k] || dp[i][j + len - k][k] && dp[i + k][j][len - k])
        }
      }
    }
  }

  return !!dp[0][0][s1.length]
};
// @lc code=end
// const s1 = "great", s2 = "rgeat"  // 难点在于利用了三维dp方程去解决问题 
const s1 = "abcde", s2 = "caebd"
console.log('test isScramble', isScramble(s1, s2))