function solution(maps) {
    const answer = -1;
    const col = maps.length;
    const row = maps[0].length;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const queue = [];
    
    queue.push([0,0,1]);
    while(queue.length){
        const [x, y, cnt] = queue.shift();
        if(x===row-1 && y===col-1){
            return cnt;
        }
        
        for(let i=0; i<4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];
            if(nx>=0 && nx<row && ny>=0 && ny<col && maps[ny][nx]===1){
                queue.push([nx, ny, cnt+1]);
                maps[ny][nx] = 0;
            }
        }
    }
    
    return answer;
}