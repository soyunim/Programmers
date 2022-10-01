function solution(s) {
    var answer = '';
    var re = '';
    re=s.toLowerCase();
    re=re.split(' ');
    
    for(let i=0; i<re.length; i++){
        answer+=re[i].charAt(0).toUpperCase()+re[i].slice(1)+' ';
    }
    
    answer=answer.slice(0,answer.length-1);
    
    return answer;
}