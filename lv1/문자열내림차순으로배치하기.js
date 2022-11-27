function solution(s) {
    var answer = '';
    var temp2 = [];
    var temp = [];
    var result = s.split("");
    for(let i=0; i<result.length; i++){
        temp.push(result[i].charCodeAt());
    }
    temp.sort(function(a,b){return b-a;});
    for(let i=0; i<temp.length; i++){
        temp2.push(String.fromCharCode(temp[i]));
    }
    answer = temp2.join("");
    return answer;
}