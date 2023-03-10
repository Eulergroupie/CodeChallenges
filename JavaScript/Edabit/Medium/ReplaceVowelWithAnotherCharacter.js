/* Edabit
Replace Vowel with Another Character
Create a function that takes a string and replaces the vowels with another
 character.

a = 1
e = 2
i = 3
o = 4
u = 5
Examples
replaceVowel("karachi") ➞ "k1r1ch3"

replaceVowel("chembur") ➞ "ch2mb5r"

replaceVowel("khandbari") ➞ "kh1ndb1r3"
Notes
The input will always be in lowercase.
*/

function replaceVowel(word) {
	const vowel = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
	return word.replace(/[aeiou]/g, c => vowel[c]);
}

// Testing
console.log(replaceVowel("karachi"));  //, "k1r1ch3")
console.log(replaceVowel("dang"));  //, "d1ng")
console.log(replaceVowel("aen"));  //, "12n")
console.log(replaceVowel("chembur"));  //, "ch2mb5r")
console.log(replaceVowel("khandbari"));  //, "kh1ndb1r3")
console.log(replaceVowel("thamel"));  //, "th1m2l")