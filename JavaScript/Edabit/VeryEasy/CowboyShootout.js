/* Cowboy Shootout
Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as 
possible. Here are the different types of shots he could make:

He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
Or he could use both pistols at once with a "BangBang!" to shoot two bottles
in 0.5 seconds.
Given an array of strings, return the time (in seconds) it took to shoot down 
all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else 
doesn't count.

Examples
rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]) ➞ 3

rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]) ➞ 2.5

rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]) ➞ 2

Notes
All the bottles will be shot down in all the tests. */
/*
function rogerShots(arr) {
	let sum = 0;
    for(let shot of arr) 
        if(/^(Bang){1,2}!/.test(shot)) 
            sum += 0.5;
    return sum;
}
*/
/* The following regex says: Bang, once or twice followed by an exclaimation mark; 
    nothing before it, nothing after it. */
const rogerShots = r => r.reduce((s, x) => s + (/^(Bang){1,2}!$/.test(x) ? 0.5 : 0), 0);

console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]), 3)
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]), 2.5)
console.log(rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]), 2)
console.log(rogerShots(["BangBang!", "BangBang!", "BangBang!"]), 1.5)
console.log(rogerShots(["Bang!", "BadaBing!", "Badaboom!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]), 3)
console.log(rogerShots(["BangBang!", "BangBang!", "Bag!", "Ban!", "Tang!", "Bang!", "Bang!"]), 2)

// made by @Joshua Señoron 