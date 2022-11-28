function solution(n) {
    var answer = 0;
    var number = String(n);
    var num = [];
    
    num = number.split("");
    for(let i=0; i<num.length; i++){
        num[i]=parseInt(num[i]);
    }
    num.sort(function(a,b){ return b-a; });
    answer = parseInt(num.join(""));
    return answer;
}