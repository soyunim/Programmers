function solution(tickets) {
    let answer = [];
    let visited = new Array(tickets.length).fill(false);
    
    tickets.sort();
    
    function dfs(start, cnt, root){
        if(cnt === tickets.length && answer.length === 0){
            answer = root;
            return;
        }
        
        for(let i=0; i<tickets.length; i++){
            if(visited[i] === true) continue;
            if(tickets[i][0] === start){
                visited[i] = true;
                dfs(tickets[i][1], cnt+1, [...root, tickets[i][1]]);
                visited[i] = false;
            }
        }
    }
    
    dfs("ICN", 0, ["ICN"]);
    
    return answer;
}