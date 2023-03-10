/* Edabit
You need to create two functions to substitute toString() and parseInt();
 A function called intToString() that converts integers into strings and a
 function called stringToInt() that converts strings into integers.

Examples:
intToString(4) ➞ "4"

stringToInt("4") ➞ 4

intToString(29348) ➞ "29348"
Notes
You will get bonus points if you manage to solve this without using toString,
 parseInt or parseFloat.
*/

/*
function intToString(num) {
	let result = [];
  while(num > 0) {
    result.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return result.join('');
}
*/

//const intToString = n => n.toString();

const intToString = n => `${n}`;

const stringToInt = s => +s;

// Testing
console.log(intToString(4), typeof intToString(4));
console.log(intToString(65), typeof intToString(65));
console.log(intToString(29348), typeof intToString(29348));
console.log(intToString(49583908545), typeof intToString(49583908545));

console.log(stringToInt('4'), typeof stringToInt('4'));
