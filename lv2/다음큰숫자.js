function solution(n) {
    function cntOne(m){
        let cnt=0;
        let t=0;
        t=m.toString(2);
        for(let i=0; i<t.length; i++){
            if(t[i]==1){
                cnt++;
            }
        }
        return cnt;
    }
    
    let num=n;
    while(true){
        num++;
        if(cntOne(n)==cntOne(num)){
            return num;
        }
    }
}