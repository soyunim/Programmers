function solution(arr)
{
    var answer = [];
    
    var startIdx=0;
    var endIdx=1;

    function pushNum(start, end){
        answer.push(arr[start]);
    }
    for(let i=0; i<arr.length*2; i++){
        if(arr[startIdx]==arr[endIdx]){
            endIdx++;
        }
        else{
            pushNum(startIdx,endIdx);
            startIdx=endIdx;
        }
    }
    
    return answer;
}