/*
Sort the Unsortable
In this challenge you will be given an array similar to the following:

[[3], 4, [2], [5], 1, 6]
In words, elements of the array are either an integer or an array containing a
single integer. We humans can clearly see that this array can reasonably be
sorted according to "the content of the elements" as:

[1, [2], [3], 4, [5], 6]
Create a function that, given an array similar to the above, sorts the array
according to the "content of the elements".

Examples
sortIt([4, 1, 3]) ➞ [1, 3, 4]

sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

sortIt([4, [1], 3]) ➞ [[1], 3, 4]

sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]

sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]
Notes
To reiterate, elements of the array will be either integers or arrays with a
single integer.
*/
// Author : Luis Pereira

/*const sortIt = r => {
	return r.sort((a, b) => {
    const c = typeof(a) == 'number' ? a : a[0];
    const d = typeof(b) == 'number' ? b : b[0];
    return c - d;
  }); 
}*/

//const sortIt = a => a.sort((a,b)=> a - b); // type coercion enables 2 > [3]
const sortIt = a => a.sort();  // no digit over 9, a - b sort unnecessary

// Testing
console.log(...sortIt([4, 1, 3]), [1, 3, 4])
console.log(...sortIt([[4], [1], [3]]), [[1], [3], [4]])
console.log(...sortIt([4, [1], 3]), [[1], 3, 4])
console.log(...sortIt([[4], 1, [3]]), [1, [3], [4]])
console.log(...sortIt([[3], 4, [2], [5], 1, 6]), [1, [2], [3], 4, [5], 6])
console.log(...sortIt([[3], 7, [9], [5], 1, 6]), [1, [3], [5], 6, 7, [9]])
console.log(...sortIt([[3], 7, [9], [5], 1, 6, [0]]), [[0], 1, [3], [5], 6, 7, [9]])
