function solution(clothes) {
    const wearing = {};
    let answer = 1;
    
    clothes.forEach(e=>{
        wearing[e[1]]=0;
    });
    
    
    for(let i=0; i<clothes.length; i++){
        if(wearing[clothes[i][1]]!=null){
            wearing[clothes[i][1]]++;
        }
    }
 
    for(let k in wearing){
        answer*=wearing[k]+1;
    }
    
    return answer-1;
}