/* Codewars
The purpose of this kata is to write a program that can do some algebra. 
Write a function expand that takes in an expression with a single, one 
character variable, and expands it. The expression is in the form (ax+b)^n
 where a and b are integers which may be positive or negative, x is any 
 single character variable, and n is a natural number. If a = 1, no 
 coefficient will be placed in front of the variable. If a = -1, a "-" will
  be placed in front of the variable.

The expanded form should be returned as a string in the 
form ax^b+cx^d+ex^f... where a, c, and e are the coefficients of the term,
 x is the original one character variable that was passed in the original
 expression and b, d, and f, are the powers that x is being raised to in 
 each term and are in decreasing order. If the coefficient of a term is zero,
 the term should not be included. If the coefficient of a term is one, the
 coefficient should not be included. If the coefficient of a term is -1, only
 the "-" should be included. If the power of the term is 0, only the 
 coefficient should be included. If the power of the term is 1, the caret 
 and power should be excluded.

Examples:
expand("(x+1)^2");      // returns "x^2+2x+1"
expand("(p-1)^3");      // returns "p^3-3p^2+3p-1"
expand("(2f+4)^6");     // returns "64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096"
expand("(-2a-4)^0");    // returns "1"
expand("(-12t+43)^2");  // returns "144t^2-1032t+1849"
expand("(r+0)^203");    // returns "r^203"
expand("(-x-1)^2");     // returns "x^2+2x+1"
*/

function parseBinomial(s) {
  let [binomial, n] = s.split(')^');  
  binomial = binomial.slice(1);       // cut off initial '('

  let letter = binomial.match(/[a-z]/);
  let coefficients = binomial.split(/[a-z]/g);
  
  let a;                        // fix split artifacts and assign a
  if(coefficients[0] == '-') {
    a = -1;
  }
  else if(coefficients[0] == '') {
    a = 1;
  }
  else {
    a = Number(coefficients[0]);
  }
  // variable, a, b, n  for: (ax+b)^n
  return [letter[0], a, Number(coefficients[1]), Number(n)];
}

function expand(s) {
  let result = ''
  let [variable, a, b, n] = parseBinomial(s);
  if(n == 0) return '1';

  // make binomial coefficient pattern from binomial theorem:
  // sum from k=0 to n for (a^(n-k))x(b^k)x(n choose k)
  let coeff = [...Array(n+1).keys()].sort((a,b)=>b-a).map((x,k)=>
    Math.round(a**x * b**k * fact(n)/(fact(x)*fact(k))));
  
  for(let i = 0; i <= n; i++) {
    if(i == 0 && coeff[i] == -1)  // lead coefficient signage
      result += '-';
    if(i > 0 && coeff[i] > 0)     // positive non-lead signage
      result += '+';

    if(n == i)               // last term is number only
      result += `${coeff[i]}`;   
    else if(Math.abs(coeff[i]) == 1 || isNaN(coeff[i]))  // lead 1's don't display
      result +=`${variable}`;
    else 
      result +=`${coeff[i]}${variable}`;  // go with coefficient and variable

    if(b == 0){                 // special monomial case
      return result += `^${n}`;
    }

    if(n-i > 1) {           // display powers above 1
      result += `^${n-i}`;
    }   
  }
  return result;
}

const fact = n => n<2 ? 1: n * fact(n-1);

// Testing
console.log((expand('(x+1)^2')).localeCompare('x^2+2x+1') == 0 ? "Pass" : "Fail: "+expand('(x+1)^2')); 
console.log((expand("(p-1)^3")).localeCompare('p^3-3p^2+3p-1')==0?'Pass':'Fail: '+expand("(p-1)^3"));
console.log((expand("(2f+4)^6")).localeCompare('64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096')==0?'Pass':'Fail: '+expand("(2f+4)^6")); 
console.log((expand("(-2a-4)^0")).localeCompare('1')==0?'Pass':'Fail: '+expand('(-2a-4)^0'));
console.log((expand('(-2n-1)^3')).localeCompare('-8n^3-12n^2-6n-1')==0?'Pass':'Fail: '+expand('(-2n-1)^3'));
console.log((expand('(-x-1)^5')).localeCompare('-x^5-5x^4-10x^3-10x^2-5x-1')==0?'Pass':'Fail: '+expand('(-x-1)^5')); 
console.log((expand("(-12t+43)^2")).localeCompare('144t^2-1032t+1849')==0?'Pass':'Fail: '+expand('(-12t+43)^2'));
console.log((expand("(r+0)^203")).localeCompare('r^203')==0?'Pass':'Fail: '+expand('(r+0)^203'));
console.log((expand('(-x+1)^2')).localeCompare('x^2-2x+1')==0?'Pass':'Fail: '+expand('(-x+1)^2')); 
console.log((expand("(-x+2)^3")).localeCompare('-x^3+6x^2-12x+8')==0?'Pass':'Fail: '+expand('(-x+2)^3')); 
console.log((expand("(-x-1)^2")).localeCompare('x^2+2x+1')==0?'Pass':'Fail: '+expand("(-x-1)^2"));    
console.log((expand("(x-2)^3")).localeCompare('x^3-6x^2+12x-8')==0?'Pass':'Fail: '+expand("(x-2)^3")); 
console.log((expand("(9x-0)^2")).localeCompare('81x^2')==0?'Pass':'Fail: '+expand("(9x-0)^2")); 