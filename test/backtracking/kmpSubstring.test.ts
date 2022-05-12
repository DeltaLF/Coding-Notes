import {findPfx,kmp} from "../../algorithm/backtracking/kmpSubstring"




describe("kmp substring",()=>{
    test("kmp one",()=>{
        const subString = "a"
        const string = "abcxabcaabaabaaacdabcdabcy"
        const preFixArray = findPfx(subString)
        const result:number = kmp(string, subString )
        expect(preFixArray).toEqual([0]) 
        expect(result >= 0 ).toBe(true)
    })


    test("kmp true",()=>{
        const subString = "aabaabaaa"
        const string = "abcxabcaabaabaaacdabcdabcy"
        const preFixArray = findPfx(subString)
        const result:number = kmp(string, subString )
        expect(preFixArray).toEqual([0,1,0,1,2,3,4,5,2]) 
        expect(result >= 0 ).toBe(true)
    })

    test("kmp false",()=>{
        const subString = "abcxk"
        const string = "abcxabcaabaabaaacdabcdabcy"
        const preFixArray = findPfx(subString)
        const result:number = kmp(string, subString )
        expect(preFixArray).toEqual([0,0,0,0,0]) 
        expect(result >= 0 ).toBe(false)
    })


})


