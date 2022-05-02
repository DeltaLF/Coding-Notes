
function lcsRecursion(str1:string, str2:string):number{
    if(str1.length === 0 || str2.length === 0 ){return 0}
    const str1M = str1.slice(0,str1.length -1 )
    const str2M = str2.slice(0,str2.length -1 )
    if(str1[str1.length -1] === str2[str2.length -1]){
        return lcsRecursion(str1M, str2M) + 1
    }
    return Math.max(lcsRecursion(str1,str2M),lcsRecursion(str1M,str2)) 

}

const str1 = "ABCBBBBBBAS"
const str2 = "A"
console.log(lcsRecursion(str1, str2))