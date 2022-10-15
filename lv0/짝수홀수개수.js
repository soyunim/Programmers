function solution(num_list) {
    var answer = [];
    var cnt1=0;
    var cnt2=0;
    for(let i=0; i<num_list.length; i++){
        if(num_list[i]%2==0){
            cnt1++;
        }
        else{
            cnt2++;
        }
    }
    answer[0]=cnt1;
    answer[1]=cnt2;
    return answer;
}