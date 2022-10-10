function solution(arr) {
    var answer = 1;
    
    function gcd(num1, num2){
      while (num2 > 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
        v_gcd=num1;
      }
      return v_gcd;
    };

    function lcm(num1, num2){
      answer = (num1 * num2) / gcd(num1, num2);
      return answer;
    };
    
    for(let i=0; i<arr.length; i++){
        lcm(answer, arr[i]);
    }
    
    return answer;
}