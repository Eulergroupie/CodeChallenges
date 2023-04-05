/* Numbered Alphabet
Create a function that converts a string of letters to their respective number in the alphabet.

A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	...
0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22	...
Examples
alphNum("XYZ") ➞ "23 24 25"

alphNum("ABCDEF") ➞ "0 1 2 3 4 5"

alphNum("JAVASCRIPT") ➞ "9 0 21 0 18 2 17 8 15 19"
Notes
Make sure the numbers are spaced.
All letters will be UPPERCASE. */

const alphNum = s => [...s].map(c => c.charCodeAt() - 65).join(' ');

console.log(alphNum("ABCD"), "0 1 2 3")
console.log(alphNum("BCDA"), "1 2 3 0")
console.log(alphNum("AAA"), "0 0 0")
console.log(alphNum("XYZ"), "23 24 25")