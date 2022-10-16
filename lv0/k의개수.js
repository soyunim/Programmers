function solution(i, j, k) {
    var answer = [];
    var cnt = 0;
    for(let idx=i; idx<=j; idx++){
        answer.push(idx);
    }
    answer=answer.join('');
    for(let idx=0; idx<answer.length; idx++){
        if(answer[idx]==k){
            cnt++;
        }
    }
    return cnt;
}