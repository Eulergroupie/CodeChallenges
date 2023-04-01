/* Ascending Consecutive Numbers by Helen Yu
Write a function that returns true if a string consists of ascending or 
ascending AND consecutive numbers.

Examples
ascending("232425") ➞ true
// Consecutive numbers 23, 24, 25

ascending("2324256") ➞ false
// No matter how this string is divided, the numbers are not consecutive.

ascending("444445") ➞ true
// Consecutive numbers 444 and 445.
Notes
A number can consist of any number of digits, so long as the numbers are 
adjacent to each other, and the string has at least two of them.*/
const check = r => {
    for(let i = 1; i < r.length; i++) 
        if(r[i] !== r[i-1] + 1) 
            return false;   
    return true;
}
function ascending(str) {
    for(let i = 1; i <= str.length / 2; i++)
        if(str.length % i == 0)
            if(check(str.match(new RegExp(`.{${i}}`, 'g')).map(n=>+n)))
                return true;
    return false;
}

console.log(ascending("123456789"), true)
console.log(ascending("232425"), true)
console.log(ascending("444445"), true)
console.log(ascending("1234567"), true)
console.log(ascending("123412351236"), true)
console.log(ascending("57585960616263"), true)
console.log(ascending("500001500002500003"), true)
console.log(ascending("919920921"), true)

console.log(ascending("2324256"), false)
console.log(ascending("1235"), false)
console.log(ascending("121316"), false)
console.log(ascending("12131213"), false)
console.log(ascending("54321"), false)
console.log(ascending("56555453"), false)
console.log(ascending("90090190290"), false)
console.log(ascending("35236237238"), false)
