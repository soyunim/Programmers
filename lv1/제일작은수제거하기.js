function solution(arr) {
    var answer = [];
    var minimum = Math.min(...arr);
    
    if(arr.length<=1){
        answer.push(-1);
        return answer;
    }
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]!=minimum){
            answer.push(arr[i]);
        }
    }
    
    return answer;
}