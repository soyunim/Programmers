function solution(s) {
    var answer = 0;
    var t = [];
    var temp = 0;
    var brc = s.split("");
    
    function checking(str){
        t = [];
        t.push(str[0].charCodeAt(0));
        for(let i=1; i<str.length; i++){
            if(t[t.length-1]==str[i].charCodeAt(0)-1 || t[t.length-1]==str[i].charCodeAt(0)-2){
                t.pop();
            }
            else{
                t.push(str[i].charCodeAt(0));
            }
        }
        
        if(t.length==0){
            answer++;
            return true;
        }
        return false;
    }
    
    
    for(let i=0; i<brc.length; i++){
        checking(brc);
        temp = brc.shift();
        brc.push(temp);
    }
    
    return answer;
}