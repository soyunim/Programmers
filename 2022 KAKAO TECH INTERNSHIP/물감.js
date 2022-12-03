function solution(priorities, location) {
    
    const getCombinations = function (arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((value) => [value]);

        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            const combinations = getCombinations(rest, selectNumber - 1);
            const attached = combinations.map((combination) => [fixed, ...combination]);
            results.push(...attached); 
        });

        return results;
    }
    
    var answer = [];
    var result = 0;
    var max = 0;
    var max_value = 0;
    
    var stack = [];
    var result_stack = [];
    var sum = 0;
    var total = [];

    for(let i=1; i<=priorities.length; i++){
        stack.push(getCombinations(priorities,i));
    }
    
    for(let i=0; i<stack.length; i++){
        for(let j=0; j<stack[i].length; j++){
            result_stack.push(stack[i][j]);
        }
    }
    
    for(let i=0; i<result_stack.length; i++){
        result = result_stack[i].reduce(function add(sum, currValue) {return sum + currValue; }, 0);
        if(result<=location){
            answer.push(result_stack[i]);
        }
    }
    
    for(let i=0; i<answer.length; i++){
        max_value=0;
        for(let j=0; j<answer[i].length; j++){
            max_value+=Math.pow(2,priorities.indexOf(answer[i][j]));
        }
        if(max<max_value){
            max=max_value;
        }
    }
    
    return max;
}