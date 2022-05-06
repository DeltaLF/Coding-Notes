// shortest path wihth recursive approach
export{}

class Src{
    constructor(public node:Node, public dist:number){}
}

class Node {
    srcs:Src[] = []
    constructor(public val:string){}

    addSrc(src:Src):void{
        this.srcs.push(src)
    }
 }


const A = new Node("A")
const B = new Node("B")
const C = new Node("C")
const D = new Node("D")
const E = new Node("E")
const F = new Node("F")

B.addSrc(new Src(A,6))
C.addSrc(new Src(A,5))
D.addSrc(new Src(B,1))
D.addSrc(new Src(C,2))
E.addSrc(new Src(C,4))
F.addSrc(new Src(D,1))
F.addSrc(new Src(E,7))


function shortestPathRec(nodeStart:Node,nodeEnd:Node):number{
    if(nodeStart === nodeEnd){return 0}
    const array =[]
    for(let src of nodeEnd.srcs){
        array.push(shortestPathRec(nodeStart,src.node) + src.dist )
    }
    let min = Infinity
    array.map((dist)=>{
        if(dist < min){
            min = dist
        }
    })
    return min
}
const minDest = shortestPathRec(C, F)
console.log(minDest)


function generateMap(size:number):number[][]{
    // A:0 B:1 C:2 D:3 E:4 F:5 
    const g = new Array(size).fill([]).map(()=>new Array(size).fill(Infinity))
    for(let i=0;i<size;i++){
        g[i][i] = 0
    }
    console.log(generateMap)
    g[0][1] = 6
    g[0][2] = 5
    g[1][3] = 1
    g[2][3] = 2
    g[2][4] = 4
    g[3][5] = 1
    g[4][5] = 7
    console.log(g)
    return g
}

const graph = generateMap(6)
console.log(shortestPathDP(graph,5))
function shortestPathDP(graph:number[][],target:number):number{
    // dist 0 to others
    // dist[1] = distance 0 to 1
    // dist[n] = distance from 0 to n
    const dist:number[] = new Array(graph.length) 
    dist[0] = 0
    for(let i=1; i<dist.length;i++){
        dist[i] = Infinity
        for(let j=0; j<i;j++){
            if(graph[j][i] === Infinity){continue}
            if(dist[i] > graph[j][i] + dist[j]){ // switch if 0 to i is farer then 0 to j + j to i
                dist[i] = graph[j][i] + dist[j]
            } 
        }
    }
    return dist[target]
}