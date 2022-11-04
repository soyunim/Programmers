function solution(queue1, queue2) {
    const totalarray = [...queue1, ...queue2];
    const total = totalarray.reduce((a,b)=>a+b)/2;
    let sum = queue1.reduce((a,b)=>a+b);
    let startIdx = 0;
    let endIdx = queue1.length;
    
    for(let cnt=0; cnt<queue1.length*3; cnt++){
        if(sum<total){
            sum+=totalarray[endIdx];
            endIdx++;
        }
        else if(sum>total){
            sum-=totalarray[startIdx];
            startIdx++;
        }
        else if(sum==total){
            return cnt;
        }
    }
    
    return -1;
}