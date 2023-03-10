/*Return the Highest and Lowest Numbers
Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).

Examples
highLow("1 2 3 4 5") ➞ "5 1"

highLow("1 2 -3 4 5") ➞ "5 -3"

highLow("1 9 3 4 -5") ➞ "9 -5"

highLow("13") ➞ "13 13"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highLow(s) {
	let t = s.split(' ').sort((a, b) => a - b);
  return `${t.slice(-1)} ${t[0]}`;
}

// Testing
console.log(highLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214")
console.log(highLow("1 -1"), "1 -1")
console.log(highLow("1 1"), "1 1")
console.log(highLow("-1 -1"), "-1 -1")
console.log(highLow("1 -1 0"), "1 -1")
console.log(highLow("1 1 0"), "1 0")
console.log(highLow("-1 -1 0"), "0 -1")
console.log(highLow("42"), "42 42")