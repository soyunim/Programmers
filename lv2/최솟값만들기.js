function solution(A,B){
    var answer = 0;

    A.sort(function(a,b){return a-b});
    B.sort(function(a,b){return b-a});
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    for(let i=0; i<A.length; i++){
        answer+=A[i]*B[i];
    }

    return answer;
}