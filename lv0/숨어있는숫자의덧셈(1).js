function solution(my_string) {
    var answer = 0;
    for(let i=0; i<my_string.length; i++){
        if(Number(my_string[i])){
            answer+=parseInt(my_string[i]);
        }
    }
    return answer;
}