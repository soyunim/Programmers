function solution(x, n) {
    var answer = [];
    var num=x;
    for(let i=1; i<=n; i++){
        answer.push(num);
        num+=x;
    }
    return answer;
}