function solution(want, number, discount) {
    const temp = [];
    let right = 1;
    let sum = 0;
    let cnt = 0;
    
    want.forEach(e => {
       if(discount.includes(e)===false){
           right = 0;
           return 0;
       }
    });
    if(right == 0){
        return right;
    }
    
    number.forEach(e => {
        sum+=e;
    });
    
    for(let i=0; i<want.length; i++){
        for(let j=0; j<number[i]; j++){
            temp.push(want[i]);
        }
    }
    
    for(let i=0; i<=discount.length-sum; i++){
        if(discount.slice(i,sum+i).sort().toString() == temp.sort().toString())
            cnt++;
    }
    
    return cnt;
}