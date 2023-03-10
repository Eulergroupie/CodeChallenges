/*Simple Encoder
Create a function that takes a string str and performs simple encoding as per the following method:

Replace all single occurrence characters with [
Replace all characters with two or more occurrences with ]
Return the final string after modification.

Examples
simpleEncoder("Mubashir") ➞ "[[[[[[[["
// '[' for each character

simpleEncoder("Matt") ➞ "[[]]"
// ']' for both 't'

simpleEncoder("eD  aBiT") ➞ "[[]][[[["
// Two spaces in between
Notes
Strings can contain lower and uppercase letters. Treat them equally (i.e. A = a, B = b).
Spaces are also characters.
*/

function simpleEncoder(s) {
	let memo = {};
  for(let c of s.toLowerCase()) 
    memo[c] = (c in memo) ? memo[c] + 1 : 1;
  
  return s.toLowerCase().split('').map(x => memo[x] > 1 ? ']' : '[').join('');
}

// Testing
console.log(simpleEncoder("Mubashir"), "[[[[[[[[")
console.log(simpleEncoder("Matt"), "[[]]")
console.log(simpleEncoder("Mu ba sh ir Ha ss an"), "[[][]]]]][[]]]]]]]][")
console.log(simpleEncoder("HelEn"), "[][][")
console.log(simpleEncoder("Air  force"), "[[]]][[][[")
console.log(simpleEncoder("Pakistan"), "[][[[[][")
console.log(simpleEncoder("eD  aBiT"), "[[]][[[[")
console.log(simpleEncoder("Success"), "][]][]]")
console.log(simpleEncoder("iiiiii"), "]]]]]]")
// Mubashir
