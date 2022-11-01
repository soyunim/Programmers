function solution(survey, choices) {
    var result = '';
    var answer = '';
    var characters = ["R","T","C","F","J","M","A","N"];
    var scores=[0,0,0,0,0,0,0,0];
        
    
    // survey 원소 분류
    for(let i=0; i<survey.length; i++){
        answer+=(survey[i].split(","));
    }
    
    // 유형별 점수 추가
    for(let i=0; i<choices.length; i++){
        if(choices[i]>=1 && choices[i]<=3){
            scores[characters.indexOf(answer[2*(i+1)-2])]+=(4-choices[i]);
        }
        else if(choices[i]>=5 && choices[i]<=7){
            scores[characters.indexOf(answer[2*(i+1)-1])]+=(choices[i]-4);
        }
    }
    
    // 점수가 더 큰 유형 결과로 내주기
    for(let i=0; i<scores.length; i+=2){
        if(scores[i]>=scores[i+1]){
            result+=characters[i];
        }
        else{
            result+=characters[i+1];
        }
    }
    
    return result;
}