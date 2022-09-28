function solution(operations) {
    var answer = [];
    var result=[];
    for(i=0; i<operations.length; i++){
        operations[i]=operations[i].split(' ');
        if(operations[i][0]=='I'){
            answer.unshift(parseInt(operations[i][1]));
        }
        answer.sort(function(a,b){return a-b;});
        if(operations[i][0]=='D'){
            if(operations[i][1]=='1'){
                answer.pop();
            }
            else{
                answer.shift();
            }
        }
    }
    if(answer.length==0){
        return [0,0];
    }
    result[0]=answer[answer.length-1];
    result[1]=answer[0];
    
    return result;
}