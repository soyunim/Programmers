function solution(hp) {
    var answer = 0;
    var cnt = 0;
    
    cnt+=parseInt(hp/5);
    hp=parseInt(hp%5);
    cnt+=parseInt(hp/3);
    hp=parseInt(hp%3);
    cnt+=parseInt(hp/1);
    hp=parseInt(hp%1);
    answer = cnt;
    return answer;
}