/* Codewars
Consider a sequence u where u is defined as follows:

-The number u(0) = 1 is the first one in u.
-For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
-There are no other numbers in u.
Example:
u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and
 22 and so on...

Task:
Given parameter n the function dbl_linear (or dblLinear...) returns the 
element u(n) of the ordered sequence u (ordered with < so there are no 
  duplicates) .

Example:
dbl_linear(10) should return 22

Note:
Focus attention on efficiency
*/

function dblLinear(n) {
  let u =[1];
  let r = 0, s = 0, t = 0;
  let y = 0, z = 0;

  while(!u[n]) {
    y = 2 * u[r] + 1;
    z = 3 * u[s] + 1;
    if(y < z) {
      u.push(y);
      r++;
    }
    if(y == z) {
      u.push(y);
      r++;
      s++;
    }
    if(y > z) {
      u.push(z);
      s++;
    }
    t++;
  }
  return(u[n]);  // to return a particular value
  //return u;  // to return the whole sequence
}

// Testing
console.log(dblLinear(0));  // 1
console.log(dblLinear(1));  // 3
console.log(dblLinear(2));  // 4
console.log(dblLinear(3));  // 7
console.log(dblLinear(4));  // 9
console.log(dblLinear(5));  // 10
console.log(dblLinear(10));  // 22
console.log(dblLinear(20));  // 57
console.log(dblLinear(30));  // 91
console.log(dblLinear(50));  // 175
console.log(dblLinear(100));  // 447