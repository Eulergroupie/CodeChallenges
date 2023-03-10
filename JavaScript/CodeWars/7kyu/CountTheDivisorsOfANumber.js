/* Codewars
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/

function getDivisors(n){
  let r = [];
  for(let i = 1; i <= (n/2); i++) 
    if(n % i == 0) 
      r.push(i);
  r.push(n);
  return r;
}

function getDivisorsCnt(n){
  let r = 0;
  for(let i = 1; i <= (n/2); i++) 
    if(n % i == 0) 
      r++;
  return ++r;
}

// Testing
console.log(getDivisors(1));
console.log(getDivisorsCnt(1));  // 1
console.log(getDivisors(4));
console.log(getDivisorsCnt(4));  // 3
console.log(getDivisors(5));
console.log(getDivisorsCnt(5));  // 2
console.log(getDivisors(10));
console.log(getDivisorsCnt(10));  // 4
console.log(getDivisors(11));
console.log(getDivisorsCnt(11));  // 2
console.log(getDivisors(12));
console.log(getDivisorsCnt(12));  // 6
console.log(getDivisors(30));
console.log(getDivisorsCnt(30));  // 8
console.log(getDivisors(54));
console.log(getDivisorsCnt(54));  // 8