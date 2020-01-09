// 著名的汉诺塔问题

/**
 * 
 * @param {*} n 需要移动的盘子个数
 * @param {*} a 盘子当前所在位置
 * @param {*} b 辅助杆
 * @param {*} c 目标位置
 * 
 * 
 * 
 * 拆解为二个步骤 
 * 划分依据为将第n个盘子从a移动到c上面去
 * 在这之前 将a的n-1个盘子从a移动到b上面
 * 在这之后 将b的n-1个盘子从b移动到c上面
 */
function hanoi(n , a , b, c) {
    if(n === 1){
        console.log(`将盘子从 ${a} 移动到${c} 上`)
        return
    } 

    hanoi(n-1 , a, c, b)

    console.log(`将盘子从 ${a} 移动到${c} 上`)

    hanoi(n-1 , b, a, c)
}

hanoi(2, 'A', 'B', 'C')
