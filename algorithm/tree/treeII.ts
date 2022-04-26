
export {}
class Node{
    edges : Edge[] = [];
    visited: boolean = false
    constructor(public val:string){}
    addNeighbor(edge:Edge):void{
        this.edges.push(edge)
    }
}

class Edge{
    constructor(public node1:Node,public node2:Node ,public weight:number){  }
}

const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");
const allNodes = [A, B, C, D, E, F];

const e1 = new Edge(A, B, 10);
A.addNeighbor(e1);
B.addNeighbor(e1);
const e2 = new Edge(A, C, 8);
A.addNeighbor(e2);
C.addNeighbor(e2);
const e3 = new Edge(B, D, 6);
B.addNeighbor(e3);
D.addNeighbor(e3);
const e4 = new Edge(C, D, 5);
C.addNeighbor(e4);
D.addNeighbor(e4);
const e5 = new Edge(B, E, 7);
B.addNeighbor(e5);
E.addNeighbor(e5);
const e6 = new Edge(D, E, 4);
D.addNeighbor(e6);
E.addNeighbor(e6);
const e7 = new Edge(D, F, 3);
D.addNeighbor(e7);
F.addNeighbor(e7);
const e8 = new Edge(E, F, 1);
E.addNeighbor(e8);
F.addNeighbor(e8);
const e9 = new Edge(C, F, 8);
C.addNeighbor(e9);
F.addNeighbor(e9);



function minimalSpanningTree(node:Node, tree:Node[]):Edge[]{
    const mstEdges:Edge[] = []
    let candidateEdges:Edge[] = []
    while(mstEdges.length < tree.length -1 ){
        node.visited = true
        node.edges.forEach((edge)=>{return candidateEdges.push(edge) })
        let min = Infinity
        let edge = candidateEdges[0] // edge shouldn't be null
        candidateEdges = candidateEdges.filter((candidateEdge)=>{
            if(!candidateEdge.node1.visited || !candidateEdge.node2.visited){
                if(candidateEdge.weight < min){
                    edge = candidateEdge
                    min = edge.weight
                }
                // only keep edges that won't cause a circle
                return candidateEdge
            }
        })
        console.log('candidates:',candidateEdges, 'choosen:',edge)
        mstEdges.push(edge)
        node = edge.node1.visited ? edge.node2 : edge.node1
    }
    return mstEdges
}

const mstEdges = minimalSpanningTree(C,allNodes)
console.log(mstEdges)