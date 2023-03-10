/* Edabit
Emphasise the Words
Create a function that returns a capitalized version of the string passed. The
 first letter of each word in the string should be capitalized while the rest
 of each word should be lowercase.

Examples
emphasise("hello world") ➞ "Hello World"

emphasise("GOOD MORNING") ➞ "Good Morning"

emphasise("99 red balloons!") ➞ "99 Red Balloons!"
Notes
You won't run into any issues when dealing with numbers in strings.
*/

/*
// mine
function emphasise(s) {
	let r = s.split('').map(x => x.toLowerCase()).join('');
  return r ? r.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ') : '';
} */

// by cvf
function emphasise(str) {
	return str.toLowerCase().replace(/\b./g, m => m.toUpperCase());
}

// Testing
console.log(emphasise("hello world"));  //, "Hello World")
console.log(emphasise("GOOD MORNING"));  //, "Good Morning")
console.log(emphasise("99 red balloons!"));  //, "99 Red Balloons!")
console.log(emphasise("1 2 3 4 5 6 7 8 9"));  //, "1 2 3 4 5 6 7 8 9")
console.log(emphasise(""));  //, "")
console.log(emphasise("joshua senoron"));  //, "Joshua Senoron")