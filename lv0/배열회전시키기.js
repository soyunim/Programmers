function solution(numbers, direction) {
    var answer = [];
    var temp=0;
    if(direction=='right'){
        temp=numbers.pop();
        numbers.unshift(temp);
        
    }
    else if(direction=='left'){
        temp=numbers.shift();
        numbers.push(temp);
    }
    answer=numbers;
    return answer;
}