function solution(price, money, count) {
    var answer = -1;
    var sum = 0;
    
    for(let i=1; i<=count; i++){
        sum+=price*i;
    }
    if(sum-money>0){
        answer=sum-money;
    }
    else{
        return 0;
    }

    return answer;
}