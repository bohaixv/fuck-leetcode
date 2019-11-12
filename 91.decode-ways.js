/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (!s.length || s[0] === '0') return 0
  const dp = new Array(s.length)

  dp[0] = 1
  for (let i = 1; i <= s.length; i++) {
    dp[i] = s[i - 1] === '0' ? 0 : dp[i - 1]

    if (i > 1 && (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] <= '6'))) {
      dp[i] += dp[i - 2]
    }
  }

  return dp[s.length]
};
// @lc code=end

console.log('numDecodings test 226', numDecodings("226"))
console.log('numDecodings test 12', numDecodings("12"))
console.log('numDecodings test 0', numDecodings("0"))
console.log('numDecodings test 00', numDecodings("00"))