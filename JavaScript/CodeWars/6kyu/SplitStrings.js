/* Complete the solution so that it splits the string into pairs of two 
characters. If the string contains an odd number of characters then it 
should replace the missing second character of the final pair with an 
underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */

/*function solution(str) {
    if(str.length % 2 === 1) 
        str += '_';
    return str.length !== 0 ? str.match(/.{2}/g) : [];  
}*/

// after looking at myjinxin2015 on Codewars
const solution = s => (s + '_').match(/.{2}/g) || [];

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);