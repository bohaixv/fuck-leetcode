/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (str) {
  const dp = new Array(str.length).fill(0)
  let max = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ')') {
      if (str[i - 1] === '(') {
        dp[i] = i - 2 >= 0 ? dp[i - 2] + 2 : 2
      } else {
        if (i - 1 - dp[i - 1] >= 0 && str[i - 1 - dp[i - 1]] === '(') {
          dp[i] = dp[i - 1] + 2 + (i - 1 - dp[i - 1] - 1 >= 0 ? dp[i - 1 - dp[i - 1] - 1] : 0)
        }
      }

      max = Math.max(max, dp[i])
    }
  }

  return max
};
// @lc code=end

console.log('valid  parentheses:', longestValidParentheses("()(())"))