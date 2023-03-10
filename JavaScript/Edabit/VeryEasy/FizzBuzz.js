/*
FizzBuzz Interview Question
Create a function that takes a number as an argument and returns "Fizz", "Buzz"
 or "FizzBuzz".

If the number is a multiple of 3 the output should be "Fizz".
If the number given is a multiple of 5, the output should be "Buzz".
If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
If the number is not a multiple of either 3 or 5, the number should be output
 on its own as shown in the examples below.
The output should always be a string even if it is not a multiple of 3 or 5.
Examples
FizzBuzz(3) ➞ "Fizz"

FizzBuzz(5) ➞ "Buzz"

FizzBuzz(15) ➞ "FizzBuzz"

FizzBuzz(4) ➞ "4"
Notes
Try to be precise with how you spell things and where you put the capital letters.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/

//let FizzBuzz = n => !(n % 15) ? 'FizzBuzz' : !(n % 3) ? 'Fizz' : !(n % 5) ? 'Buzz' : n + ''
//let FizzBuzz = n => n % 15 ? n % 5 ? n % 3 ? n + '' : 'Fizz' : 'Buzz' : 'FizzBuzz'
const FizzBuzz = n => (n % 3 ? '' : 'Fizz') + (n % 5 ? '' : 'Buzz') || '' + n

// Testing
console.log(FizzBuzz(3), "Fizz", "You gave " + FizzBuzz(3) + " and Fizz was needed")
console.log(FizzBuzz(5), "Buzz", "You gave " + FizzBuzz(5) + " and Buzz was needed")
console.log(FizzBuzz(15), "FizzBuzz", "You gave " + FizzBuzz(15) + " and FizzBuzz was needed")
console.log(FizzBuzz(10), "Buzz", "You gave " + FizzBuzz(10) + " and Buzz was needed")
console.log(FizzBuzz(98), "98", "You gave " + FizzBuzz(98) + " and 98 was needed")