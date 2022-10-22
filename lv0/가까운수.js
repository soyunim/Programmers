function solution(array, n) {
    var answer = 0;
    var min = 1000001;
    array.sort();
    for(let i=0; i<array.length; i++){
        if(min>Math.abs(array[i]-n)){
            min=Math.abs(array[i]-n);
            answer = array[i];
        }
    }
    return answer;
}