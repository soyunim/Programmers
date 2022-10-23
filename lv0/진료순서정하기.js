function solution(emergency) {
    var new_e = emergency.sort(function(a,b){return b-a;});
    return emergency.map(person => new_e.indexOf(person)+1);
}