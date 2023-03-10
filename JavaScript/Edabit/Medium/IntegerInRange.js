/*
Integer in Range?
Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.

Examples
intWithinBounds(3, 1, 9) ➞ true

intWithinBounds(6, 1, 6) ➞ false

intWithinBounds(4.5, 3, 8) ➞ false
Notes
The term "within bounds" means a number is considered equal or greater than a lower bound and lesser (but not equal) to an upper bound, (see example #2).
Bounds will be always given as integers.
*/

function intWithinBounds(n, lower, upper) {
	//return [...Array(upper-lower)].map((x, i, f) => f[x] = i + lower).includes(n);
    return [...Array(upper-lower).keys()].map(x => x + lower).includes(n);
}

// Testing
console.log(intWithinBounds(3, 1, 9), true)
console.log(intWithinBounds(6, 1, 6), false)
console.log(intWithinBounds(4.5, 3, 8), false)
console.log(intWithinBounds(-5, -10, 6), true)
console.log(intWithinBounds(4, 0, 0), false)
console.log(intWithinBounds(10, 9, 11), true)
console.log(intWithinBounds(6.3, 2, 6), false)
console.log(intWithinBounds(6.3, 2, 10), false)
console.log(intWithinBounds(9, 2, 3), false)
console.log(intWithinBounds(9, 9, 9), false)
console.log(intWithinBounds(-3, -5, -2), true)
console.log(intWithinBounds(-3, -5, -3), false)
console.log(intWithinBounds(-3, -10, 10), true)
console.log(intWithinBounds(0, -3, 3), true)
console.log(intWithinBounds(0, 0, 1), true)
console.log(intWithinBounds(7, 7, 12), true)
