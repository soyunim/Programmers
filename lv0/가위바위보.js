function solution(rsp) {
    var answer = '';
    function Win(input){
        if(input==2){
            answer+=0;
        }
        if(input==0){
            answer+=5;
        }
        if(input==5){
            answer+=2;
        }
        return answer;
    }
    for(let i=0; i<rsp.length; i++){
        Win(rsp[i]);
    }
    return answer;
}