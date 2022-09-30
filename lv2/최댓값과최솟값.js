function solution(s) {
    var answer = '';
    var re = '';
    
    re=s.split(' ');
    for(let i=0; i<re.length; i++){
        re[i]=parseInt(re[i]);
        re.sort(function(a,b){return a-b;});
    }
    
    answer+=re[0]+' '+re[re.length-1];
    return answer;
}