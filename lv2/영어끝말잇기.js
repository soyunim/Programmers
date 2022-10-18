function solution(n, words) {
    var answer = [0,0];

    for(let i=0; i<words.length-1; i++){
        for(let j=i+1; j<words.length; j++){
            let last = words[j-1].split('');
            let first = words[j].split('');
            
            if(words[i]==words[j] || last[last.length-1]!=first[0]){
                let who=j%n+1;
                let when=Math.ceil((j+1)/n);
                answer=[who, when];
            }
            
        }
    }
    return answer;
}