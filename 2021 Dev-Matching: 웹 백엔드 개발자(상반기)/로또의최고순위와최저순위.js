function solution(lottos, win_nums) {
    var answer = [];
    var cnt1=0; //지워져 안보이는 수
    var cnt2=0; //로또와 같은 수
    for(let i=0; i<6; i++){
        if(lottos[i]==0){
            cnt1++;
        }
        for(let j=0; j<6; j++){
            if(lottos[i]==win_nums[j]){
                cnt2++;
            }
        }
    }
    
    var ans1=0;
    var ans2=0;
    
    if(cnt1+cnt2>=6){
        ans1=1;
    }else if(cnt1+cnt2==5){
        ans1=2;
    }else if(cnt1+cnt2==4){
        ans1=3;
    }else if(cnt1+cnt2==3){
        ans1=4;
    }else if(cnt1+cnt2==2){
        ans1=5;
    }else if(cnt1+cnt2==1 || cnt1+cnt2==0){
        ans1=6;
    }
    
    if(cnt2>=6){
        ans2=1;
    }else if(cnt2==5){
        ans2=2;
    }else if(cnt2==4){
        ans2=3;
    }else if(cnt2==3){
        ans2=4;
    }else if(cnt2==2){
        ans2=5;
    }else if(cnt2==1 || cnt2==0){
        ans2=6;
    }
    answer[0]=ans1;
    answer[1]=ans2;
    return answer;
}