/* Edabit
Create a function that returns the number of hashes and pluses in a string.

Examples
hashPlusCount("###+") ➞ [3, 1]

hashPlusCount("##+++#") ➞ [3, 3]

hashPlusCount("#+++#+#++#") ➞ [4, 6]

hashPlusCount("") ➞ [0, 0]
Notes
Return [0, 0] for an empty string.
Return in the order of [hashes, pluses].
*/

function hashPlusCount(str) {
	return [/#/g, /\+/g].map(x => (str.match(x) || []).length);
}

// Testing
console.log(hashPlusCount("####"));  // [4, 0]
console.log(hashPlusCount("#"));  // [1, 0]
console.log(hashPlusCount("+++++++"));  // [0, 7]
console.log(hashPlusCount("++"));  // [0, 2]
console.log(hashPlusCount("#+#+"));  // [2, 2]
console.log(hashPlusCount("###+"));  // [3, 1]
console.log(hashPlusCount("##+++#"));  // [3, 3]
console.log(hashPlusCount("#+++#+#++#"));  // [4, 6]
console.log(hashPlusCount(""));  // [0, 0]