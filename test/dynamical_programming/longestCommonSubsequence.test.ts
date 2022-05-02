import {lcsRecursion} from "../../algorithm/dynamical_programming/longestCommonSubsequence"


describe("LCS recursion function",()=>{

    test("one empty string",()=>{
        const s1 = ""
        const s2 = "ABC"
        expect(lcsRecursion(s1,s2)).toBe(0);
    })

    test("tow empty strings",()=>{
        const s1 = ""
        const s2 = ""
        expect(lcsRecursion(s1,s2)).toBe(0);
    })

    test("s2 is substring of s1",()=>{
        const s1 = "ABCDEFG"
        const s2 = "ABC"
        expect(lcsRecursion(s1,s2)).toBe(3);
    })

    test("2 identical strings",()=>{
        const s1 = "ABCDEFG"
        const s2 = "ABCDEFG"
        expect(lcsRecursion(s1,s2)).toBe(7);
    })

    test("random",()=>{
        const s1 = "ANFKSAKASG"
        const s2 = "AKSAKKKKKKKKK"
        expect(lcsRecursion(s1,s2)).toBe(5);
    })



})

