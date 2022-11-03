function solution(s) {
    var answer = s;
    let eng=["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i=0; i<eng.length; i++){
        let arr = answer.split(eng[i]); 
        console.log(arr);
    }
    return Number(answer);
}