/* Edabit
You hired three programmers and you (hopefully) pay them. Create a function
 that takes three numbers (the hourly wages of each programmer) and returns
  the difference between the highest-paid programmer and the lowest-paid.

Examples
programmers(147, 33, 526) ➞ 493

programmers(33, 72, 74) ➞ 41

programmers(1, 5, 9) ➞ 8
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/

function programmers(one, two, three) {
	let r = [one, two, three].sort((a, b) => a - b);
  return r[2] - r[0];
}

// Testing
console.log(programmers(1, 5, 9));  // 8
console.log(programmers(43,  33,  43));  // 10
console.log(programmers(88,  14,  23));  // 74
console.log(programmers(33,  72,  74));  // 41
console.log(programmers(147, 33,  526));  // 493
console.log(programmers(234, 345, 457));  // 223