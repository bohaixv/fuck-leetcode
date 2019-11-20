/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const dp = new Array(nums.length)

  let max = nums[0]
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    // dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    dp[i] = dp[i - 1] + nums[i] > nums[i] ? dp[i - 1] + nums[i] : nums[i]
    max = Math.max(max, dp[i])
  }

  return max
};
// @lc code=end

console.log('[-2,1,-3,4,-1,2,1,-5,4]', maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))