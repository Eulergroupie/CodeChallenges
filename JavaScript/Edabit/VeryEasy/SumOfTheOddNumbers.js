/* Edabit
Create a function which returns the total of all odd numbers up to and 
including n. n will be given as an odd number.

Examples
addOddToN(5) ➞ 9
// 1 + 3 + 5 = 9

addOddToN(13) ➞ 49

addOddToN(47) ➞ 576
Notes
Curiously, the answers are all square numbers!
*/

addOddToN=n=>++n**2/4  // shortest
addOddToNSequence=n=>[...Array(n).keys()].map(k=>addOddToN(2*k+1));

//const addOddToN = n => [...Array(n + 1).keys()].slice(1).reduce((s, x)=>s + x % 2 * x, 0);  

/*
const addOddToN = (n, sum = 0) => {
  for(let i = 1; i < n + 1; i += 2) 
    sum += i;
  return sum;
}
*/

//const addOddToN = n => [...Array(n).keys()].map(x=>x+1).filter(x=>x%2).reduce((s,x)=>s+x,0);

// Testing
console.log(addOddToN(5));  // 9
console.log(addOddToN(13));  // 49
console.log(addOddToN(47));  // 576

console.log(addOddToNSequence(30));  // array of squares for 1 through 30