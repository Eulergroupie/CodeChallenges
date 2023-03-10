/*
Persistence
The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

Create two functions that take an integer as an argument and:

Return its additive persistence.
Return its multiplicative persistence.
Examples: Additive Persistence
additivePersistence(1679583) ➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

additivePersistence(123456) ➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

additivePersistence(6) ➞ 0
// Because 6 is already a single-digit integer.
Examples: Multiplicative Persistence
multiplicativePersistence(77) ➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

multiplicativePersistence(123456) ➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

multiplicativePersistence(4) ➞ 0
// Because 4 is already a single-digit integer.
Notes
The input n is never negative.
*/

//const digSum = n => [...('' + n)].reduce((s, x) => s + +x, 0);
//const digProd = n => [...('' + n)].reduce((s, x) => s * +x, 1);

const digSum = n => eval([...n+''].join('+'));
const digProd = n => eval([...n+''].join('*'));
const additivePersistence = n =>
  n < 10 ? 0 : 1 + additivePersistence(digSum(n));
const multiplicativePersistence = n => 
  n < 10 ? 0 : 1 + multiplicativePersistence(digProd(n));
// Testing
console.log(digSum(512));
console.log(digProd(512));
console.log(additivePersistence(5));
console.log(additivePersistence(27));
console.log(additivePersistence(58));
console.log(additivePersistence(5789));
console.log(multiplicativePersistence(7), 0)
console.log(multiplicativePersistence(1234567890), 1)
console.log(multiplicativePersistence(39), 3)
console.log(multiplicativePersistence(6788), 6)
console.log(multiplicativePersistence(277777788888899), 11)
