/* Codewars
How many ways can you make the sum of a number?
From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)#

In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:

4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1
Examples
Basic
sum(1) // 1
sum(2) // 2 -> 1+1 , 2
sum(3) // 3 -> 1+1+1, 1+2, 3
sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3
sum(6) // 11

sum(10) // 42
Explosive
sum(50) // 204226
sum(80) // 15796476
sum(100) // 190569292
*/
/*
function sum(n) {
  let p = [n];
  for(let s of p) {
    
  }
  return p;
}
*/

// return value of alternating sequence given index
// [0, 1, -1, 2, -2, 3, -3, 4, ... ,(n-1), -(n-1)]
const genAlt = n => n % 2 ? Math.ceil(n / 2) : -n / 2;

// alternating sequence generator
const genAltSeq = n => [...Array(n).keys()].map(x => genAlt(x));

// return value of generalized pentagonal sequence given an index
const genPent = (n, p = genAlt(n)) => p * (3 * p - 1) / 2;

// return an array that contains the generalized pentagonal sequence from 
// p(0) to p(n-1); Makes a vector from 0 to n-1 and maps it to generalized
// pentagonal converter.
const genPentSeq = n => [...Array(n).keys()].map(x => genPent(x));

// Testing Converters and Sequences
function testSequences(n) {
  console.log(`initial vector seq: ${[...Array(n).keys()]}`);
  console.log(`alternating seq: ${genAltSeq(n)}`);
  console.log(`gen Pent seq: ${genPentSeq(n)}`);
  return null;

/* Early tester
// Testing genPent()
for(let j = 0; j < 11; j++) 
  console.log(`n=${j}: `, genPent(j));
*/
}

testSequences(21);

var p = Array();  // memoization
function sum(n, s = 0) {
  if(n < 0) return 0;
  if(n == 0) {
    p[0] = 1;
    return 1;
  }
  let r = s;
  if(p[n]) return p[n];
  for(let i = 1; n >= genPent(i); i++) {
    const k = i-1;
    const sign = (-1) ** ((k * k - k) / 2);
    s += sign * sum(n - genPent(i), r);
  }
  p[n] = s;
  return s;
}
// Testing
const testSum = n => `permutation seq: ${[...Array(n).keys()].map(x => sum(x))}`;

console.log(testSum(21));
