function solution(x) {
    var answer = true;
    var num = 0;
    var n=x;
    while(n>=1){
        num+=parseInt(n%10);
        n/=10;
    }
    if(x%num==0){
        answer=true;
    }
    else{
        answer=false;
    }
    return answer;
}