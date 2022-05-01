export {}

interface HasVal{
    val:number
}

 class MinHeap<T extends HasVal >{
    public array:T[] = [] 
    constructor(){}
    enqueue(obj:T):void{ // dequeue non-null assertion
        this.array.push(obj)
            // keep min heap
            let ind = this.array.length - 1
            let parentInd = Math.floor((ind - 1)/2 )
            let temp
            while(ind > 0){
                console.log(this.array, ind, parentInd)
                if(this.array[ind].val < this.array[parentInd].val){
                    // swap obj based on comparing between val
                    temp = this.array[ind]
                    this.array[ind] = this.array[parentInd]
                    this.array[parentInd] = temp
                    ind = parentInd
                    parentInd = Math.floor((ind - 1)/2 )
                }else{
                    return
                }
            }
        

    }
    dequeue():T|undefined{
        if(this.array.length === 0){
            return undefined
        }else if(this.array.length === 1){
            return this.array.pop()
        }
        else{
         const min = this.array[0]
         const notNull = this.array.pop()
         if(!notNull){
             throw new Error("there should not be null in queue")
         }
         this.array[0] = notNull 
         this.minHeapify(0)
         console.log(`dequeue value:${min}`)
        return min
        }
     
    }
     minHeapify(ind:number):void{
        // move the smaller value to left
        let left = 2*ind + 1
        let right = 2*ind + 2
        let target = -1
        let temp
      
        while(left < this.array.length){
            //console.log(this.array, ind)
            if(this.array[left].val < this.array[ind].val ){
                // swap smallest value from left to ind
                target = left
            }
            if(right < this.array.length && this.array[right].val < this.array[ind].val && this.array[right].val < this.array[left].val){
                target = right
            }
            if(target <= ind){break} // no needs to swap
            temp = this.array[target]
            this.array[target] = this.array[ind]
            this.array[ind] = temp
            ind = target
            left = 2*ind + 1
            right = 2*ind + 2
        }
    }
}



class Node {
    edges:Edge[] = []
    visited = false
    val = Infinity // distanceFromStartNode
    previous:Node | null = null
    
    constructor(public name:string){}

    addEdges(edge:Edge):void{
        this.edges.push(edge)
    }
    
}

class Edge{
    constructor(public node:Node, public weight:number){}
}

const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");

A.addEdges(new Edge(B, 2));
A.addEdges(new Edge(C, 2));
B.addEdges(new Edge(A, 2));
B.addEdges(new Edge(D, 1));
B.addEdges(new Edge(E, 4));
C.addEdges(new Edge(A, 2));
C.addEdges(new Edge(D, 1));
C.addEdges(new Edge(F, 2));
D.addEdges(new Edge(B, 1));
D.addEdges(new Edge(C, 1));
D.addEdges(new Edge(E, 2));
D.addEdges(new Edge(F, 3));
E.addEdges(new Edge(B, 4));
E.addEdges(new Edge(D, 2));
E.addEdges(new Edge(F, 1));
F.addEdges(new Edge(C, 2));
F.addEdges(new Edge(D, 3));
F.addEdges(new Edge(E, 1));


function dijkstraAlgorithm(startNode:Node):void{
    // update distacneFromStartNode to shortest path
    const nodeStack:Node[] = []
    const minHeap = new MinHeap()
    nodeStack.push(startNode)
    let node
    while(nodeStack.length > 0){
        node = nodeStack.pop()!
        node.visited = true
        node.edges.forEach((edge)=>{
            minHeap.enqueue(edge.node)
        })        
        const min = minHeap.dequeue()

    }
    


}