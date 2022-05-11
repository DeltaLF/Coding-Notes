


const result = kmp("abcxabcaabaabaaacdabcdabcy", "aabaabaaa")
console.log(result)


const resultI = kmp("abcabc", "abc")
console.log(resultI)

function kmp(str:string, subString:string):number{
    function findPfx(subString:string):number[]{
        const pfxArray:number[] = new Array(subString.length).fill(0)
        let i=0 
        let j=1
        while(j<subString.length){
            if(subString[i] === subString[j]){
                pfxArray[j] = i + 1
                i++
                j++
            }else{
                if(i === 0){
                    pfxArray[j] = 0
                    j++
                    continue
                }
                i = pfxArray[i-1]
            }
        }
        return pfxArray
    }


const pfxArray = findPfx(subString)
console.log(subString)
console.log(pfxArray)
let ind = 0
for(let i=0;i<str.length;i++){
    console.log(`i:${i}, ind:${ind}`)
    if(str[i] === subString[ind]){
        ind++
        if(ind === subString.length){
            return i
        }
    }else{
        if(ind !==0){
            ind = pfxArray[ind -1 ]
        }
       
    }
}
return -1

   
 
}