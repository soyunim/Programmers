function solution(n) {
    var answer = 1;
    var idx = 1;
    var result = 0;
    while(1){
        answer*=idx;
        if(answer>n){
            result=idx-1;
            break;
        }
        idx++;
    }
    return result;
}