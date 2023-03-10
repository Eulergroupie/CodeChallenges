/* Edabit
Char-to-ASCII
Create a function that returns the ASCII value of the passed in character.

Examples
ctoa("A") ➞ 65

ctoa("m") ➞ 109

ctoa("[") ➞ 91

ctoa("\") ➞ 92
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/

const ctoa = c => c.charCodeAt();

// Testing
console.log(ctoa(' '));  // 32
console.log(ctoa('A'));  // 65
console.log(ctoa(']'));  // 93
console.log(ctoa('^'));  // 94
console.log(ctoa('c'));  // 99
