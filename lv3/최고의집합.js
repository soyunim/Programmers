function solution(n, s) {
    var answer = [];
    
    for(i=0; i<n; i++){
        answer[i]=parseInt(s/n);
    }
    for(i=0; i<s%n; i++){
        answer[answer.length-1-i]++;
    }
    if(n>s){
        answer=[-1];
    }
    
    return answer;
}