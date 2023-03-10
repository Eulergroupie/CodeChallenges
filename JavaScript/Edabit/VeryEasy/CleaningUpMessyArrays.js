/* Edabit
Create a function that takes an array. This array will contain numbers
represented as strings.

Your function should split this array into two new arrays. The first array
should contain only even numbers. The second only odd. Then, wrap these
two arrays in one main array and return it.

Return an empty array if there are no even numbers, or odd.

Examples
cleanUpArray(["8"]) ➞ [[8], []]

cleanUpArray(["11"]) ➞ [[], [11]]

cleanUpArray(["7", "4", "8"]) ➞ [[4, 8], [7]]

cleanUpArray(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]
Notes
All numbers will be positive integers.
*/
function cleanUpArray(r) {
	let  evens = [], odds = [];
  r.map(x => x % 2 ? odds.push(+x) : evens.push(+x));
  return [evens, odds];
}

// Testing
console.log(...cleanUpArray(["8"]));
console.log(...cleanUpArray(["11"]));
console.log(...cleanUpArray(["7", "4", "8"]));
console.log(...cleanUpArray(["9", "4", "5", "8"]));
