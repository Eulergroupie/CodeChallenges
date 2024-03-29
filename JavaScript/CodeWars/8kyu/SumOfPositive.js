/* Codewars
 You get an array of numbers, return the sum of all of the positives ones.

 Example:
  [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

// C-style
/*function positiveSum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; ++i) {
    if(arr[i] > 0)
      sum += arr[i];
  }
  return sum;
}*/

/*// forEach with anonymous function
function positiveSum(arr) {
  let sum = 0;
  arr.forEach(value => value > 0 ? sum += value : 0);
  return sum;
}*/

// reduce lives up to its name
const positiveSum = arr => arr.reduce((sum, x) => sum + (x > 0 ? x : 0), 0);


// Testing
console.log(positiveSum([1,2,3,4,5]));  // 15
console.log(positiveSum([1,-2,3,4,5]));  // 13
console.log(positiveSum([]));  // 0
console.log(positiveSum([-1,-2,-3,-4,-5]));  // 0
console.log(positiveSum([-1,2,3,4,-5]));  // 9
