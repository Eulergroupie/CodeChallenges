/* Edabit
*******************************************************************************
ES6: Destructuring Arrays I
You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]

console.log(a) // outputs 1
console.log(b) // outputs 2
With ES6, you can assign variables from arrays in a much more succinct way. 
Create variables a and b from the given array using the ES6 destructuring 
assignment syntax, where a === 1 and b === 2.

Notes
https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
*/

const arr1 = [1, 2, 3, 4, 5, 6];
const [a, b] = arr1;  // destructuring assignment, first two

/********************************************************************************
ES6: Destructuring Arrays II
You can assign variables from nested arrays like this:

const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

let trans1 = arr[0]
let trans2 = arr[1]
let trans3 = arr[2][0]
let trans4 = arr[2][1][0]

console.log(trans1) // outputs "cars"
console.log(trans2) // outputs "planes"
console.log(trans3) // outputs "trains"
console.log(trans4) // outputs "motorcycles"
With ES6, you can assign variables from arrays in a much more succint way.

Notes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
*/
const arr2 = ["cars", "planes", ["trains", ["motorcycles"]]];

// Fix the following using es6 destructuring
// Only edit what's inside of [ trans1, trans2, trans3, trans4 ]
let [ trans1, trans2, [trans3, [trans4]]] = arr2;


console.log(trans1); // should output "cars"
console.log(trans2); // should output "planes"
console.log(trans3); // should output "trains"
console.log(trans4); // should output "motorcycles"



/******************************************************************************** 
ES6:Destructuring Arrays III

You can assign variables from arrays with destructuring like this:

const arr = ["eyes", "nose", "lips", "ears"]
let [eyes, nose, lips, ears] = arr
But you can also skip over items in the array being destructured.

Notes
Check the Resources tab for more examples.
*/

// DO NOT change arr
// DO NOT USE var [lips] = arr[2]
// "eyes", "nose", and "ears" should not be assigned to anything

const arr3 = ["eyes", "nose", "lips", "ears"];
var [,,lips] = arr3;  // destructuring assignment, skipping elements

/******************************************************************************
ES6:Destructuring Arrays IV
There is an easy way to assign to array values to the nth index by using the 
Rest element.

var [head, tail] = [1, 2, 3, 4]

console.log(head) // outputs  1
console.log(tail) // outputs 2
But how could I make tail = [2, 3, 4] instead of tail = 2?

Notes
https://dev.to/sarah_chima/destructuring-assignment---arrays-16f#:~:text=Destructuring%20is%20a%20JavaScript%20expression,and%20assign%20them%20to%20variables.&text=ES6%20destucturing%20assignment%20makes%20it%20easier%20to%20extract%20this%20data.
*/

var [head, ...tail] = [1, 2, 3, 4];