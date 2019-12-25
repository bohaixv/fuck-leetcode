/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  const dp = new Array(dungeon.length + 1)    // 代表从 i，j这个点到终点所需要的最小血量值
    .fill(null)
    .map(item=>new Array())

  dp[dungeon.length][dungeon[0].length] =Math.max(1, 1 - dungeon[dungeon.length - 1][dungeon[0].length - 1])
  for (let i = dungeon.length; i >=1  ; i--) {
    for (let j = dungeon[0].length; j >=1 ; j--) {
      if(i === dungeon.length && j === dungeon[0].length) continue
      dp[i][j] =Math.max(1, Math.min(
        dp[i+1] === undefined || dp[i+1][j] === undefined ? Infinity :dp[i+1][j],
        dp[i][j+1] === undefined ? Infinity : dp[i][j+1]
        ) - dungeon[i-1][j-1] )
    }
  }

  return dp[1][1]
};

const arr = [
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30 ,-5]
]
const arr1 = [[0,-3]]
const arr2 = [
  [1, -3,  3],
  [0, -2,  0],
  [-3,-3, -3]
]

const array = [[5,23,-48,-21,-72,-62,-19,-55,-3,-93,-84,14,-34,46,-82,-46,39,26,47,-71,-46,-3,-59,-93,-13,-72,19,-43,-51,-2,-6,-53,12,-40,15,-94,37,-3,-32,-97]]


console.log(calculateMinimumHP(arr))
console.log(calculateMinimumHP(arr1))
console.log(calculateMinimumHP(arr2))
console.log(calculateMinimumHP(array))
