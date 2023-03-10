/*
Is the Input Factorial of an Integer?
Create a function to check if a given integer is a factorial of integer or not. The return value should be a boolean.

Examples
isFactorial(2) ➞ true
// 2 = 2 * 1 = 2!

isFactorial(27) ➞ false

isFactorial(24) ➞ true
// 24 = 4 * 3 * 2 * 1 = 4!
Notes
Input is a positive integer.
Alternatively, you can solve this with a recursive approach.
*/

let isFactorial = (n, d = 1) =>
  n === d ? true : n % d == 0 && isFactorial(n / d, d + 1);

// Testing
console.log(isFactorial(6), true)
console.log(isFactorial(16), false)
console.log(isFactorial(24), true)
console.log(isFactorial(36), false)
console.log(isFactorial(720), true)
console.log(isFactorial(120), true)
