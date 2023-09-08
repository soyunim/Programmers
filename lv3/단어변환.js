function solution(begin, target, words) {
    let answer = 1;
    
    const visited = [];
    const queue = [begin];
    let queueLen = 1;
    
    function checked(str1, str2){
        let cnt = 0;
        
        for(let i=0; i<str1.length; i++){
            if(str1[i] !== str2[i]) cnt++;
        }
        
        return cnt === 1 ? true : false;
    }
    
    if(!words.includes(target)) return 0;
    
    while(queue.length){
        const now = queue.shift();
        queueLen--;
        
        for(let i=0; i<words.length; i++){
            if(checked(now, words[i])){
                if(words[i] === target){
                    return answer;
                }
                
                if(!visited.includes(words[i])){
                    visited.push(now);
                    queue.push(words[i]);
                }
            }
        }
        
        if(queueLen === 0){
            answer++;
            queueLen = queue.length;
        }
        
    }
    
    return answer;
}