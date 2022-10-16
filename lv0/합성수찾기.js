function solution(n) {
    var answer = 0;
    function Ncnt(num){
        let cnt=0;
        for(let i=1; i<=num; i++){
            for(let j=1; j<=num; j++){
                if(i*j==num){
                    cnt++;
                }
            }
        }
        if(cnt>=3){
            return true;
        }
        else{
            return false;
        }
    }
    
    for(let i=1; i<=n; i++){
        if(Ncnt(i)==true){
            answer++;
        }
    }
    return answer;
}