function solution(n) {
    var answer = 0;
    console.log(parseInt(Math.sqrt(n)));
    if(parseInt(Math.sqrt(n))*parseInt(Math.sqrt(n))==n){
        answer=1;
    }
    else{
        answer=2;
    }
    return answer;
}