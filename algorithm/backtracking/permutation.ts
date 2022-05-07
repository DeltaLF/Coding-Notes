
permutation(['A','B','C','D'])

function permutation(array:string[],prevStr:string=""):void{
    // recursive permutation
    const len = array.length
    if(len === 0){
        console.log("------")
    }else if (len ===1){
        console.log(prevStr+array[0])
    }

    for(let ind in array){
        //console.log(array[ind])
        permutation([...array.slice(0,parseInt(ind)),...array.slice(parseInt(ind)+1,len)],prevStr + array[parseInt(ind)])

    }

}

backtrackPerm(['A','B','C'])
function backtrackPerm(array:string[]):void{
    // backstrack permutation
    const l = array.length
    for(let i=0;i<l;i++){
        for(let j=0;j<l;j++){
            for(let k=0;k<l;k++){
                if(i == j || j==k || i==k){
                    // stop whenver indexes are duplicated
                    continue
                }
                console.log(`${array[i]} ${array[j]} ${array[k]}`)
            }
        }
    }

}