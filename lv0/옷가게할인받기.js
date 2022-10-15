function solution(price) {
    var answer = 0;
    answer=price;
    if(price>=500000){
        answer=Math.floor(price*0.8);
    }
    if(price>=300000 && price<500000){
        answer=Math.floor(price*0.9);
    }
    if(price>=100000 && price<300000){
        answer=Math.floor(price*0.95);
    }
    return answer;
}