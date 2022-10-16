function solution(s) {
    var answer = '';
    s=s.split('').sort();
    for(let i=0; i<s.length; i++){
        if(s[i]!=s[i-1] && s[i]!=s[i+1]){
            answer+=s[i];
        }
    }
    return answer;
}