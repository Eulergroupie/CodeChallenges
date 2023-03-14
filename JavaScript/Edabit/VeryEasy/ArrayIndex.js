/* Edabit
Given a 2D-list of letters arr and a list of indexes idx, find the letters on
 given indexes and return as a string.

arr = [
  ["m", "u", "b"],
  ["a", "s", "h"],
  ["i", "r", "1"]
]

idx = [1, 3, 5, 8]
You have to find the characters in these indexes of the given list if you think
 of the indexes as:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
arrIndex(lst, idx) ➞ "mbsr"
Notes
Remember that the indexes start from one and not zero.
*/

/*
function arrIndex(lst, idx) {
  let lin =  lst.flat();
  let res = '';
  for(let i of idx) {
    res += lin[i-1];
  }
  return res;
 }
*/

const arrIndex = (m, i) => i.reduce((s, x)=>s + m.flat()[x - 1], '');

 // Testing
const arr = [
  ["m", "u", "b"],
  ["a", "s", "h"],
  ["i", "r", "1"]
];

const idx = [1, 3, 5, 8];

console.log(arrIndex(arr, idx));