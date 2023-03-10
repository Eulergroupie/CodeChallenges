/*
Move Zeroes
Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.

Examples
moveZeros([1, 0, 1, 2, 0, 1, 3]) ➞ [1, 1, 2, 1, 3, 0, 0]

moveZeros([0, 1, null, 2, false, 1, 0]) ➞ [1, null, 2, false, 1, 0, 0]

moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]) ➞ ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
Notes
N/A
*/

function moveZeros(arr) {
	let a = [], z = [];
  arr.forEach(x => x === 0 ? z.push(x) : a.push(x));
  return a.concat(z);
}

// Testing
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1,2,1,1,3,1,0,0,0,0])
console.log(moveZeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9]), [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0])
console.log(moveZeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9]), ["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0])
console.log(moveZeros(["a",0,0,"b",null,"c","d",0,1,false,0,1,0,3,[],0,1,9,0,0,0,0,9]), ["a","b",null,"c","d",1,false,1,3,[],1,9,9,0,0,0,0,0,0,0,0,0,0])
console.log(moveZeros([0,1,null,2,false,1,0]), [1,null,2,false,1,0,0])
console.log(moveZeros(["a","b"]), ["a","b"])
console.log(moveZeros(["a"]), ["a"])
console.log(moveZeros([0,0]), [0,0])
console.log(moveZeros([0]), [0])
console.log(moveZeros([false]), [false])
console.log(moveZeros([]), [])
//Mubashir

