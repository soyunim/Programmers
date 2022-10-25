function solution(n)
{
    var answer = 0;
    var result = [];
    result = n.toString().split('');
    for(let i=0; i<result.length; i++){
        answer+=parseInt(result[i]);
    }
    return answer;
}