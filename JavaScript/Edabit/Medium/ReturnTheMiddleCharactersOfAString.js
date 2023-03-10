/* Edabit
Create a function that takes a string and returns the middle character(s). If
 the word's length is odd, return the middle character. If the word's length is
 even, return the middle two characters.

Examples
getMiddle("test") ➞ "es"

getMiddle("testing") ➞ "t"

getMiddle("middle") ➞ "dd"

getMiddle("A") ➞ "A"
Notes
All test cases contain a single word (as a string).
*/

function getMiddle(s) {
  const len = s.length;
  const center = Math.floor(len / 2);
	return len % 2 ? s[center] : s[center - 1] + s[center];
}

console.log(getMiddle("test"));  //, "es")
console.log(getMiddle("testing"));  //, "t")
console.log(getMiddle("middle"));  //, "dd")
console.log(getMiddle("A"));  //, "A")
console.log(getMiddle("inhabitant"));  //, "bi")
console.log(getMiddle("brown"));  //, "o")
console.log(getMiddle("pawn"));  //, "aw")
console.log(getMiddle("cabinet"));  //, "i")
console.log(getMiddle("fresh"));  //, "e")
console.log(getMiddle("shorts"));  //, "or")