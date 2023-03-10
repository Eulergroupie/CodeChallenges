/* Codewars
The rgb function is incomplete. Complete it so that passing in RGB decimal
 values will result in a hexadecimal representation being returned. Valid 
 decimal values for RGB are 0 - 255. Any values that fall out of that range
 must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3
 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/

function rgb(r, g, b) {
  let result = '';
  for(let color of [r, g, b])
    result += hexDabble(trim(color));
  return result;
}

const trim = x => x < 0 ? 0 : x > 255 ? 255 : x;

const hexDabble = x =>`${hexLabel(Math.floor(x / 16) % 16)}${hexLabel(x % 16)}`;

const hexLabel = x => x > 9 ? String.fromCharCode(x + 55) : `${x}`;

// Testing
console.log(rgb(0, 0, 0));  // '000000'
console.log(rgb(0, 0, -20));  // '000000'
console.log(rgb(300, 255, 255));  // 'FFFFFF'
console.log(rgb(173, 255, 47));  // 'ADFF2F'
