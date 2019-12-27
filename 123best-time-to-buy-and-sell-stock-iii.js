/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const positiveDp = new Array(prices.length)
    const negetiveDp = new Array(prices.length)

    const diff = []
    for (let i = 0; i<prices.length -1 ; i++) {
        diff[i] = prices[i+1] - prices[i]
    }

    positiveDp[0] = 0
    positiveDp[1] = diff[0]
    for (let i = 2 ; i <= diff.length ; i++) {
        positiveDp[i] = Math.max(positiveDp[i-1] + diff[i-1] , diff[i-1])
    }

    negetiveDp[0] = [0]
    negetiveDp[diff.length] = diff[diff.length - 1]
    for (let i = diff.length - 1 ; i >=1 ;i--) {
        negetiveDp[i] = Math.max(negetiveDp[i+1] + diff[i-1] , diff[i-1])
    }

    let max = 0
    for (let i = 1 ; i < prices.length ; i++) {
        const positive = Math.max(...positiveDp.slice(0 , i))
        const negetive = Math.max(...negetiveDp.slice(i , negetiveDp.length))
        max = Math.max(
            max,
            positive + negetive
        )
    }

    return max
};

// console.log(maxProfit([0,5,3,5,6,6,7,8]))
// console.log(maxProfit([3,3,5,0,0,3,1,4]))  //6
// console.log(maxProfit([1,2,3,4,5]))  //4
// console.log(maxProfit([7,6,4,3,1]))  //0

/**
 * 泛化抽象整体问题， 将两次买卖分为   买一  卖一  买二 卖二   总体就是  sellTwo - buyTwo + sellOne - buyOne 串联起来的
 * 这里分别找出了  最小的买 和最大的卖  故在求买的值时用的是 -values
 */
const maxProfitOptimize = function (prices) {
    let buyOne = -Infinity ,
        buyTwo = -Infinity ,
        sellOne = 0,
        sellTwo = 0

    for (let value of prices) {
        buyOne = Math.max(buyOne , -value)
        sellOne = Math.max(sellOne , value + buyOne )
        buyTwo = Math.max(buyTwo ,sellOne - value )
        sellTwo = Math.max(sellTwo , buyTwo + value)
    }

    return sellTwo
}


console.log(maxProfitOptimize([0,5,3,5,6,6,7,8]))
console.log(maxProfitOptimize([3,3,5,0,0,3,1,4]))  //6
console.log(maxProfitOptimize([1,2,3,4,5]))  //4
console.log(maxProfitOptimize([7,6,4,3,1]))  //0
