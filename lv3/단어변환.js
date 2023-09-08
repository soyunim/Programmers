function solution(begin, target, words) {
    const queue = [begin]; 
    const visted = new Array(words.length).fill(false);
	let answer = 1;
    let queueLeng = 1;
    
    function checkNext(w1, w2){
        let matches = 0;

        for(let i=0; i<w1.length; i++){
            if(w1[i] !== w2[i]) matches++;
            if(matches > 1) return false;
        }

        return true;
    }
    
    // 존재하지 않는 경우
    if(words.indexOf(target) === -1) return 0;
    
    // 존재하는 경우
    while(queue.length > 0){
        let now = queue.shift();
        queueLeng--;
        
        for(let i=0; i<words.length; i++){
            if(checkNext(words[i], now)){
                if(words[i] === target){
                    return answer;
                }
                
                if(!visted[i]){
                    visted[i] = true;
                    queue.push(words[i]);
                }
            }
        }
        
        // 아래로 파고 들어가는 게 아니라 옆으로(너비) 탐색을 하기 때문에 
        if(queueLeng === 0) {
            answer++;
            queueLeng = queue.length;
        }
    }


    return answer;
}

    