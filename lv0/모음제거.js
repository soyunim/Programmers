function solution(my_string) {
    var answer = '';
    for(let i=0; i<my_string.length; i++){
        if(my_string[i]=='a'){
            continue;
        }
        if(my_string[i]=='e'){
            continue;
        }
        if(my_string[i]=='i'){
            continue;
        }
        if(my_string[i]=='o'){
            continue;
        }
        if(my_string[i]=='u'){
            continue;
        }
        else{
            answer+=my_string[i];
        }
    }
    return answer;
}