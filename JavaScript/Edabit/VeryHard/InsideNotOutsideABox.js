/*Inside, not Outside a Box
Write a function that returns the number of distinct items inside a box. Do not count items outside the box.

There are four boundaries for a box and those boundaries start with a "#" and end with a "#". Look for horizontal and vertical consecutive hashes.

Examples
count([
  "??????",
  "?####?",
  "?#&!#?",
  "@#^Z#?",
  "$####?"
]) ➞ 4

count([
  "??????",
  "?####?",
  "?#ZZ#?",
  "@#ZZ#?",
  "$####?",
  "AAAAAA"
]) ➞ 1

count([
  "AAAAA",
  "AAA##",
  "AAA##",
  "AAAAA",
  "AAAAA"
]) ➞ 0
Notes
Return 0 if the box is empty or too small to fit anything.
*/

function count(box) {
	return box.map(x => x.match(/#[^\s]#/))
}

console.log(...count(
  ["??????",
  "?####?",
  "?#&!#?",
  "@#^Z#?",
  "$####?"]), 4)
  
  console.log(count(
  ["??????",
  "?####?",
  "?#ZZ#?",
  "@#ZZ#?",
  "$####?", 
  "AAAAAA"]), 1)
  
  console.log(count(
  ["??????",
  "?####?",
  "?#  #?",
  "@#  #?",
  "$####?", 
  "AAAAAA"]), 0)
  
  console.log(count(
  ["??????Z",
  "Z?####?V",
  "$?#  #?X",
  "$@#BA#?P",
  "$T####?T", 
  "ZAAAAAAT"]), 2)
  
  console.log(count(
  ["??????Z",
  "Z?####?V",
  "$?#BB#?X",
  "$@#BA#?P",
  "$T####?T", 
  "ZAAAAAAT"]), 2)
  
  console.log(count(
  ["!!Z",
  "###",
  "#B#",
  "#B#",
  "###"]), 1)
  
  console.log(count(
  ["!!Z",
  "###",
  "#B#",
  "# #",
  "###"]), 1)
  
  console.log(count(
  ["AAAAA",
  "AAA##",
  "AAA##",
  "AAAAA",
  "AAAAA"]), 0)
  
  console.log(count(
  ["AAAAAAA",
  "AAA###A",
  "AAA#!#A",
  "AAA###A",
  "AAAAAAA"]), 1)
  
  console.log(count(
  ["#AAAAAABC",
  "AAA#####C",
  "ZAA#!%@#C",
  "AAA#####C",
  "#AAAAAABC"]), 3)