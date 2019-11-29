/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false)

  let minIndex = Infinity
  for (let i = 0; i < wordDict.length; i++) {
    minIndex = minIndex > wordDict[i].length ? wordDict[i].length : minIndex
    dp[wordDict[i].length] = dp[wordDict[i].length] || s.slice(0, wordDict[i].length) === wordDict[i]
  }

  for (let j = minIndex; j <= s.length; j++) {
    for (let i = 0; i < wordDict.length; i++) {
      dp[j + wordDict[i].length] = dp[j + wordDict[i].length] || (dp[j] && s.slice(j, j + wordDict[i].length) === wordDict[i])
    }
  }

  return dp[s.length]
};
// @lc code=end

console.log('word break test  leetcode', wordBreak("leetcode", ["leet", "code"]))
console.log('word break test  applepenapple', wordBreak("applepenapple", ["apple", "pen"]))
console.log('word break test  catsandog', wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
