function solution(n) {
    var answer = 0;
    var v_gcd=0;
    function gcd(num1, num2){
        while (num2 > 0) {
            let temp = num2;
            num2 = num1 % num2;
            num1 = temp;
            v_gcd=num1;
            }
        return v_gcd;
    };
    answer=(n*6/gcd(n,6))/6;
    return answer;
}