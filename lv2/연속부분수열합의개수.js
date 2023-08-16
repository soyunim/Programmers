function solution(elements) {
    var answer = 0;
    var nums = [];
    var t = [];
    var sum = 0;
    var temp = elements.concat(elements);
    temp.pop();
    
    for(let i=0; i<elements.length; i++){
        for(let j=i; j<i+elements.length; j++){
            sum = 0;
            t = temp.slice(i,j+1);
            t.forEach(n => {
                sum+=n;
            });
            nums.push(sum);
        }
    }
    
    answer = [...new Set(nums)].length;
    return answer;
}