/*Fix the Error: Value vs. Reference Types
Create a function that returns true if two arrays contain identical values, and false otherwise.

To solve this question, your friend writes the following code:

function checkEquals(arr1, arr2) {
if (arr1 === arr2) {
  return true
 } else {
  return false
 }
}
But testing the code, you see that something is not quite right. Running the code yields the following results:

checkEquals([1, 2], [1, 3]) ➞ false
// Good so far...

checkEquals([1, 2], [1, 2]) ➞ false
// Yikes! What happened?
Rewrite your friend's code so that it correctly checks if two arrays are equal. To be equal, the arrays must have the same elements in the same order. The tests below should pass:

Examples
checkEquals([1, 2], [1, 3]) ➞ false

checkEquals([1, 2], [1, 2]) ➞ true

checkEquals([4, 5, 6], [4, 5, 6]) ➞ true

checkEquals([4, 7, 6], [4, 5, 6]) ➞ false

checkEquals([4, 7, 6], [4, 6, 7]) ➞ false
Notes
Hint: This has to do with value vs. reference types.
*/

let checkEquals = (r, rr) => r.every((x, i) => x === rr[i])

// Testing
console.log(checkEquals([1, 2], [1, 3]), false)
console.log(checkEquals([1, 2], [1, 2]), true)
console.log(checkEquals([4, 5, 6], [4, 5, 6]), true)
console.log(checkEquals([4, 7, 6], [4, 5, 6]), false)
