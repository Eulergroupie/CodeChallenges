/* Edabit - Minimal I: Boolean Then Boolean
In line with the spirit of the series, we can summarize the general rules of
 minimalist code in two simple principles:

Keep your code clean and readable.
While not violating the first principle: get rid of everything superfluous.
In order to achieve this you should:

Deepen your knowledge of logics.
Deepen your understanding of the particular language you're coding with.
I would also add: observe and learn from the pros. Make a habit of checking the
 Solutions tab after solving a challenge on Edabit. There is absolutely nothing
  wrong in assimilating features of someone else's coding style, especially if 
  yours is not yet fully developed.

Goal
In the Code tab you will find a code that is missing a single character in 
order to pass the tests. However, YOUR GOAL is to submit a function as
 minimalist as possible. Use the tips in the Tips section down below.

Write a function that returns true if the given integer is even, and false if 
it's odd.

Tips
Using an if statement in order to return boolean or to set a variable to a 
boolean is redundant.

A function that returns true if a person's age is 18 or greater and false 
otherwise, could be written as:

function legalAge(age) {
  if(age >= 18) {
    return true
  }
  else {
    return false
  }
}
Notice that age >= 18 will already give us a boolean (true or false). This 
means that the function can be written in a much simpler and cleaner way:

function legalAge(age) {
  return age >= 18
}
Notes
This is an open series: there isn't a definite list of features for the 
challenges. Please, do not hesitate to leave your suggestions in the Comment
 tab.
Readability is indeed a subjective concept. Let's discuss it! Feel free to 
leave your opinion in the Comments tab.
*/

const isEven = n => !(n % 2);

// Testing
console.log('Testing "isEven()"');
console.log(isEven(2) === true ? 'Pass' : 'Fail');  // true
console.log(isEven(3) === false ? 'Pass' : 'Fail');  // false
console.log(isEven(10) === true ? 'Pass' : 'Fail');  // true
console.log(isEven(31) === false ? 'Pass' : 'Fail');  // false
console.log(isEven(666) === true ? 'Pass' : 'Fail');  // true
console.log(isEven(777) === false ? 'Pass' : 'Fail');  // false
console.log(isEven(3482034) === true ? 'Pass' : 'Fail');  // true
console.log(isEven(3482035) === false ? 'Pass' : 'Fail');  // false
console.log('');

/* Edabit Mininal II: Boolean Redundancy
Minimal II: Boolean Redundancy
Check the principles of minimalist code in the intro to the first challenge.

In the Code tab you will find a code that is missing a single character in 
order to pass the tests. However, your goal is to submit a function as 
minimalist as possible. Use the tips in the tips section down below.

Write a function that returns the string "even" if the given integer is even,
 and the string "odd" if it's odd.

Tips
Converting a boolean, or something that will ultimately be interpreted as a 
boolean, into a boolean is redundant.

For example, the code:

let bool = Boolean(x < 4)
return bool === true
Is equivalent to simply:

return x < 4
A comparison with <, <=, ===, !==, >=, > will always result in a boolean, 
therefore using the function Boolean() is totally unnecessary.
bool === true is redundant, as it will always return bool.
To obtain the opposite of bool we could use bool === false. However, a much 
cleaner way of doing this is simply !bool.
While preserving readability, avoid declaring unnecessary variables.
Notes
This is an open series: there isn't a definite list of features for the 
challenges. Please, do not hesitate to leave your suggestions in Comments.
Readability is indeed a subjective concept. Let's discuss it! Feel free to 
leave your opinion in Comments.
*/

const parity = n => n % 2 ? 'odd' : 'even';

// Testing
console.log('Testing "parity()"');
console.log(parity(2) === 'even' ? 'Pass' : 'Fail');  // 'even'
console.log(parity(3) === 'odd' ? 'Pass' : 'Fail');  // 'odd'
console.log('');

/* Edabit Minimal IV: if-else if-else Inferno
In the Code tab you will find a code that is missing a single character in 
order to pass the tests. However, your goal is to submit a function as 
minimalist as possible. Use the tips in the tips section below.

Write a function that returns the boolean true if the given number is zero, the
 string "positive" if the number is greater than zero or the string "negative" 
 if it's smaller than zero.

Tips
Executing a return will effectively end your function.

For example, the code:

function compare_to_100 (x) {
  if (x > 100) {
      return "greater"
  } else if (x < 100) {
        return "smaller"
    } else {
      return "equal"
    }
}
Can be simplified to:

function compare_to_100 (x) {
    if (x > 100) return "greater"
    if (x < 100) return "smaller"
    return "equal"
}
If x is greater than 100, JavaScript will not execute the code past the first 
return.
If x is smaller than 100, JavaScript will not execute the code inside the first 
if statement or past the second return.
If x is equal to 100, JavaScript will not execute the code inside the two if 
statements.
This can only be used if you have a return inside your if statement.
Notes
This is an open series: there isn't a definite list of features for the 
challenges. Please, do not hesitate to leave your suggestions in the Comments.
Readability is indeed a subjective concept. Let's discuss it! Feel free to 
leave your opinion in the Comments.
*/

const equilibrium = x => x > 0 ? 'positive' : x < 0 ? 'negative' : true;

