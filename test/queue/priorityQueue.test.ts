import { PriorityQueue } from "../../algorithm/queue/priorityQueue";

describe("priority queue",()=>{
    const pq = new PriorityQueue()
    test("enqueue",()=>{
        pq.enqueue(2)
        expect(pq.stack[0]).toBe(2);
        pq.enqueue(5)
        expect(pq.stack[0]).toBe(5);
        pq.enqueue(6)
        expect(pq.stack[0]).toBe(6);
        pq.enqueue(9)
        expect(pq.stack[0]).toBe(9);
        pq.enqueue(7)
        expect(pq.stack[0]).toBe(9);
        pq.enqueue(10)
        expect(pq.stack[0]).toBe(10);
        console.log(pq.stack)
    })

    test("dequeue",()=>{
        
        expect(pq.dequeue()).toBe(10);
        expect(pq.dequeue()).toBe(9);
        expect(pq.dequeue()).toBe(7);
        expect(pq.dequeue()).toBe(6);
        expect(pq.dequeue()).toBe(5);
        expect(pq.dequeue()).toBe(2);
        expect(()=>{
            pq.dequeue()
        }).toThrow()
    
        console.log(pq.stack)
    })

})