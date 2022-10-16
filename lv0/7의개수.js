function solution(array) {
    var answer = 0;
    var re = 0;
    re=array.join('');
    for(let i=0; i<re.length; i++){
        if(re[i]==7){
            answer++;
        }
    }
    return answer;
}