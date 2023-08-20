function solution(progresses, speeds) {
    const answer = [];
    const days = [];
    let max;
    let cnt;
    
    for(let i=0; i<progresses.length; i++){
        days.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    days.push(1000);
    
    max = days[0];
    cnt = 0;
    for(let i=0; i<days.length; i++){
        if(max<days[i]){
            answer.push(cnt);
            max = days[i];
            cnt = 1;
        }
        else{
            cnt++;
        }
    }
    
    return answer;
}