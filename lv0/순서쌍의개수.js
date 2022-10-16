function solution(n) {
    var answer = [];
    var result = 0;
    for(let i=1; i<=n; i++){
        if(n%i==0){
            answer.push(i);
        }
    }
    if(answer.length%2==0){
        result = answer.length;
    }
    else{
        result = answer.length;
    }
    return result;
}