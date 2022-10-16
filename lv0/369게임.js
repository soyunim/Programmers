function solution(order) {
    var answer = 0;
    var n= order.toString().length;
    order=order.toString();
    for(let i=0; i<n; i++){
        if(order[i]==3||order[i]==6||order[i]==9){
            answer++;
        }
    }
    return answer;
}