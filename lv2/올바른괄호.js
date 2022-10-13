function solution(s){
    var answer = true;
    let test=0;

    if(s[0]==')' || s[s.length-1]=='('){
        return false;
    }
    for(let i=0; i<s.length; i++){
        if(test<0){
            return false;
        }
        if(s[i]=='('){
            test++;
        }
        else{
            test--;
        }
    }
    if(test>0){
        return false;
    }
    return answer;
}