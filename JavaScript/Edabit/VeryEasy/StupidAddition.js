/* Stupid Addition
Create a function that takes two parameters and, if both parameters are 
strings, add them as if they were integers or if the two parameters are 
integers, concatenate them.

Examples
stupidAddition(1, 2) ➞ "12"

stupidAddition("1", "2") ➞ 3

stupidAddition("1", 2) ➞ null
Notes
If the two parameters are different data types, return null.
All parameters will either be strings or integers. */
function stupidAddition(a, b) {
    if(typeof a === 'string' && typeof b === 'string') return +a + +b;
    if(typeof a === 'number' && typeof b === 'number') return '' + a + b;
    return null;
}

console.log(stupidAddition(1, 2));  //, "12", "Both parameters are integers, therefore they should be concatenated")
console.log(stupidAddition("1", "2"));  //, 3, "Both parameters are strings, therefore they should be added")
console.log(stupidAddition(1, "2"));  //, null, "The parameters are different data types, therefore None should be returned")
console.log(stupidAddition("1", 2));  //, null, "The parameters are different data types, therefore None should be returned")