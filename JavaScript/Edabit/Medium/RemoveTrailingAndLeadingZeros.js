/* Edabit
Create a function that takes in a number as a string n and returns the number
 without trailing and leading zeros.

Trailing Zeros are the zeros after a decimal point which don't affect the value
 (e.g. the last three zeros in 3.4000 and 3.04000).
Leading Zeros are the zeros before a whole number which don't affect the value
 (e.g. the first three zeros in 000234 and 000230).
Examples
removeLeadingTrailing("230.000") ➞ "230"

removeLeadingTrailing("00402") ➞ "402"

removeLeadingTrailing("03.1400") ➞ "3.14"

removeLeadingTrailing("30") ➞ "30"
Notes
Return a string.
If you get a number with .0 on the end, return the integer value
 (e.g. return "4" rather than "4.0").
If the number is 0, 0.0, 000, 00.00, etc... return "0".
*/

/*
// using RegEx
function removeLeadingTrailing(n) {
	if(n == 0)
    return '0'; 
  return n.replace(/\.0*$/, '').replace(/^0*(?!\.)/g, '').replace(/(\d*\.\d*)(?<=[1-9])(?:0*)$/, '$1');
} */

const removeLeadingTrailing = n => '' + +n;

// Testing
console.log(removeLeadingTrailing("230.000") === "230" ? 'Pass' : 'Fail');
console.log(removeLeadingTrailing("00402") === "402" ? 'Pass' : 'Fail');
console.log(removeLeadingTrailing("03.1400") === "3.14" ? 'Pass' : 'Fail');
console.log(removeLeadingTrailing("30") === "30" ? 'Pass' : 'Fail');
console.log(removeLeadingTrailing("30.0000") === "30" ? 'Pass' : 'Fail');
console.log(removeLeadingTrailing("24340") === "24340" ? 'Pass' : 'Fail');
console.log(removeLeadingTrailing("0404040") === "404040" ? 'Pass' : 'Fail');
console.log(removeLeadingTrailing("0") === "0" ? 'Pass' : 'Fail');
console.log(removeLeadingTrailing("00") === "0" ? 'Pass' : 'Fail');
console.log(removeLeadingTrailing("0.000000") === "0" ? 'Pass' : 'Fail');
console.log(removeLeadingTrailing("0000.000") === "0" ? 'Pass' : 'Fail');
console.log(removeLeadingTrailing("00.0001") === "0.0001" ? 'Pass' : 'Fail');
console.log(removeLeadingTrailing("10000") === "10000" ? 'Pass' : 'Fail');
console.log(removeLeadingTrailing("1345") === "1345" ? 'Pass' : 'Fail');
console.log(removeLeadingTrailing("30.000020") === "30.00002" ? 'Pass' : 'Fail');
console.log(removeLeadingTrailing("00200.1900001") === "200.1900001" ? 'Pass' : 'Fail');