/*
 * @lc app=leetcode id=312 lang=javascript
 *
 * [312] Burst Balloons
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  // if (!nums.length) return 0
  // if (nums.length === 1) return nums[0]

  // return Math.max(
  //   ...nums.map((item, index) => {
  //     const newArray = [...nums]

  //     return (index - 1 >= 0 ? nums[index - 1] : 1) * item * (index + 1 <= nums.length - 1 ? nums[index + 1] : 1) + maxCoins((newArray.splice(index, 1), newArray))
  //   })
  // )
  const dp = new Array(nums.length).fill(null)
    .map(item => new Array())

  const length = nums.length
  nums[-1] = 1
  nums[nums.length] = 1
  for (let i = 0, j = 0; j < length; j++) {
    let left = i
    let right = j
    while (right < length) {
      if (left === right) {
        dp[left][right] = nums[left - 1] * nums[left] * nums[left + 1]
      } else {
        dp[left][right] = Math.max(
          ...nums
            .map((item, index) => {
              if (!(index <= right && index >= left)) return
              if (index === left) {
                return nums[left - 1] * nums[index] * nums[right + 1] + dp[index + 1][right]
              } else if (index === right) {
                return nums[left - 1] * nums[index] * nums[right + 1] + dp[left][index - 1]
              } else {
                return dp[left][index - 1] + nums[left - 1] * nums[index] * nums[right + 1] + dp[index + 1][right]
              }
            })
            .filter(item => !!item || item === 0)
        )
      }
      left++
      right++
    }
  }

  return dp[0][length - 1]
};
// @lc code=end

// console.log('[3,1,5,8]: max cions ', maxCoins([3, 1, 5, 8]))
console.log('[8,9,5,1,1,7,7,3,2,1,6,4,9,7,2,0,0,7,9,4,0,7,8,5,1,3,6,9]: max cions ', maxCoins([8, 9, 5, 1, 1, 7, 7, 3, 2, 1, 6, 4, 9, 7, 2, 0, 0, 7, 9, 4, 0, 7, 8, 5, 1, 3, 6, 9]))
// console.log('[2,0,0,7]: max cions ', maxCoins([2, 0, 0, 7]))