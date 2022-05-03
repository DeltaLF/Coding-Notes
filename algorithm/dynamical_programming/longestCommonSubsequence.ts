
export function lcsRecursion (str1:string, str2:string):number{
    if(str1.length === 0 || str2.length === 0 ){return 0}
    const str1M = str1.slice(0,str1.length -1 )
    const str2M = str2.slice(0,str2.length -1 )
    if(str1[str1.length -1] === str2[str2.length -1]){
        return lcsRecursion(str1M, str2M) + 1
    }
    return Math.max(lcsRecursion(str1,str2M),lcsRecursion(str1M,str2)) 

}

const str1 = "ABCBDABC"
const str2 = "ABDCABAC"
console.log(lcsRecursion(str1, str2))


console.log(lcs(str1, str2)) // 8, 7

export function lcs(str1:string, str2:string):number{
    // dynamical programing
    const lcsArray = new Array(str2.length +1 ).fill(0).map(()=>{return new Array(str1.length +1).fill(0)})        
    const directionArray =  new Array(str2.length +1 ).fill(0).map(()=>{return new Array(str1.length +1).fill(0)})
    lcsHelper()
    const substring = findSubString()
    console.log(substring)
    function lcsHelper():void{
        //   left:0 up:1 left-up:2
        //    ''  s t r 1 ....
        //  '' 0  0 ..
        //   s 0
        //   t 0
        //   r 0
        //   2 0
        for(let v = 1 ; v <= str2.length ; v ++){    // vertical
            for(let h = 1; h <= str1.length ; h++){  // horzental
                if(str1[h - 1] === str2[v -1]){
                    lcsArray[v][h] = lcsArray[v-1][h-1] + 1 
                    directionArray[v][h] = 2
                }else{
                    if(lcsArray[v-1][h] > lcsArray[v][h-1]){
                        // came from up
                        lcsArray[v][h] = lcsArray[v-1][h] 
                        directionArray[v][h] = 1

                    }else{
                        lcsArray[v][h] =  lcsArray[v][h-1]
                        directionArray[v][h] = 0 // default value
                    }
                }
            }
        }
        //console.log(lcsArray)
    }
console.log(directionArray)
    function findSubString():string{
        let substring = ''
        let h = str1.length
        let v = str2.length 
        let i = lcsArray[str2.length][str1.length]
        while(i > 0){
            console.log(`i:${i} => h:${h} v:${v}  ${directionArray[v][h]}`)
            switch(directionArray[v][h]){
                case 2:
                    substring = str1[h -1] + substring 
                    v--
                    h--
                    i--
                    break;
                case 1:
                    v--
                    break
                case 0:
                    h--
                    break
            }
        }

        return substring
    }

    return lcsArray[str2.length][str1.length]
}

