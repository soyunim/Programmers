function solution(num_list, n) {
    var answer = [[]];
    var re = [];
    for(let i=0; i<num_list.length; i+=n){
        re=num_list.slice(i,i+n);
        answer.push(re);
    }
    answer.shift();
    return answer;
}