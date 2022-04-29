function initialArray(n:number):number[][]{
    return new Array(n).fill(Infinity).map(()=>new Array(n).fill(Infinity))
}
const dwGraph = initialArray(3)

// define graph
for(let i =0;i< dwGraph.length;i++){
    dwGraph[i][i] = 0

}
dwGraph[0][1] = 2
dwGraph[1][0] = 2
dwGraph[1][2] = 1
dwGraph[0][2] = 4
console.log(dwGraph)
floydWarshal(dwGraph)
console.log(dwGraph)

// dynamic programming
function floydWarshal(array:number[][]):void{
    
    const size = array[0].length
     for(let i =0; i < size;i ++){
         for(let j =0; j< size;j++){
             for(let k=0; k < size; k++){
                 if(array[i][j] > array[i][k] + array[k][j]){
                     // replace distance with shortcut
                     array[i][j] = array[i][k] + array[k][j]
                 }
             }
         }
     }
}