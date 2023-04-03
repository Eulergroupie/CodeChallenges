/* Is the Number Symmetrical?
Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

Examples
isSymmetrical(7227) ➞ true

isSymmetrical(12567) ➞ false

isSymmetrical(44444444) ➞ true

isSymmetrical(9939) ➞ false

isSymmetrical(1112111) ➞ true*/

/*
function isSymmetrical(num) {
    const n = '' + num;
    for(let i = 0; i < n.length / 2; i++) 
        if(n[i] !== n[n.length - 1 - i])
            return false;   
	return true;
}
*/
// by Employee427
const isSymmetrical = n => ("" + n).split("").reverse().join("") == n;

console.log(isSymmetrical(23), false)
console.log(isSymmetrical(9562), false)
console.log(isSymmetrical(10019), false)
console.log(isSymmetrical(1), true)
console.log(isSymmetrical(3223), true)
console.log(isSymmetrical(95559), true)
console.log(isSymmetrical(66566), true)
