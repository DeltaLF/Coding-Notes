import {decFunction1,decFunction2,decFunction3} from "../../algorithm/backtracking/permutation"



function permutationTest(perFunc:(array:string[])=>string[]){

    function isDuplicated(array:string[]):boolean{
        const obj:any = {}
        for( let comb of array){
            if (typeof comb === 'string'){
                obj[comb] = 0
            }
        }
        return Object.keys(obj).length !== array.length
    }


    test("one letter",()=>{
        const array = ["A"]
        expect(perFunc(array)).toEqual(["A"]);
    })

    test("two letters",()=>{
        const array = ["A","B"]
        const result  = perFunc(array)
        expect(result.length).toBe(2);
        expect(isDuplicated(result)).toBe(false)
    })

    
    test("three letters",()=>{
        const array = ["A","B","C"]
        const result  = perFunc(array)
        expect(result.length).toBe(1*2*3);
        expect(isDuplicated(result)).toBe(false)
    })

    test("four letters",()=>{
        const array = ["A","B","C","D"]
        const result  = perFunc(array)
        expect(result.length).toBe(1*2*3*4);
        expect(isDuplicated(result)).toBe(false)
    })

    test("five letters",()=>{
        const array = ["A","B","C","D","E"]
        const result  = perFunc(array)
        expect(result.length).toBe(1*2*3*4*5);
        expect(isDuplicated(result)).toBe(false)
    })

}

describe("permutation 1,2",()=>{
    permutationTest(decFunction1)
    permutationTest(decFunction2)

})

describe("permutation backstracking",()=>{
    const result = decFunction3(["A","B","C"])
    expect(result.length).toBe(1*2*3)

})



