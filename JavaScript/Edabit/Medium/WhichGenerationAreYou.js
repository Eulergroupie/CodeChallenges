/*
Which Generation Are You?
Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for
 female), and returns the name of an ancestor (m/f) or descendant (m/f).

If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!".
Examples
generation(2, "f") ➞ "granddaughter"

generation(-3, "m") ➞ "great grandfather"

generation(1, "f") ➞ "daughter"
Notes
Check the Resources tab for helpful hints.

Generation	Male	Female
-3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter
*/
function generation(x, y) {
    if(x === 0) return 'me!';
	let result = '';
    if(Math.abs(x) == 3) result += 'great ';
    if(Math.abs(x) > 1) result += 'grand';
    result += x < 0 ? y == 'm' ? 'father' : 'mother' : y == 'm' ? 'son' : 'daughter';
    
    return result;
}

// Testing
console.log(generation(-3, "m"), "great grandfather", "3 generations before you, male...")
console.log(generation(1, "f"), "daughter", "1 generation after you, female...")
console.log(generation(-3, "f"), "great grandmother")
console.log(generation(-2, "m"), "grandfather")
console.log(generation(-2, "f"), "grandmother")
console.log(generation(-1, "m"), "father")
console.log(generation(-1, "f"), "mother")
console.log(generation(0, "f"), "me!")
console.log(generation(1, "m"), "son")
console.log(generation(1, "f"), "daughter")
console.log(generation(2, "m"), "grandson")
console.log(generation(2, "f"), "granddaughter")
console.log(generation(3, "m"), "great grandson")
console.log(generation(3, "f"), "great granddaughter")
console.log(generation(0, "m"), "me!")
