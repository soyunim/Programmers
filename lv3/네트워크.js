function solution(n, computers) {
    var answer = 0;
    var check = [];
    check.length=200;
    check.fill(0);
    
    function dfs(idx){
        check[idx]=1;
        for(let j=0; j<n; j++){
            if(check[j]==0 && computers[idx][j]==1){
                dfs(j);
            }
        }
    }     
    
    for(let i=0; i<n; i++){
        if(check[i]==0){
            dfs(i);
            answer++;
        }
    }   
    
    return answer;
}
