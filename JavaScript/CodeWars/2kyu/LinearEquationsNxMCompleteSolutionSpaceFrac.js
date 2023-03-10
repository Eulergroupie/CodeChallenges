/* Codewars
Your task is to solve N x M Systems of Linear Equations (LS) and to determine
the complete solution space.
 
Normally an endless amount of solutions exist, not only one or none like for
N x N. You have to handle N unkowns and M equations (N>=1, M>=1) and your
result has to display all numbers in 'reduced fraction representation' too
(perhaps first you can try my N x N kata). More about LS you can find here
or perhaps is already known.
 
First of all two easy examples:

1*x1 + 2*x2 + 0*x3 + 0*x4 = 7
0*x1 + 3*x2 + 4*x3 + 0*x4 = 8
0*x1 + 0*x2 + 5*x3 + 6*x4 = 9

SOL=(97/15; 4/15; 9/5; 0) + q1* (-16/5; 8/5; -6/5; 1)
 
You can see the dimension of solution space is 1 (it's a line) and q1 is any
real number, so we have endless solutions. You can insert every single solution
into every equation and all are correctly solved 
(1*97/15 + 2*4/15 + 0 + 0 =7 for q1=0).
 
Second example:

1*x1 + 5/2*x2 + 1/2*x3 + 0*x4 + 4*x5 = 1/8
0*x1 + 5*x2 + 2*x3 - 5/2*x4 + 6*x5 = 2

SOL=(-7/8; 2/5; 0; 0; 0) + q1 * (1/2; -2/5; 1; 0; 0) + 
    q2 * (-5/4; 1/2; 0; 1; 0) + q3 * (-1; -6/5; 0; 0; 1)
 
Here you can see the dimension of the solution is 3, q1, q2 and q3 are arbitrary
 real numbers. You can see all resulting numbers are in fraction representation
  (which is easier to read and handle for pupils/students), whatever the input was.
 
So what is missing?
 
You have to build a function "Solve(input)" (or "solve(input)") which takes the
equations as an input string and returns the solution as a string. "\n" (LF)
separates equations, " " (SPACE) separates the numbers (like 3 or 4/5, only the 
coefficients not the xi's), each last number per line is the number behind the = 
(the equation result, see examples). The result of the function is the solution
given as a string. All test examples will be syntactically correct, so you don't
need to take care of it.
 
So for the first example you have to call: Solve ("1 2 0 0 7\n0 3 4 0 8\n0 0 5 6 9").
The result of Solve is "SOL=(97/15; 4/15; 9/5; 0) + q1 * (-16/5; 8/5; -6/5; 1)",
exactly in this form/syntax. (97/15; 4/15; 9/5; 0) + q1 * (16/5; -8/5; 6/5; -1) is
ok too because it produces same solutions.
 
Spaces in your result are allowed, but not necessary. You have to use 'qi' 
(i from 1 to dimension) standing for the real numbers (the first starting solution-
point/vector has no q). If the dimension of the solution is greater than 1, the
order of the qi- vectors isn't important (but all indices should be in order,
that is, 'q1' first then 'q2', etc.). The fractions have to be reduced as
much as possible (but not 4/3 to 1 1/3). If there exists no solution you have to
respond with "SOL=NONE". If only one solution exists the response should contain
no 'qi'-vectors (e.g.,"SOL=(1; 2; 3)").
 
One last word to the tests:
The test function checks the syntax of your output, uses some rules for different
verifications and after all checks the given equations with your solution and
verifies that all equations are satisfied for arbitrary values of qi's. If all
things fit together, your solution is accepted! If not, you will get a hint 'why not'...
 
Hint: don't rely on floating-point numbers to solve this kata.
Use exact rational arithmetic.
 

Hope you have fun:-)!
*/
class Fraction {
  constructor(...args) {
    if(args.length == 0) {
      [this._num, this._den]= [1, 1];
    }
    if(args.length == 1) {
      if(typeof args[0] =='string' && isNaN(+args[0])) {
        [this._num, this._den] = args[0].split('/').map(x=>+x);
      }
      else if(typeof args[0] == 'string') {
        [this._num, this._den] = [+args[0], 1];
      }
      else if(typeof args[0] == 'number') {
        [this._num, this._den] = [args[0], 1];
      }
      else {
        [this._num, this._den] = [1, 1];
      }
    }
    else if(args.length == 2) {
      if(typeof +args[0] == 'number' && typeof +args[1] == 'number') {
        [this._num, this._den] = [+args[0], +args[1]];
      }
    }
    this.reduce();
  }

