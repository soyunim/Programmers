function solution(n, works) {
    var answer = 0;
    sum=0;
    //works: 오름차순으로 재배열
    //works[works.length-1]에 -1을 해줌. 
    //(n회 반복)
    
    for(i=0; i<works.length; i++){
        sum+=works[i];
    }
    if(sum-n<=0){
        return 0;
    }
    
    for(i=0; i<=n; i++){
        for(j=0; j<works.length-1; j++){
            if(works[j]>works[j+1]){
                temp=works[j];
                works[j]=works[j+1];
                works[j+1]=temp;
            }
        }
        if(i==n){
            break;
        }
        works[works.length-1]--;
    }
    
    for(i=0; i<works.length; i++){
        answer+=works[i]*works[i];
    }
    
    return answer;
}