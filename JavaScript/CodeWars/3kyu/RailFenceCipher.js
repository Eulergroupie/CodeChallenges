/* Codewars
Create two functions to encode and then decode a string using the Rail Fence 
Cipher. This cipher is used to encode a string by placing each character 
successively in a diagonal along a set of "rails". First start off moving 
diagonally and down. When you reach the bottom, reverse direction and move 
diagonally and up until you reach the top rail. Continue until you reach the 
end of the string. Each "rail" is then read left to right to derive the 
encoded string.

For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in 
a three rail system as follows:

W       E       C       R       L       T       E
  E   R   D   S   O   E   E   F   E   A   O   C  
    A       I       V       D       E       N    
The encoded string would be:

WECRLTEERDSOEEFEAOCAIVDEN
Write a function/method that takes 2 arguments, a string and the number of 
rails, and returns the ENCODED string.

Write a second function/method that takes 2 arguments, an encoded string and
 the number of rails, and returns the DECODED string.

For both encoding and decoding, assume number of rails >= 2 and that passing
 an empty string will return an empty string.

Note that the example above excludes the punctuation and spaces just for
 simplicity. There are, however, tests that include punctuation. Don't filter
  out punctuation as they are a part of the string.
*/
function encodeRailFenceCipher(txt, rails) {
  let banner = [...Array(rails)].map(x=>[...Array(txt.length)].fill(''));
  let i = 0;
  let countUp = true;
  for(let c = 0; c < txt.length; c++) {
    banner[i][c] = txt[c];  // make rail pattern with input text
    if(countUp) {
      if(i < rails - 1)
        i++;
      else {
        i--;
        countUp = false;
      }
    }
    else {
      if(i > 0)
        i--;
      else {
        i++;
        countUp = true;
      }
    }
  } 
  let result = '';   // read the rows
  for(let row of banner)
    result += row.join('');
  return result;
}

function decodeRailFenceCipher(txt, rails) {
  let banner = [...Array(rails)].map(x=>[...Array(txt.length)].fill(''));
  let i = 0;
  let countUp = true;
  for(let c = 0; c < txt.length; c++) {
    banner[i][c] = '~';  // make rail pattern with place holders
    if(countUp) {
      if(i < rails - 1) 
        i++;
      else {
        i--;
        countUp = false;
      }
    }
    else {
      if(i > 0)
        i--;
      else {
        i++;
        countUp = true;
      }
    }
  }
  let c = 0;  // index of characters in txt
  for(let row = 0; row < banner.length; row++) 
    for(let element = 0; element < banner[row].length; element++) 
      if(banner[row][element] == '~')  // replace place holders with txt
        banner[row][element] = txt[c++];   
          
  let result = '';  // read the columns
  for(let column = 0; column < banner[0].length; column++) 
    for(let row = 0; row < banner.length; row++) 
      result += banner[row][column];
  return result;
}

function showBanner(banner) {
  for(let row of banner)
    console.log(row);
}

// Testing
console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3));  // WECRLTEERDSOEEFEAOCAIVDEN
console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3));  // WEAREDISCOVEREDFLEEATONCE
console.log(encodeRailFenceCipher("Hello, World!", 3)); //"Hoo!el,Wrdl l"