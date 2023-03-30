/* Array Operation
Create a function that takes three parameters where:

x is the start of the range (inclusive).
y is the end of the range (inclusive).
n is the divisor to be checked against.
Return an ordered array with numbers in the range that are divisible by the 
third parameter n. Return an empty array if there are no numbers that are 
divisible by n.

Examples
arrayOperation(1, 10, 3) ➞ [3, 6, 9]

arrayOperation(7, 9, 2) ➞ [8]

arrayOperation(15, 20, 7) ➞ [] */
const arrayOperation = (x, y, n) => 
	[...Array(y - x + 1).keys()].map(a => a + x).filter(b => b % n === 0);

console.log(arrayOperation(1, 10, 3), [3, 6, 9])
console.log(arrayOperation(7, 9, 2), [8])
console.log(arrayOperation(15, 20, 7), [])
console.log(arrayOperation(10, 50, 10), [10, 20, 30, 40, 50])
console.log(arrayOperation(1, 10, 2), [2, 4, 6, 8, 10])
console.log(arrayOperation(1, 100, 17), [17, 34, 51, 68, 85])
console.log(arrayOperation(15, 20, 5), [15, 20])