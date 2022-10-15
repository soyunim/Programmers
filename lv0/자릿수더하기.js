function solution(n) {
    var answer = 0;
    
    while((n/10)!=0){
        answer+=Math.floor(n%10);
        n=Math.floor(n/10);
    }
    
    return answer;
}