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