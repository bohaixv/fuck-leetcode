/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const diff = []
  for (let i = prices.length - 1; i > 0; i--) {
    diff.push(prices[i] - prices[i - 1])
  }

  const dp = []
  let max = diff[0]
  dp[0] = diff[0]
  for (let j = 1; j < diff.length; j++) {
    dp[j] = Math.max(dp[j - 1] + diff[j], diff[j])
    max = Math.max(max, dp[j])
  }

  return max >= 0 ? max : 0
};
// @lc code=end

console.log('max profit test', maxProfit([7, 1, 5, 3, 6, 4]))
console.log('max profit test', maxProfit([7, 6, 4, 3, 1]))
console.log('max profit test', maxProfit([1, 2]))