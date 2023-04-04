/* 
Phone Number Formatting
Create a function that takes an array of 10 numbers (between 0 and 9) and 
returns a string of those numbers formatted as a phone number 
(e.g. (555) 555-5555).

Examples
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) ➞ "(519) 555-4468"

formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) ➞ "(345) 501-2527"
Notes
Don't forget the space after the closing parenthesis.
*/

/*const formatPhoneNumber = n => 
    `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
*/

/*const formatPhoneNumber = n => 
    '(' + n.reduce((s, c, i) => s + c + (i == 2 ? ') ' : i == 5 ? '-' : ''), '');
*/

// nice algorithm by Tiago
/*function formatPhoneNumber(numbers) {
  let masked = '(###) ###-####';
  numbers.forEach(v => masked = masked.replace("#", v));
  return masked;
}
*/

// nice RegEx by Vishal Shinde
/*function formatPhoneNumber(numbers) {
   return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
*/

// another nice RegEx, this time by ArcherHume
/*const formatPhoneNumber = r =>
	'(xxx) xxx-xxxx'.replace(/x/g, v => r.shift());*/

const formatPhoneNumber = n => 
    n.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")
console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]), "(519) 555-4468")
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]), "(345) 501-2527")
console.log(formatPhoneNumber([6, 6, 2, 5, 8, 8, 7, 0, 4, 3]), "(662) 588-7043")
console.log(formatPhoneNumber([5, 1, 0, 2, 6, 6, 3, 5, 8, 3]), "(510) 266-3583")
console.log(formatPhoneNumber([4, 9, 7, 8, 8, 9, 1, 0, 1, 5]), "(497) 889-1015")
console.log(formatPhoneNumber([6, 1, 9, 4, 7, 2, 8, 0, 7, 4]), "(619) 472-8074")
console.log(formatPhoneNumber([7, 7, 3, 7, 8, 3, 6, 0, 8, 7]), "(773) 783-6087")
console.log(formatPhoneNumber([9, 5, 3, 1, 3, 7, 4, 0, 0, 1]), "(953) 137-4001")
console.log(formatPhoneNumber([2, 2, 6, 4, 0, 4, 4, 2, 9, 2]), "(226) 404-4292")