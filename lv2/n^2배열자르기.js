function solution(n, left, right) {
    let answer = [];
    
    for(let i=left; i<=right; i++){
        if(Math.floor(i/n) > i%n){
            answer.push(Math.floor(i/n)+1);
        }
        else{
            answer.push(i%n+1);
        }
    }
    
    return answer;
}