// Testing
console.log('Testing "equilibrium()"');
console.log(equilibrium(0.000) === true ? 'Pass' : 'Fail');  // true
console.log(equilibrium(0) === true ? 'Pass' : 'Fail');  // true
console.log(equilibrium(3) === 'positive' ? 'Pass' : 'Fail');  // 'positive'
console.log(equilibrium(66) === 'positive' ? 'Pass' : 'Fail');  // 'positive'
console.log(equilibrium(5425) === 'positive' ? 'Pass' : 'Fail');  // 'positive'
console.log(equilibrium(1111.1) === 'positive' ? 'Pass' : 'Fail');  // 'positive'
console.log(equilibrium(0.0001) === 'positive' ? 'Pass' : 'Fail');  // 'positive'
console.log(equilibrium(-3) === 'negative' ? 'Pass' : 'Fail');  // 'negative'
console.log(equilibrium(-66) === 'negative' ? 'Pass' : 'Fail');  // 'negative'
console.log(equilibrium(-5425) === 'negative' ? 'Pass' : 'Fail');  // 'negative'
console.log(equilibrium(-1111.1) === 'negative' ? 'Pass' : 'Fail');  // 'negative'
console.log(equilibrium(-0.0001) === 'negative' ? 'Pass' : 'Fail');  // 'negative'
console.log('');

/* Edabit Minimal V
Check the principles of minimalist code in the intro to the first challenge.

In the Code tab you will find a code that has a missplaced character in order
 to pass the tests. However, your goal is to submit a function as minimalist 
 as possible.

Write a function that returns the boolean true if the given arrays do not share
 any numbers, and false otherwise.

Notes
This challenge is translated from Alessandro Manicone's Python's 
"Minimal Series". The following are his comments and link to the series:

This is an open series: there isn't a definite list of features for the 
challenges. Please, do not hesitate to leave your suggestions in the Comments.
Readability is indeed a subjective concept. Let's discuss it! Feel free to 
leave your opinion in the Comments.
You can find all the exercises in this series over here.
*/

//const notShare = (a, b) => a.every(x => b.every(y => y !=x));
const notShare = (a, b) => a.every(x => !b.includes(x));

// Testing
console.log('Testing "notShare()"');
console.log(notShare([1, 2, 3], [4, 5, 6]) === true ? 'Pass' : 'Fail');  // true
console.log(notShare([1, 2, 3], [3, 4, 5]) === false ? 'Pass' : 'Fail');  // false
console.log(notShare([3, 3, 3], [4, 5, 6]) === true ? 'Pass' : 'Fail');  // true
console.log(notShare([3, 3, 3], [1, 2, 3]) === false ? 'Pass' : 'Fail');  // false
console.log(notShare([1, 2, 3, 4, 5, 6], [7]) === true ? 'Pass' : 'Fail');  // true
console.log(notShare([1, 2, 3, 4, 5, 6], [6]) === false ? 'Pass' : 'Fail');  // false
console.log(notShare([1], [2, 3, 4, 5, 6, 7]) === true ? 'Pass' : 'Fail');  // true
console.log(notShare([1], [1, 2, 3, 4, 5, 6]) === false ? 'Pass' : 'Fail');  // false
console.log('')

/* Edabit Minimal IX: This or That
Check the principles of minimalist code in the intro to the first challenge.

In the Code tab you will find a code that is missing a single character in 
order to pass the tests. However, your goal is to submit a function as 
minimalist as possible. Use the tips in the tips section below.

Write a function that returns the first truthy argument passed to the function.
 If all arguments are falsy, return the string "not found". The function will 
 be called with a minimum of one and a maximum of four arguments: a, b, c, d.

Tips
The logical OR operator || can be used to assign or return the first truthy 
value among two or more elements. If no truthy value is found, the last element
 will be returned.

For example, the code:

function oneOfThese(a, b, c) {
    if (a) return a;
    else if (b) return b;
    else return c;
}       
Can be simplified to:

const oneOfThese = (a, b, c) => a || b || c;
Bonus
Once a truthy value is found, the rest of the elements will not be checked. This
 can be used to define a sort of default value that will be returned if all of 
 the previous elements happen to be false or empty:

Notes
This challenge is translated from Alessandro Manicone's "Minimal Series". The 
following are his comments and link to the series:

This is an open series: there isn't a definite list of features for the 
challenges. Please, do not hesitate to leave your suggestions in the Comments.
Readability is indeed a subjective concept. Let's discuss it! Feel free to leave
 your opinion in the Comments.
You can find all the exercises in this series over here.
*/
/*
function firstOne(a, b = 0, c = 0, d = 0) {
	if (a)
		return a;
	else if (b)
		return b;
  else if (c)
		return c;
  else if (d)
		return d;
	else
		return "not found";
}*/
//const firstOne = (a, b = 0, c = 0, d = 0) => [a,b,c,d].find(x => x) || 'not found';
const firstOne = (...a) => a.find(Boolean) || 'not found';

// Testing
console.log('Testing "firstOne()"');
console.log(firstOne('Edabit') === 'Edabit' ? 'Pass' : 'Fail');  // 'Edabit'
console.log(firstOne(false) === 'not found' ? 'Pass' : 'Fail');  // 'not found'
console.log(firstOne('', 'Pikachu') === 'Pikachu' ? 'Pass' : 'Fail');  // 'Pikachu'
console.log(firstOne('', 0) === 'not found' ? 'Pass' : 'Fail');  // 'not found'
console.log(firstOne(0, 20, '') === 20 ? 'Pass' : 'Fail');  // 20
console.log(firstOne(0, 0, '') === 'not found' ? 'Pass' : 'Fail');  // 'not found'
console.log(firstOne('', 0, true, false) === true ? 'Pass' : 'Fail');  // true
console.log(firstOne('', 0, false, false) === 'not found' ? 'Pass' : 'Fail');  // 'not found'
