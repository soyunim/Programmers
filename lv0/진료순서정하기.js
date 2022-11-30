function solution(emergency) {
    var answer = [];
    var copy = [...emergency];
    
    copy.sort(function(a,b){return b-a;});
    console.log("sort",copy);
    for(let i=0; i<emergency.length; i++){
        answer.push(copy.indexOf(emergency[i])+1);
    }
    
    return answer;
}