  toString() {
    if(this._den == 1) 
      return '' + this._num;
    else 
      return `${this._num}/${this._den}`;
  }

  get frac() {
    if(this._den == 1) 
      return '' + this._num;
    else 
      return `${this._num}/${this._den}`;
  }

  set frac(fraction) {
    if(fraction.length == 0) {
      [this._num, this._den]= [1, 1];
    }
    if(fraction.length == 1) {
      if(typeof fraction[0] =='string' && isNaN(+fraction[0])) {
        [this._num, this._den] = fraction[0].split('/').map(x=>+x);
      }
      else if(typeof fraction[0] == 'string') {
        [this._num, this._den] = [+fraction[0], 1];
      }
      else if(typeof fraction[0] == 'number') {
        [this._num, this._den] = [fraction[0], 1];
      }
      else {
        [this._num, this._den] = [1, 1];
      }
    }
    else if(fraction.length == 2) {
      if(typeof +fraction[0] == 'number' && typeof +fraction[1] == 'number') {
        [this._num, this._den] = [+fraction[0], +fraction[1]];
      }
    }
    this.reduce();
  }

  times(frac2) {
    let frac3 = new Fraction();
    if(typeof frac2 === 'object') {
      frac3 = frac2;
    }
    else {
      frac3 = new Fraction(frac2);
    }
    return new Fraction(this._num * frac3._num, this._den * frac3._den).reduce(); 
  }

  gcf (a, b) {
    return b === 0 ? a : this.gcf(b, a % b);
  }

  reduce() {
    let gcd = this.gcf(this._num, this._den);
    if(gcd !== 1) {
      this._num /= gcd;
      this._den /= gcd;
    }
    if(this._den < 0) {
      this._num = -this._num;
      this._den = -this._den;
    }
    return this;
  }

  lcm(a, b) {
    return a / this.gcf(a, b) * b;
  }

  plus(frac2) {
    let frac3 = new Fraction();
    let frac2b = new Fraction();  // bandaid to prevent input data corruption
    if(typeof frac2 !== 'object')
      frac2b = new Fraction(frac2);  
    else
      frac2b = frac2;
    if(this._den === frac2b.den) {
      frac3._num = this._num + frac2b._num;
      frac3._den = this._den;
    }
    else {
      let lcd = this.lcm(this._den, frac2b._den);
      frac3._num = lcd / this._den * this._num + lcd / frac2b._den * frac2b._num;
      frac3._den = lcd;
    }
    return frac3.reduce();
  }

  reciprocal() {
    let frac3 = new Fraction(this._den, this._num);
    return frac3.reduce();
  }

  negative() {
    let frac3 = new Fraction(-this._num, this._den);
    return frac3.reduce();
  }
}

function makeFracMatrix(m) {
  let fracMatrix = [];  // prepare the new matrix to return

  for(let row of m) {       // for each row of the matrix
    let tempRow = [];
    for(let col of row) {   // take each element and
      tempRow.push(new Fraction(col));  // push it into a new row as a fraction object
    }
    fracMatrix.push(tempRow);  // at end of each row, push to the new matrix
  }
  return fracMatrix;
}

// display a 2D array of objects like a stack of 1D arrays 
const displayMatrix = mtrx => mtrx.map(x=>console.log('[' + x.toString() + ']'));

