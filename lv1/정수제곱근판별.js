function solution(n) {
    var answer = 0;
    answer=Math.sqrt(n);
    if(answer%1!=0){
        return -1;
    }
    
    answer=Math.pow(answer+1,2);
    return answer;
}