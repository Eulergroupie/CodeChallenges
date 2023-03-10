/* Edabit
//Learn Lodash (4): _.dropRight, Drop the Last Elements of an Array
According to the lodash documentation, _.dropRight Creates a slice of an array
 with n elements dropped from the end.

This challenge requires you to write your own version of this function without
 using lodash so that you can better understand it works.

Examples
dropRight([1, 2, 3]) ➞ [1, 2]

dropRight([1, 2, 3], 2) ➞ [1]

dropRight([1, 2, 3], 5) ➞ []

dropRight([1, 2, 3], 0) ➞ [1, 2, 3]
Notes
Do not attempt to import lodash; you are simply writing your own version.
*/

function dropRight(arr, num = 1) {
  return num > arr.length ? [] : arr.slice(0, arr.length - num);
}

// Testing
console.log(dropRight([1, 2, 3]));  // [1, 2]
console.log(dropRight([1, 2, 3], 1));  // [1, 2]
console.log(dropRight([1, 2, 3], 2));  // [1]
console.log(dropRight([1, 2, 3], 3));  // []
console.log(dropRight([1, 2, 3], 4));  // []
console.log(dropRight([1, 2, 3], 5));  // []
console.log(dropRight([1, 2, 3], 0));  // [1, 2, 3]