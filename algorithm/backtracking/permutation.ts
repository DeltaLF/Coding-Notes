
const result = decFunction1(['A','B','C','D'])
console.log(result)

export function decFunction1(array:string[]):string[]{
    const result:string[] =  []
    permutation(array)
    return result
  
    function permutation(array:string[],prevStr:string=""):void{
        // recursive permutation
        const len = array.length
        if(len === 0){
           // console.log("------")
        }else if (len ===1){
            //console.log(prevStr+array[0])
            result.push(prevStr+array[0])
        }
    
        for(let ind in array){
            //console.log(array[ind])
            permutation([...array.slice(0,parseInt(ind)),...array.slice(parseInt(ind)+1,len)],prevStr + array[parseInt(ind)])
    
        }
    
    }
}



const result2 = decFunction2(['A','B','C','D'])
console.log(result2)

export function decFunction2(array:string[]):string[]{
    const result:string[] =  []
    perm(array)
    return result 

function perm(array:string[], start:number=0):void{
    let l = array.length 
    if(start >= l){
        result.push(array.join(""))
      //  console.log(array)
    }
    for(let i=start;i<array.length;i++){
        swap(array,start, i)
        perm(array,start + 1)
        swap(array,i, start)

    }

    function swap(array:string[],l:number,r:number):void{
        let temp =array[l]
        array[l] = array[r]
        array[r] = temp
    }
}
}


const result3 = decFunction3(['A','B','C'])
console.log(result3)


export function decFunction3(array:string[]):string[]{
   
    const result:string[] =  []
    backtrackPerm(array)
    return result 

function backtrackPerm(array:string[]):void{
    // backstrack permutation
    const l = array.length
    for(let i=0;i<l;i++){
        for(let j=0;j<l;j++){
            if(i==j){
                continue
            }
            for(let k=0;k<l;k++){
                if( j==k || i==k){
                    // stop whenver indexes are duplicated
                    continue
                }
                //console.log(`${array[i]} ${array[j]} ${array[k]}`)
                result.push(`${array[i]}${array[j]}${array[k]}`)
            }
        }
    }

}
}