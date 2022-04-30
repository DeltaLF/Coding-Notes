// [smallest value, .... ] smallest value at index 0
function minHeapify<T>(ind:number, array:T[]):void{
    // move the smaller value to left
    let left = 2*ind + 1
    let right = 2*ind + 2
    let target = -1
    let temp
    while(ind < array.length){
        if(array[left] < array[ind] ){
            // swap smallest value from left to ind
            target = left
        }
        if(right < array.length && array[right] < array[ind] && array[right] < array[left]){
            target = right
        }
        if(target <= ind){break} // no needs to swap
        temp = array[target]
        array[target] = array[ind]
        array[ind] = temp
        ind = target
        left = 2*ind + 1
        right = 2*ind + 2
    }
}

class Minheap<T>{
    public values:T[] = [] 
    constructor(){}
    enqueue(value:NonNullable<T>):void{ // dequeue non-null assertion
        this.values.push(value)
            // keep min heap
            let ind = this.values.length - 1
            let parentInd = Math.floor((ind - 1)/2 )
            let temp
            while(ind >= 0){
                if(this.values[ind] < this.values[parentInd]){
                    temp = this.values[ind]
                    this.values[ind] = this.values[parentInd]
                    this.values[parentInd] = temp
                    ind = parentInd
                    parentInd = Math.floor((ind - 1)/2 )
                }else{
                    return
                }
            }
        

    }
    dequeue():T|undefined{
        if(this.values.length === 0){
            return undefined
        }else if(this.values.length === 1){
            return this.values.pop()
        }
        else{
         const min = this.values[0]
         this.values[0] = this.values.pop()! // non-null assertion
         minHeapify(0,this.values)
         console.log(`dequeue value:${min}`)
        return min
        }
     
    }
}


const mh = new Minheap()
mh.enqueue(10)
console.log(mh)
mh.enqueue(7)
console.log(mh)
mh.enqueue(10)
console.log(mh)
mh.enqueue(5)
console.log(mh)
mh.enqueue(3)
console.log(mh)
mh.enqueue(11)
console.log(mh)
mh.enqueue(1)
console.log("enqueue 1",mh)
mh.dequeue()
console.log(mh)
mh.enqueue(5)
console.log(mh)
mh.dequeue()
console.log(mh)
mh.enqueue(-5)
console.log("enqueue -5",mh)
mh.dequeue()
console.log(mh)
mh.dequeue()
console.log(mh)