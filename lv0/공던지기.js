function solution(numbers, k) {
    var answer = 1;
    for(let i=0; i<k-1; i++){
        answer+=2;
        if(answer>numbers[numbers.length-1]){
            answer-=numbers[numbers.length-1];
        }
    }
    return answer;
}