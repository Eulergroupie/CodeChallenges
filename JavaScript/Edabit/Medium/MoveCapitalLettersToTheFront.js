/* Edabit
Create a function that moves all capital letters to the front of a word.

Examples
capToFront("hApPy") ➞ "APhpy"

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt"
Notes
Keep the original relative order of the upper and lower case letters the same.
*/

/*
// mine
function capToFront(s) {
	let upper = '', lower = '';
  [...s].map(c => (/[A-Z]/.test(c)) ? upper += c : lower += c);
  return upper + lower;
} */

// dcvasallo131
function capToFront(s) {
  return s.match(/[A-Z]/g).join('') + s.match(/[a-z]/g).join('');
}

// Testing
console.log(capToFront("hApPy"));  // "APhpy"
console.log(capToFront("moveMENT"));  // "MENTmove"
console.log(capToFront("aPPlE"));  // "PPEal"
console.log(capToFront("shOrtCAKE"));  // "OCAKEshrt"