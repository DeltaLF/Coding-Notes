function fibSeq(num:number):number{
    if(num===0){
        return 0
    }else if(num===1){
        return 1
    }else{
        return fibSeq(num-1) + fibSeq(num-2)
    }
}

console.log(fibSeq(1))
console.log(fibSeq(2))
console.log(fibSeq(15))

console.log(fibseqDP(1))
console.log(fibseqDP(2))
console.log(fibseqDP(15))

function fibseqDP(num:number):number{
    // dynamical programming
    const fArray = new Array(num+2).fill(0)
    fArray[0] = 0
    fArray[1] =1
    for(let i=2;i<=num;i++){
        fArray[i] = fArray[i-1] + fArray[i-2]
    }

return fArray[num]
    }
  
