/*
findPfxArray:
substring: (comparing prefix)
a b c d a b c k
0 0 0 0 1 2 3 0
i 
  j
how to fill up?
3 conditions
1. subString[i] === subString[j] ==> match pfx[j] = i + 1;  i,j ++
2. subString[i] !== subString[j] && i=0 => pfx[j] =0; j++
3. subString[i] !== subString[j] && i!=0 => check pfx[i-1]; i = pfx[i-1]  continue
if pfx[i-1] !== 0 => no needs to compare from 0
because:
array[i-1] = array[pfx[i-1]]
array[i-2] = array[pfx[i-1] - 1]
...
*/


const result = kmp("abcxabcaabaabaaacdabcdabcy", "aabaabaaa")
console.log(result)


const resultI = kmp("abcabc", "abc")
console.log(resultI)


export function findPfx(subString:string):number[]{
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


export function kmp(str:string, subString:string):number{

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