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

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      dp[j] = i === j ? nums[i] : dp[j - 1] + nums[j]
      max = Math.max(dp[j], max)
    }
  }

  return max
};
// @lc code=end

console.log('[-2,1,-3,4,-1,2,1,-5,4]', maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))