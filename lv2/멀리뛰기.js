function solution(n) {
    var answer = 0;
    var a=[];
    a[1]=1;
    a[2]=2;
    
    for(let i=3; i<=n; i++){
        a[i]=(a[i-1]+a[i-2])%1234567;
    }
    
    answer=a[n];
    return answer;
}