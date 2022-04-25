// PriorityQueue

function maxHeapify(ind:number,array:number[]):void{
    let left:number = ind * 2 + 1
    let right:number = ind * 2 + 2
    let temp:number
    let target = -1
    while(left < array.length){
    
        if(array[left] > array[ind]){
            target = left
        }
        if(right < array.length && array[right] > array[ind] && array[right] > array[left]){
            target = right
        }
        if(target <= ind){return}
        temp = array[target]
        array[target] = array[ind]
        array[ind] = temp
        ind = target
        left = ind * 2 + 1
        right = ind * 2 + 2

    }

}


export class PriorityQueue{
    stack: number [] = []
    constructor(){}
    enqueue(val:number):void{
        this.stack.push(val)
        if(this.stack.length === 0){
            return
        }else{
            let ind = this.stack.length - 1
            let parentInd:number
            let temp:number
            while(ind > 0){
                parentInd = Math.floor((ind-1)/2)
                if(this.stack[parentInd] < this.stack[ind]){
                    temp = this.stack[parentInd]
                    this.stack[parentInd] = this.stack[ind]
                    this.stack[ind] = temp
                    ind = parentInd
                }else{
                    return
                }
            }

        }

    }
    dequeue():number{
        if(this.stack.length === 0){
            throw new Error('Uable to dequeue, the queue is empty!')
        }
        let temp = this.stack[this.stack.length - 1 ]
        this.stack[this.stack.length - 1] = this.stack[0]
        this.stack[0] = temp
        const result = this.stack.pop()
        maxHeapify(0,this.stack)
        if(!result){
            throw new Error('Uable to dequeue, the queue is empty!')
        }else{
            return result
        }
       
    }

}

