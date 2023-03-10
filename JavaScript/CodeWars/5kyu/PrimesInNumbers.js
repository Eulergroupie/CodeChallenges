/* Codecademy
 Given a positive number n > 1 find the prime factor decomposition of n.
 The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
 with the p(i) in increasing order and n(i) empty if n(i) is 1.

 Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

function isPrime(n) {
  if(n < 2) return false;
  for(let i = 2; i < Math.floor(n ** 0.5 + 1); i++)
    if(n % i == 0) return false;
  return true;
}

function primeFactors(n) {
  let m = n;
  let factors = [];
  if(m < 2) return factors;
  let i = 2;
  while(!isPrime(m)) {
    while(!isPrime(i))
      i++;
    if(m % i)
      i++;
    else {
      factors.push(i);
      m /= i;
    }
  }
  factors.push(m);
  return makeQuantities(factors);
}

function makeQuantities(list) {
  let base = list.shift();
  let exp = 1;
  let quantities = "";
  let expressed = false;
  while(list.length > 0) {
    if(base == list[0]){
      exp++;
      expressed = false;
    }
    else {
      quantities += makeQuantity(base, exp);
      expressed = true;     
      exp = 1;
    }
    base = list.shift();
    if(list.length == 0) expressed = false;
  }
  return expressed ? quantities : quantities + makeQuantity(base, exp); 
}

const makeQuantity = (base, exp) => exp > 1 ? `(${base}**${exp})` : `(${base})`;

console.log(primeFactors(2));
console.log(primeFactors(4));
console.log(primeFactors(6));
console.log(primeFactors(86240));
console.log(primeFactors(457380));
console.log(primeFactors(7775460));