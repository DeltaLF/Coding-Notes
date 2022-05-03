import {lcsRecursion,lcs} from "../../algorithm/dynamical_programming/longestCommonSubsequence"


function lcsTest(lcs_func:(str1:string,str2:string)=>number){
    test("one empty string",()=>{
        const s1 = ""
        const s2 = "ABC"
        expect(lcs_func(s1,s2)).toBe(0);
    })

    test("tow empty strings",()=>{
        const s1 = ""
        const s2 = ""
        expect(lcs_func(s1,s2)).toBe(0);
    })

    test("s2 is substring of s1",()=>{
        const s1 = "ABCDEFG"
        const s2 = "ABC"
        expect(lcs_func(s1,s2)).toBe(3);
    })

    test("2 identical strings",()=>{
        const s1 = "ABCDEFG"
        const s2 = "ABCDEFG"
        expect(lcs_func(s1,s2)).toBe(7);
    })

    test("random",()=>{
        const s1 = "ANFKSAKASG"
        const s2 = "AKSAKKKKKKKKK"
        expect(lcs_func(s1,s2)).toBe(5);
    })
}

describe("LCS recursion function",()=>{

lcsTest(lcsRecursion)

})

describe("LCS dynamical programming",()=>{

    lcsTest(lcs)
})

