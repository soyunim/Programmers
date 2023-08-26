function solution(priorities, location) {
    const temp = [...priorities];
    const data = priorities.map((p, i)=>({p, i}));
    let cnt = 0;
    
    while(data.length>=0){
        const max = Math.max(...temp);
        const {p, i} = data.shift();
        
        if(p >= max){
            cnt++;
            temp[i]=1;
            if(i == location){
                break;
            }
        }
        else{
            data.push({p,i});
        }
    }
                                         

    return cnt;
}