function normalizeRow(row) {  // set leading element to one
  if(row.filter(x => x._num !== 0).length > 0)
    return row.map(x => x.times(row.find(x => x._num !== 0).reciprocal()));
  else
    return row;
}

function squash(hammer, nail) {  // use hammer to zero lead element of nail
  return hammer.map((x, i) => x.times(nail.find(x=>x._num!==0).negative()).plus(nail[i]));
}

function scrub(brush, ear) {  // use brush to zero element above lead element of brush
  return ear.map((x, i) => x.plus(brush[i].times(ear[brush.findIndex(x=>x._num !==0)]).negative()));
}

// produce an array that shows first nonzero index of each row of a matrix
const findLeads = m => m.map(x=>x.findIndex(x=>x._num!='0'));

// sort rows of a matrix according to nonzero lead element
function sortRows(m) {
  return m.sort(compareRows) //  a.findIndex(x=>x._num!='0') - b.findIndex(x=>x._num!='0') : 100);
}

function compareRows(a, b) {
  if(a.every(r=>r._num == '0'))
    return 1;
  if(b.every(r=>r._num == '0'))
    return -1;
  return a.findIndex(x=>x._num!='0') - b.findIndex(x=>x._num!='0');
}

/* BEWARE! This function modifies input array */
function gauss(m) { 
  for(let row = 0; row < m.length; row++) {   
    m = sortRows(m);
    m[row] = normalizeRow(m[row]);
    for(let nails = row + 1; nails < m.length; nails++) {
      if(m[nails][row]._num != '0') 
        m[nails] = squash(m[row], m[nails]);
    }   
  }
}

/* BEWARE! This function modifies input array */
function jordan(m) {
  for(let row = m.length-1; row > 0; row--) {
    for(let ear = row - 1; ear >= 0; ear--) {
      m[ear] = scrub(m[row], m[ear]);
    }
  }
  m = sortRows(m);
}

function solve(input) {
  const fMatrix = makeFracMatrix(input.split('\n').map(x=>[...x.split(' ')]));
  //displayMatrix(fMatrix);
  gauss(fMatrix);
  jordan(fMatrix);
  // check for no solution
  for(let row of fMatrix)
    if(row.slice(0,-1).every(x=>x._num == '0') && row[row.length-1] != '0')
      return "SOL=NONE";
  if(fMatrix.every(x=>x.every(y=>y._num == '0')))
    return "SOL=NONE";
  //console.log('RREF');
  //displayMatrix(fMatrix);
  return 'Not able to solve this yet';
}

// Testing
console.log(solve("1 2 0 0 7\n0 3 4 0 8\n0 0 5 6 9"));
  // "SOL=(97/15; 4/15; 9/5; 0) + q1 * (-16/5; 8/5; -6/5; 1)"
console.log(solve("1 5/2 1/2 0 4 1/8\n0 5 2 -5/2 6 2"));
  // "SOL=(-7/8; 2/5; 0; 0; 0) + q1 * (1/2; -2/5; 1; 0; 0) + 
  //      q2 * (-5/4; 1/2; 0; 1; 0) + q3 * (-1; -6/5; 0; 0; 1)"
console.log(solve("1 2 4 8\n1 3 6 9\n0 10 5 1"));
  // "SOL=(6; -1/5; 3/5)"
console.log(solve("1 2 3 8\n4 5 6 9\n7 8 9 1"));
  // "SOL=NONE"
console.log(solve('0 0 1 2 1\n1 2 1 3 1\n1 2 2 5 2'));
  // 
console.log(solve('0 0 1 2 1\n1 2 1 3 1\n1 2 2 5 3'));
  // 
console.log(solve('1 1 2 4 0\n-1 -1 -2 -4 0\n0 1 1 0 0\n0 -1 -1 0 0'));
  // 
console.log(solve('0 0 0\n0 0 0'));
  // 
console.log(solve('1 2 2\n1 2 2\n2 4 4'));
  // 
console.log(solve('1/20 -10/3 -10/9 -13\n-29 8 -27/4 0\n-26 -14 25 10/7'));
  // 