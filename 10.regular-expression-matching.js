/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (str, pattern) {
  // if (!pattern.length) return !str.length

  // const firstMatch = (str.length && (str[0] === pattern[0] || pattern[0] === '.'))

  // if (pattern.length >= 2 && pattern[1] === '*') {
  //   return (
  //     isMatch(str, pattern.slice(2))
  //     || (firstMatch && isMatch(str.slice(1), pattern))
  //   )
  // } else {
  //   isMatch(str.slice(1), pattern.slice(1))
  // }


  const result = new Array(str.length + 1)

  result[str.length][pattern.length] = true

  for (let i = str.length; i >= 0; i--) {
    for (let j = pattern.length - 1; j >= 0; j--) {
      const firstMatch = (i < str.length && (str[0] === pattern[0] || pattern[0] === '.'))
      if (j + 1 < pattern && pattern[j + 1] === '*') {
        result[i][j] = !!result[i][j + 2] || (firstMatch && result[i + 1][j])
      } else {
        result[i][j] = firstMatch && result[i + 1][j + 1]
      }
    }
  }

  return result[0][0]
};
// @lc code=end

