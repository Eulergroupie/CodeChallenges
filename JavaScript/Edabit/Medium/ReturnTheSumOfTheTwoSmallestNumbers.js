/* Return the Sum of the Two Smallest Numbers
Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

Examples
sumTwoSmallestNums([19, 5, 42, 2, 77]) ➞ 7

sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) ➞ 3453455

sumTwoSmallestNums([2, 9, 6, -1]) ➞ 8

sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) ➞ 563

sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) ➞ 4519
Notes
Don't count negative numbers.
Floats and empty arrays will not be used in any of the test cases. */

const sumTwoSmallestNums = r => {
	r.sort((a, b) => a - b);
	return r.filter(x => x > 0).slice(0, 2).reduce((s, n) => s + n);
}

console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]), 7);
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]), 3453455);
console.log(sumTwoSmallestNums([2, 9, 6, -1]), 8);
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]), 563);
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]), 4519);
console.log(sumTwoSmallestNums([280, 134, 108]), 242);
console.log(sumTwoSmallestNums([280, 134, 108, 1]), 109);
console.log(sumTwoSmallestNums([321, 406, -176]), 727);
console.log(sumTwoSmallestNums([1, 1, 1, 1]), 2);
console.log(sumTwoSmallestNums([-1, -1, 1, 1]), 2);
