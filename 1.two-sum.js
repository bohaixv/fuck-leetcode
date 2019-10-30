/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  // function recurFind (nums, fn) {
  //   const [number, ...rest] = nums

  //   if (!rest.length) return fn(number)

  //   return recurFind(rest, function (n) {
  //     return fn(n + number)
  //   })
  // }


  function recurCompare ([number, ...rest], targetInner) {
    if (number + targetInner === target) return number
    if (rest.length === 0) return false
    return recurCompare(rest, targetInner)
  }

  function recurFind ([number, ...rest]) {
    const addNumber = recurCompare(rest, number)
    if (addNumber) return [number, addNumber]
    if (rest.length === 0) return 'nothing'
    return recurFind(rest)
  }

  return recurFind(nums)
};

