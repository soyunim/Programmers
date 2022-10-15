function solution(my_string) {
    var answer = [];
    
    for(let i=0; i<my_string.length; i++){
        if(Number(my_string[i])){
            answer.push(parseInt(my_string[i]));
        }
        if(my_string[i]==0){
            answer.push(0);
        }
        
    }
    
    answer.sort();
    return answer;
}