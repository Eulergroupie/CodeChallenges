const {performance} = require('perf_hooks');
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

// First try too slow
function fizzBuzzSum(n) {
  let result = 0;
  for(let i = 3; i < n; i++) {
    if(i % 3 == 0 || i % 5 == 0)
      result += i;
  }
  return result;
} 

// Second try too slow 
function fizzBuzzSum1(n) {
  let result = 0;
  let count;
  for(count = 3; count < n; count += 3) 
      result += count;
  
  for(count = 5; count < n; count += 5) 
    if(count % 3)
      result += count;
  
  return result;
} 

// Third try too slow
function fizzBuzzSum2(n) {
  let count, initial, result;
  if(n > 99999990) {
    result = 2333332916666685;
    initial = 99999990;
  }
  else if(n > 90000000) {
    result = 1890000045000000;
    initial = 90000000;
  }
  else if(n > 75000000) {
    result = 1312500037500000;
    initial = 75000000;
  }
  else if(n > 60000000) {
    result = 840000030000000;
    initial = 60000000;
  }
  else if(n > 45000000) {
    result = 472500022500000;
    initial = 45000000;
  }
  else if(n > 30000000) {
    result = 210000015000000;
    initial = 30000000;
  }
  else if(n > 15000000) {
    result = 52500007500000;
    initial = 15000000
  }
  else if(n > 1500000) {
    result = 525000750000;
    initial = 1500000;
  }
  else if(n > 150000) {
    result = 5250075000;
    initial = 150000;
  }
  else if(n > 15000) {
    result = 52507500;
    initial = 15000
  } 
  else if(n > 1500) {
    result = 525750;
    initial = 1500;
  }
  else if(n > 150) {
    result = 5325;
    initial = 150;
  }
  else if(n > 15) {
    result = 60;
    initial = 15;
  }
  else {
    result = 0;
    initial = 0;
  } 
  for(count = initial + 3; count < n; count += 3) 
      result += count;
  
  for(count = initial + 5; count < n; count += 5) 
    if(count % 3)
      result += count;
  
  return result;
}

// Fourth try, numbers got too big
const sum = k => k / 2 * (k + 1);
function fizzBuzzSum3(n) {
  const div3 = Math.floor((n-1) / 3);
  const div5 = Math.floor((n-1) / 5);
  const div15 = Math.floor((n-1) / 15);
  
  return 3 * sum(div3) - 15 * sum(div15) + 5 * sum(div5);
}

// Fifth try
function Sum(k) {
  const K = BigInt(k);
  return K * (K + 1n) / 2n;
}

function fizzBuzzSum4(n) {
  const N = BigInt(n);
  const div3 = (N - 1n) / 3n;
  const div5 = (N - 1n) / 5n;
  const div15 = (N - 1n) / 15n;
  
  return (3n * Sum(div3) + 5n * Sum(div5) - 15n * Sum(div15)).toString();
}

// Testing
console.log(fizzBuzzSum(6));
console.log(fizzBuzzSum1(6));
console.log(fizzBuzzSum2(6));
console.log(fizzBuzzSum3(6));

console.log(fizzBuzzSum3(10) == 23 ? 'Pass' : 'Fail: n = 10');
console.log(fizzBuzzSum3(100) == 2318 ? 'Pass' : 'Fail: n = 100');
console.log(fizzBuzzSum3(15) == 45 ? 'Pass' : 'Fail: n = 15');
console.log(fizzBuzzSum3(16) == 60 ? 'Pass' : 'Fail: n = 16');
console.log(fizzBuzzSum3(150) == 5175 ? 'Pass' : 'Fail: n = 150');
//console.log(16, fizzBuzzSum(16) === fizzBuzzSum3(16));
//console.log(151, fizzBuzzSum(151) === fizzBuzzSum3(151));
//console.log(1501, fizzBuzzSum(1501) === fizzBuzzSum3(1501));
//console.log(15001, fizzBuzzSum(15001) === fizzBuzzSum(15001));
//console.log(150001, fizzBuzzSum(150001));
//console.log(1500001, fizzBuzzSum(1500001));
//console.log(15000001, fizzBuzzSum(15000001));
//console.log(30000001, fizzBuzzSum(30000001));
//console.log(45000001, fizzBuzzSum(45000001));
//console.log(60000001, fizzBuzzSum(60000001));
//console.log(75000001, fizzBuzzSum(75000001));
//console.log(90000001, fizzBuzzSum(90000001));
//console.log(99999991, fizzBuzzSum(99999991));
//console.log(150000001, fizzBuzzSum(150000001));
//console.log('15^1=' + 15, fizzBuzzSum(15));
//console.log('15^2=' + 15 ** 2, fizzBuzzSum(15 * 15));
//console.log('15^3=' + 15 ** 3, fizzBuzzSum(15 ** 3));
//console.log('15^4=' + 15 ** 4, fizzBuzzSum(15 ** 4));
//console.log('15^5=' + 15 ** 5, fizzBuzzSum(15 ** 5));
//console.log('15^6=' + 15 ** 6, fizzBuzzSum(15 ** 6));
//console.log('15^7=' + 15 ** 7, fizzBuzzSum(15 ** 7));

var startTime = performance.now();
console.log(fizzBuzzSum(100000000) === 2333333316666668 ? 'Pass' : 'Fail: n = 100000000');
var endTime = performance.now();
console.log(`Call to fizzBuzzSum(100000000) took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(fizzBuzzSum1(100000000) === 2333333316666668 ? 'Pass' : 'Fail: n = 100000000');
endTime = performance.now();
console.log(`Call to fizzBuzzSum1(100000000) took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(fizzBuzzSum2(100000000) === 2333333316666668 ? 'Pass' : 'Fail: n = 100000000');
endTime = performance.now();
console.log(`Call to fizzBuzzSum2(100000000) took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(fizzBuzzSum3(100000000) === 2333333316666668 ? 'Pass' : 'Fail: n = 100000000');
endTime = performance.now();
console.log(`Call to fizzBuzzSum3(100000000) took ${endTime - startTime} milliseconds`);

//console.log(fizzBuzzSum(1000000000));
//console.log(fizzBuzzSum1(1000000000));
console.log(fizzBuzzSum2(100000000), fizzBuzzSum3(100000000), fizzBuzzSum4(100000000));
console.log(fizzBuzzSum2(199999900), fizzBuzzSum3(199999900), fizzBuzzSum4(199999900));

console.log(1000000000, fizzBuzzSum(1000000000));
console.log(1000000000, fizzBuzzSum1(1000000000));
console.log(1000000000, fizzBuzzSum2(1000000000));
console.log(1000000000, fizzBuzzSum3(1000000000));
console.log(1000000000, fizzBuzzSum4(1000000000));
/*
for(let i = 1; i <= 100000; i++ ) {
  if(fizzBuzzSum2(i) !== fizzBuzzSum3(i)) {
    console.log(i);
    break;
  }
} */
console.log('done');