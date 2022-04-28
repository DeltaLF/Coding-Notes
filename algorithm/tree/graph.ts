export {}
class Node<T>{
    neighbors:Node<T>[] = [];
    visited:boolean = false;
    constructor(public val:T){}
    addNeighbor(newNode:Node<T>):void{ 
        this.neighbors.push(newNode)       
    }
}

const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");
const G = new Node("G");
const H = new Node("H");
const I = new Node("I");
const J = new Node("J");
const K = new Node("K");
const L = new Node("L");
const M = new Node("M");

A.addNeighbor(E);
A.addNeighbor(F);
B.addNeighbor(D);
C.addNeighbor(D);
D.addNeighbor(B);
D.addNeighbor(C);
D.addNeighbor(E);
D.addNeighbor(I);
E.addNeighbor(A);
E.addNeighbor(D);
E.addNeighbor(F);
E.addNeighbor(I);
F.addNeighbor(A);
F.addNeighbor(E);
F.addNeighbor(I);
G.addNeighbor(H);
G.addNeighbor(I);
H.addNeighbor(G);
H.addNeighbor(I);
H.addNeighbor(L);
I.addNeighbor(D);
I.addNeighbor(E);
I.addNeighbor(F);
I.addNeighbor(G);
I.addNeighbor(H);
I.addNeighbor(J);
I.addNeighbor(K);
I.addNeighbor(M);
J.addNeighbor(I);
J.addNeighbor(M);
K.addNeighbor(I);
K.addNeighbor(L);
K.addNeighbor(M);
L.addNeighbor(H);
L.addNeighbor(K);
M.addNeighbor(I);
M.addNeighbor(J);
M.addNeighbor(K);

const resultList:Node<string>[] = []
function DFT(node:Node<string>):void{
    resultList.push(node)
    node.visited = true
    for(let neighbor of node.neighbors){
        if(!neighbor.visited){
            DFT(neighbor)
        }
    }
}
//DFT(A)
BFT(A)
console.log(resultList, resultList.length)

// it is better to use queue for performance consideration 
function BFT(node:Node<string>):void{
    const fakeQueue:Node<string>[] = []
    resultList.push(node)
    fakeQueue.push(node)
    node.visited = true
    let intermedia:undefined|Node<string>
    while(fakeQueue.length > 0){
        // use intermedia because node = fakeQueue.sfift() fail
        intermedia = fakeQueue.shift() // FIFO 
        if(intermedia){
            for(let neighbor of intermedia.neighbors){
                if(!neighbor.visited){
                    fakeQueue.push(neighbor)
                }
            }
            if(!intermedia.visited){
                resultList.push(intermedia)
                intermedia.visited = true
            }    
        }

    }

}



