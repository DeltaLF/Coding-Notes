const items = [[30,30],[20,20],[15,15],[10,15],[5,10],[3,5],[7,10]] // [[weight, profit]]
let maxValue = 0
let currentValue = 0
function knapsack(array:number[][],start:number, free:number):void{
    // start:index free:weight
    // assume all items <= empty free space (or this loop will broekn)
    if(start >= array.length || array[start][0] > free){ // no free space
        //console.log("no free space", array,start,free)
        return
    }
    for(let i=start ; i<array.length;i++){
       if(array[i][0] > free){continue}
        currentValue = currentValue + array[i][1]
        maxValue = currentValue > maxValue ? currentValue : maxValue
        knapsack(array,i + 1,free - array[i][0])
        currentValue = currentValue - array[i][1]
    }
}

console.log(maxValue)
knapsack(items,0,30)
console.log("max",maxValue)