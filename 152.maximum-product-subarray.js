/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const dp = new Array(nums.length + 1)
  const dpNegative = new Array(nums.length + 1)
  dp[0] = 0
  dp[1] = nums[0]

  dpNegative[0] = 0
  dpNegative[1] = nums[0]

  let max = nums[0] || 0
  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] * nums[i - 1], nums[i - 1], dpNegative[i - 1] * nums[i - 1])
    dpNegative[i] = Math.min(dp[i - 1] * nums[i - 1], nums[i - 1], dpNegative[i - 1] * nums[i - 1])
    max = Math.max(max, dp[i])
  }

  return max
};
// @lc code=end

console.log('maximum product subarray ', maxProduct([-2, 0, -1]))
console.log('maximum product subarray ', maxProduct([-2]))
console.log('maximum product subarray ', maxProduct([-2, 3, -4]))
console.log('maximum product subarray ', maxProduct([-1, -2, -9, -6]))
console.log('maximum product subarray ', maxProduct([2, -5, -2, -4, 3]))