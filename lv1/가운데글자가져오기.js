function solution(s) {
    var answer = '';
    var mid = (s.length-1)/2;
    
    if(s.length%2!=0){
        answer=s[mid];
    }
    else{
        answer+=(s[Math.floor(mid)]);
        answer+=(s[Math.round(mid)]);
    }
    return answer;
}