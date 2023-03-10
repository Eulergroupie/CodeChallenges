/* Edabit
Create a function that takes a number (step) as an argument and returns the
 amount of boxes in that step of the sequence.

Box Sequence Image

Step 0: Start with 0
Step 1: Add 3
Step 2: Subtract 1
Repeat Step 1 & 2 ...
Examples
boxSeq(0) ➞ 0

boxSeq(1) ➞ 3

boxSeq(2) ➞ 2
Notes
Step (the input) is always a positive integer (or zero).
*/

/*
function boxSeq(step) {
	let a = 0;
  for(let i = 0; i < step; i++)
    i % 2 ? a -= 1 : a += 3;
  
  return a;
}
*/

const boxSeq = n => n % 2 * 2 + n;

// Testing
console.log(boxSeq(5));  // 7
console.log(boxSeq(0));  // 0
console.log(boxSeq(6));  // 6
console.log(boxSeq(99));  // 101
console.log(boxSeq(2));  // 2
console.log(boxSeq(1));  // 3
let seq = [];
for(let i = 0; i < 10; i++) 
  seq.push(boxSeq(i));
console.log(seq);