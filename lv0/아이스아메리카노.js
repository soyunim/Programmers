function solution(money) {
    var answer = [];
    let cup=0;
    let change=0;
    cup=Math.floor(money/5500);
    change=money-5500*cup;
    answer=[cup,change];
    return answer;
}