/* Edabit
Create a function that returns a number, based on the string provided. 
Here is a list of all digits (if you are non-English speaker):

String	Number
"one"	1
"two"	2
"three"	3
"four"	4
"five"	5
"six"	6
"seven"	7
"eight"	8
"nine"	9
"zero"	0
Examples
word("one") ➞ 1

word("two") ➞ 2

word("nine") ➞ 9
Notes
All numbers will be single digit positive integers.
*/

const numWords = {
	zero: 0,
	one: 1,
	two: 2,
	three: 3,
	four: 4,
  five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9
}

const word = s => numWords[s];

console.log(word("one"));
console.log(word("two"));
console.log(word("three"));
console.log(word("four"));
console.log(word("five"));
console.log(word("six"));
console.log(word("seven"));
console.log(word("eight"));
console.log(word("nine"));
console.log(word("zero"));