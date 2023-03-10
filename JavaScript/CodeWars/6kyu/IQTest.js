/* Codewars
 Bob is preparing to pass IQ test. The most frequent task in this test is to
 find out which one of the given numbers differs from the others. Bob observed
 that one number usually differs from the others in evenness. Help Bob — to 
 check his answers, he needs a program that among the given numbers finds one 
  hat is different in evenness, and return a position of this number.

Note: Keep in mind that your task is to help Bob solve a real IQ test, which means
 indexes of the elements start from 1 (not 0)

Examples:
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the 
numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the 
numbers are odd
*/

function iqTest(numbers){
  const num = numbers.split(' ');
  let oddCount = 0;
  let evenCount = 0;
  for(let i = 0; i < num.length; i++)
    (num[i] & 1) ? oddCount++ : evenCount++;
  if(oddCount > evenCount) {    
    for(i = 0; i < num.length; i++) {
      if(!(num[i] & 1))
        return i + 1;
    }
  }
  else {
    for(i = 0; i < num.length; i++) {
      if(num[i] & 1)
        return i + 1;
    }
  }
}

// Testing
console.log(iqTest("2 4 7 8 10"));  // 3
console.log(iqTest("1 2 2"));  // 1
console.log(iqTest("5 3 2"));  // 3