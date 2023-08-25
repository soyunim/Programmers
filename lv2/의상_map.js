function solution(clothes) {
    const wearing = new Map();
    let answer = 1;
    
    clothes.forEach(e=>{
        wearing.set(e[1], 0);
    });
    
    for(let i=0; i<clothes.length; i++){
        if(wearing.has(clothes[i][1])){
            wearing.set(clothes[i][1], wearing.get(clothes[i][1])+1);
        }
    }
    
    for(let [key, value] of wearing){
        answer*=value+1;
    }
    
    return answer-1;
}