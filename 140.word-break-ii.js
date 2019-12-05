/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}   // 思路就是这么个思路。 但是就是会内存溢出。  我去网上看了下思路也没有其他新鲜的
 */
var wordBreak = function(s, wordDict) {
  const dp = new Array(s.length + 1).fill(null).map(item => new Array());
  let minIndex = Infinity;
  for (let i = 0; i < wordDict.length; i++) {
    minIndex = minIndex < wordDict[i].length ? minIndex : wordDict[i].length;
    if (wordDict[i] === s.slice(0, wordDict[i].length)) {
      dp[wordDict[i].length].push(wordDict[i]);
    }
  }

  for (let i = minIndex; i <= s.length; i++) {
    if (!dp[i].length) continue;
    for (let j = 0; j < wordDict.length; j++) {
      if (wordDict[j] === s.slice(i, i + wordDict[j].length)) {
        dp[i + wordDict[j].length] = (dp[i + wordDict[j].length] || []).concat(
          dp[i].map(item => `${item} ${wordDict[j]}`)
        );
      }
    }
    dp[i - 1] = null;
  }

  return dp[s.length];
};
// @lc code=end
const s = "catsanddog";
const wordDict = ["cat", "cats", "and", "sand", "dog"];
console.log("test word break ", wordBreak(s, wordDict));
console.log(
  "test word break ",
  wordBreak("pineapplepenapple", [
    "apple",
    "pen",
    "applepen",
    "pine",
    "pineapple"
  ])
);
console.log(
  "test word break ",
  wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])
);

console.log(
  "test word break heap out of memory",
  wordBreak(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    [
      "a",
      "aa",
      "aaa",
      "aaaa",
      "aaaaa",
      "aaaaaa",
      "aaaaaaa",
      "aaaaaaaa",
      "aaaaaaaaa",
      "aaaaaaaaaa"
    ]
  )
);
