function solution(age) {
    var answer = '';
    var n=age.toString().length;
    var num=age.toString();
    var arr = ['a','b','c','d','e','f','g','h','i','j'];
    for(let i=0; i<n; i++){
        answer+=arr[num[i]];
    }
    return answer;
}