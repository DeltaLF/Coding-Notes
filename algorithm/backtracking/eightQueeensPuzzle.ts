
function generateArray(n:number):number[][]{
    return new Array(n).fill([]).map(()=>{return new Array(n).fill(0)})
}

function queens(array:number[][],col:number):void{
    // 1 for queen 0 for empty
    if(col === array[0].length){
        // all cols are placed queen
        console.log("----------------------")
        console.log(array.slice())
        return
    }
    for(let row = 0;row < array.length ; row ++){
        // place the queen
        array[row][col] = 1
        if(validPos(array,row, col)){
            queens(array,col + 1)
        }
        // clear the queen
        array[row][col] = 0

    }
    function validPos(array:number[][],row:number, col:number):boolean{
        // only check up-left, left, left-down
        col-=1
        let up = row -1
        let down = row+1
//console.log("validPos",array,"row:",row,"col:",col,up,down)
        while(col>=0){
            if(array[row][col] === 1){
             //   console.log('invalid left')
                return false
            }
            if(up >=0 && array[up][col] === 1){
               // console.log('invalid left-up')
                return false
            }
            if(down<array.length && array[down][col] === 1){
               // console.log('invalid left-down')
                return false
            }
            up -=1
            col -=1
            down +=1
        }
       // console.log('valid true')
        return true
    }

}

const puzzleArray = generateArray(4)
queens(puzzleArray,0)
