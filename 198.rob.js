function rob (nums) {
    const dp = new Array(nums.length)

    dp[0] = 0
    dp[1] = nums[0]
    dp[2] = nums[1]
    dp[3] = nums[2] + nums[0]

    let max = Math.max(dp[0] || 0, dp[1] || 0, dp[2] || 0, dp[3] || 0)

    for (let i = 4; i<= nums.length; i++) {
        dp[i] = Math.max(dp[i-2], dp[i-3]) + nums[i-1]
        max = Math.max(max, dp[i])
    }

    return max
}

console.log('rob test', rob([2,7,9,3,1]))
