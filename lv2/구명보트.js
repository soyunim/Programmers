function solution(people, limit) {
    var answer = 0;
    
    people.sort(function (a,b){
        return a-b;
    });
    
    while(people.length!==0){
        if(limit < people[0]+people[people.length-1]){
            people.pop();
            answer++;
        }
        else{
            people.shift();
            people.pop();
            answer++;
        }
    }
    
    return answer;
}