function solution(s){
    var answer = true;
    var cntP=0;
    var cntY=0;

    for(let i=0; i<s.length; i++){
        if(s[i]=='p' || s[i]=='P'){
            cntP++;
        }
        else if(s[i]=='y' || s[i]=='Y'){
            cntY++;
        }
    }
    if(cntP==cntY){
        answer = true;
    }
    else{
        answer = false;
    }
    
    return answer;
}