function solution(numbers) {
    var answer = 0;
    var max=-100000000;
    for(let i=0; i<numbers.length-1; i++){
        for(let j=i+1; j<numbers.length; j++){
            if(numbers[i]*numbers[j]>max){
                max=numbers[i]*numbers[j];
            }
        }
    }
    answer=max;
    return answer;
}