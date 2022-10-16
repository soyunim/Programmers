function solution(num, k) {
    var answer = -1;
    var n=num.toString().length;
    for(let i=n; i>0; i--){
        if(parseInt(num%10)==k){
            answer=i;
        }
        num=parseInt(num/10);
    }
    return answer;
}