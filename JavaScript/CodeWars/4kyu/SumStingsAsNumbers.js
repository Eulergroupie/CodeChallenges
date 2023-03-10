/* Codewars
Given the string representations of two integers, return the string 
 representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the
 ten numerals "0" to "9".
*/

function sumStrings(a, b) {
  let result = "";
  if(a.length > b.length) b = b.padStart(a.length, '0');
  else if(b.length > a.length) a = a.padStart(b.length, '0');
  let x = a.split('');
  let y = b.split('');
  let c = 0;
  while(x.length) {
    let temp = c + +x.pop() + +y.pop();  // last digits + carry
    result = temp % 10 + result;
    c = Math.floor(temp / 10);
  }
  if(c > 0) result = c + result;  // final carry
  while(result[0] == '0') result = result.slice(1);  // remove lead zeroes
  return result;
}

// Testing
console.log(sumStrings('1', '2'));  // '3'
console.log(sumStrings('5', '95'));  // '100'
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
console.log(sumStrings('00103', '08567'));  // '8670'
// '712577413488402631964821329'