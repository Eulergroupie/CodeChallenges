/* Codewars
Given an array of positive or negative integers

I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has
to be given as a string in Java, C#, C, C++ and as an array of arrays in other
languages.

Example:
I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the 
result.

Notes:

It can happen that a sum is 0 if some numbers are negative!
Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the 
result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0]
in the result amongst others.
*/

function isPrime(n) {
  if(n < 2) return false;
  for(let k = 2; k < Math.floor(n ** 0.5 + 1); k++)
    if(n % k == 0) return false;
  return true;
}

function primeFactorize(n) {
  let facts = [], s = n;
  if(s < 2) return facts;
  let c = 2;
  while(!isPrime(s)) {
    while(!isPrime(c))
      c++;
    if(s % c)
      c++;
    else {
      facts.push(c);
      s /= c;
    }
  }
  facts.push(s);
  return facts;  // array of prime factors
}

function sumOfDivided(I) {
  let s = new Set();
  let l = [];
  for(let i of I)   // for each item i in the list I
    primeFactorize(Math.abs(i)).map(x=>s.add(x));  // add the factors of i to set s
     
  let r = Array.from(s).sort((a,b)=>a-b);  
  for(let f of r) {  // for each factor in set r
    let t = 0;       // initialize a counter
    for(let i of I) {  // for each item i in list I
      if(i % f == 0) {  // if this f is a factor for this i
        t += i;       // add this item to the sum
      }
    }
    l.push([f, t]);  // save the factor and sum
  }
  return l;
}

const displayArray = I => { for(let i of I) console.log(i); }
// Testing
// displayArray([[2, 12], [3, 27], [5, 15]]);
// console.log(primeFactorize(12));
console.log(displayArray(sumOfDivided([12, 15])));  // [[2, 12], [3, 27], [5, 15]]
console.log(displayArray(sumOfDivided([15, 21, 24, 30, 45])));
console.log(displayArray(sumOfDivided([-29804, -4209, -28265, -72769, -31744])));