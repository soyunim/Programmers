function solution(n, words) {
    var answer = [0,0];

    for(let i=0; i<words.length; i++){
        let alre = words[i];
        let who = (i%n)+1;
        let when = Math.ceil((i+1)/n);
        if(i>0){
            let last = words[i-1].split("");
            if(i>words.indexOf(alre) || last[last.length-1]!=words[i][0]){
                answer=[who,when];
                break;
            }
        }
        
    }
    
    return answer;
}