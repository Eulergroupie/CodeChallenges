/* A Long Long Time
Create a function that takes three values:

h hours
m minutes
s seconds
Return the value that's the longest duration.

Examples
longestTime(1, 59, 3598) ➞ 1

longestTime(2, 300, 15000) ➞ 300

longestTime(15, 955, 59400) ➞ 59400
Notes
No two durations will be the same. 
*/

function longestTime(h, m, s) {
	const [a, b] = [(h * 3600), (m * 60)];
    return [h, m, s][(b>=a && b>=s) + 2*(s>=a && s>=b)];
}

console.log(longestTime(1, 59, 3598), 1)
console.log(longestTime(2, 300, 15000), 300)
console.log(longestTime(15, 955, 59400), 59400)
