function solution(letter) {
    var answer = '';
    var morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'}
    var key = Object.keys(morse);
    var value = Object.values(morse);
    letter=letter.split(' ');
    for(let i=0; i<letter.length; i++){
        for(let j=0; j<26; j++){
            if(letter[i]==key[j]){
                answer+=value[j];
            }
        }
    }
    return answer;
}