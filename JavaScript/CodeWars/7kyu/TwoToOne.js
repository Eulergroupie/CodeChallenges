/* Codewars
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted
 string, the longest possible, containing distinct letters - each taken only 
 once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(a, b , t = '') {
  (new Set((a+b).split('').sort())).forEach(x=>t+=x);
  return t;
}

// by Balkoth
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// Testing 
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")=="abcdefklmopqwxy"?'Pass':'Fail');
console.log(longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")=="abcdefghijklmnopqrstuvwxyz"?'Pass':'Fail');