function solution(arr1, arr2) {
    var answer = [[]];
    
    for(let i=0; i<arr1.length; i++){
        let arr=[];
        for(let j=0; j<arr2[0].length; j++){
            let temp=0;
            for(let k=0; k<arr2.length; k++){
                temp+=parseInt(arr1[i][k])*parseInt(arr2[k][j]);
            }
            arr.push(temp);
        }
        answer.push(arr);
    }
    answer.shift();
    return answer;
}