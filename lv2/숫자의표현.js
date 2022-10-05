function solution(n) {
    var answer = 1;
    for(let i=1; i<=n; i++){
        temp=i;
        for(let j=i+1; j<=n; j++){
            temp+=j;
            if(temp==n){
                answer++;
            }
            else if(temp>n){
                break;
            }
        }
    }
    return answer;
}