function solution(n) {
    var answer = [];
    while(n>=1){
        answer.push(parseInt(n%10));
        n/=10;
    }
    return answer;
}