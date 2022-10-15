function solution(n, k) {
    var answer = 0;
    let cnt=0;
    cnt=Math.floor(n/10);
    if(n>=10){  
        answer=n*12000+k*2000-cnt*2000;
    }
    else{
        answer=n*12000+k*2000;
    }
    return answer;
}