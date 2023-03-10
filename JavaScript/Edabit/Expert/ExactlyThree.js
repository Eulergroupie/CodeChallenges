/*
Exactly Three
You are given a number n. Determine whether n has exactly 3 divisors or not.

Examples
isExactlyThree(4) ➞ true
// 4 has only 3 divisors: 1, 2 and 4

isExactlyThree(12) ➞ false
// 12 has 6 divisors: 1, 2, 3, 4, 6, 12

isExactlyThree(25) ➞ true
// 25 has only 3 divisors: 1, 5, 25
Notes
1 ≤ n ≤ 10^12
*/

function isPrime(n) {
  if(n < 2) return false;
  for(let i = 2; i <= n ** 0.5; i++) 
    if(n % i == 0) return false;
  return true;
}

const isExactlyThree = n => n ** 0.5 % 1 == 0 && isPrime(n ** 0.5)

// Testing
console.log(isExactlyThree(4), true)
console.log(isExactlyThree(12), false)
console.log(isExactlyThree(25), true)
console.log(isExactlyThree(121), true)
console.log(isExactlyThree(48), false)
console.log(isExactlyThree(1), false)
console.log(isExactlyThree(81), false)
console.log(isExactlyThree(1521), false)
console.log(isExactlyThree(225), false)
console.log(isExactlyThree(27550356289), true)  
console.log(isExactlyThree(25235235235), false)
console.log(isExactlyThree(10), false)
console.log(isExactlyThree(64), false)
console.log(isExactlyThree(9), true)
console.log(isExactlyThree(144), false)
console.log(isExactlyThree(3), false)
console.log(isExactlyThree(2), false)
console.log(isExactlyThree(42351351), false)
console.log(isExactlyThree(999966000289), true)
console.log(isExactlyThree(20152357681), true)
console.log(isExactlyThree(531625249), true)
console.log(isExactlyThree(264306808866), false)
console.log(isExactlyThree(975179493674), false)
console.log(isExactlyThree(49), true)
console.log(isExactlyThree(165983), false)
