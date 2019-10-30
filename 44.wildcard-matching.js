/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (str, pattern) {
  if (!pattern.length) return !str.length

  const firstMatch = (!!str.length && (str[0] === pattern[0] || pattern[0] === '?' || pattern[0] === '*'))

  if (pattern[0] === '*') {
    if (str[0] === pattern[1] || pattern[1] === '?') {
      return (
        (!!str.length && isMatch(str.slice(1), pattern.slice(2)))
        || (!!str.length && isMatch(str.slice(1), pattern))
        || isMatch(str, pattern.slice(1))
      )
    } else if (pattern[1] === '*') {
      return (
        isMatch(str, pattern.slice(1))
      )
    } else {
      return (!!str.length && isMatch(str.slice(1), pattern))
    }
  }

  return firstMatch && isMatch(str.slice(1), pattern.slice(1))
};

function match (str, pattern) {
  if (!pattern.length) return !str.length
  const dp = new Array(str.length + 1)
    .fill(null)
    .map(item => new Array())

  dp[str.length][pattern.length] = true

  for (let i = str.length; i >= 0; i--) {
    for (let j = pattern.length - 1; j >= 0; j--) {
      const firstMatch = (i < str.length && (str[i] === pattern[j] || pattern[j] === '?' || pattern[j] === '*'))
      if (pattern[j] === '*') {
        if (pattern[j + 1] !== undefined && str[i] === pattern[j + 1] || pattern[j + 1] === '?') {
          dp[i][j] = (i < str.length && dp[i + 1][j + 2]) || (i < str.length && dp[i + 1][j]) || (i < str.length && dp[i][j + 1])
        } else if (pattern[j + 1] !== undefined && pattern[j + 1] === '*') {
          dp[i][j] = dp[i][j + 1]
        } else if (pattern[j + 1] === undefined) {
          dp[i][j] = true
        } else {
          dp[i][j] = (i < str.length && dp[i + 1][j])
        }
      } else {
        dp[i][j] = firstMatch && !!dp[i + 1][j + 1]
      }
    }
  }

  return dp[0][0]
}
// @lc code=end

// console.log('mississippi is Match', isMatch('mississippi', 'm??*ss*?i*pi'))   // false
// console.log('acdcb is Match', isMatch('acdcb', 'a*c?b'))  // false
// console.log('adceb is Match', isMatch('adceb', '*a*b'))  // true
// console.log('abefcdgiescdfimde is Match', isMatch('abefcdgiescdfimde', 'ab*cd?i*de'))  // true
// console.log('aa is Match', isMatch('aa', '*'))  // true
// console.log('aaaa is Match', isMatch('aaaa', '***a'))  // true
// console.log('*a is Match', isMatch('aaaa', '*a'))  // true
// console.log('c is Match', isMatch('c', '*?*'))  // true
// console.log('ho is Match', isMatch('ho', '**ho'))  // true
// console.log('b is Match', isMatch('b', 'a*******b'))  // false
// console.log('aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba is Match', isMatch('aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba', '?*?'))  // true
// console.log('bbaaaabaaaaabbabbabbabbababaabababaabbabaaabbaababababbabaabbabbbbbbaaaaaabaabbbbbabbbbabbabababaaaaa is Match', isMatch('bbaaaabaaaaabbabbabbabbababaabababaabbabaaabbaababababbabaabbabbbbbbaaaaaabaabbbbbabbbbabbabababaaaaa', '******aa*bbb*aa*a*bb*ab***bbba*a*babaab*b*aa*a****'))  // false



// console.log('mississippi is Match', match('mississippi', 'm??*ss*?i*pi'))   // false
// console.log('acdcb is Match', match('acdcb', 'a*c?b'))  // false
// console.log('adceb is Match', match('adceb', '*a*b'))  // true
// console.log('abefcdgiescdfimde is Match', match('abefcdgiescdfimde', 'ab*cd?i*de'))  // true
// console.log('aa is Match', match('aa', '*'))  // true  *
// console.log('aa is Match', match('aa', 'a'))  // false  *
console.log('aa is Match', match('a', ''))  // false  *
// console.log('aaaa is Match', match('aaaa', '***a'))  // true
// console.log('*a is Match', match('aaaa', '*a'))  // true
// console.log('c is Match', match('c', '*?*'))  // true  *
// console.log('ho is Match', match('ho', '**ho'))  // true
// console.log('b is Match', match('b', 'a*******b'))  // false
// console.log('aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba is Match', match('aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba', '?*?'))  // true
// console.log('bbaaaabaaaaabbabbabbabbababaabababaabbabaaabbaababababbabaabbabbbbbbaaaaaabaabbbbbabbbbabbabababaaaaa is Match', match('bbaaaabaaaaabbabbabbabbababaabababaabbabaaabbaababababbabaabbabbbbbbaaaaaabaabbbbbabbbbabbabababaaaaa', '******aa*bbb*aa*a*bb*ab***bbba*a*babaab*b*aa*a****'))  // false
