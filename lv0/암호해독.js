function solution(cipher, code) {
    var answer = '';
    var n=cipher.length;
    for(let i=code-1; i<n; i+=code){
        if(i==-1){
            continue;
        }
        answer+=cipher[i];
    }
    return answer;
}