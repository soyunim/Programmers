function solution(priorities, location) {
    const idx = [];
    let cnt = 0;
    
    for(let i=0; i<priorities.length; i++){
        idx.push(i);
    }
    
    while(priorities.length>=0){
        const max = Math.max(...priorities);
        const p = priorities.shift();
        const i = idx.shift();
        
        if(p >= max){
            cnt++;
            if(i == location){
                return cnt;
            }
        }
        else{
            priorities.push(p);
            idx.push(i);
        }
    }
                        
    return cnt;
}