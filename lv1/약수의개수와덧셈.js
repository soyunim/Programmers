function solution(left, right) {
    var result = 0;
    
    for(let i=left; i<=right; i++){
        var cnt = 0;
        for(let j=1; j<=right; j++){
            if(i%j==0){
                cnt = cnt+1;
            }
            else{
                cnt = cnt;
            }
        }
        if(cnt%2==0){
            result = result+i;
        }
        else{
            result = result-i;
        }
    }
    return result;
}