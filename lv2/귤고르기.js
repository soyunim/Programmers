function solution(k, tangerine) {
    var answer = 0;
    var sorted = [];
    
    var kind = new Map();
    tangerine.forEach(tgr => {
        kind.set(tgr, kind.has(tgr) ? kind.get(tgr)+1 : 1);
    });
    
    sorted = [...kind].sort((a,b) => b[1]-a[1]);
    
    for(let i=0; i<sorted.length; i++){
        if(k>0){
            k-=sorted[i][1];
            answer++;
        }
    }
    
    return answer;
}