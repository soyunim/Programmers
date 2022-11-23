function solution(numbers) {
    var answer = -1;
    var sum = 45;
    for(let i=0; i<numbers.length; i++){
        sum-=numbers[i];
    }
    return sum;
}