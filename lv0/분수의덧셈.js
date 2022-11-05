function solution(denum1, num1, denum2, num2) {
    var answer = [];
    
    var denum=0;
    var num=0;
    var result=0;
    
    denum=denum1*num2+denum2*num1;
    num=num1*num2;
    
    function gcd(denum, num){
        if(denum%num==0){
            return num;
        }
        else{
            return gcd(num, denum%num);
        }
    }
    
    result = gcd(denum,num);
    
    denum=denum/result;
    num=num/result;
    
    answer.push(denum);
    answer.push(num);
    
    return answer;
}