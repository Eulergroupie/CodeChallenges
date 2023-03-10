/* Codecademy
 Step 1: Create a function called encode() to replace all the lowercase vowels
 in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
 For example, encode("hello") would return "h2ll4". There is no need to worry
 about uppercase vowels in this kata.

 Step 2: Now create a function called decode() to turn the numbers back into
 vowels according to the same pattern shown above.

 For example, decode("h3 th2r2") would return "hi there".

 For the sake of simplicity, you can assume that any numbers passed into the
 function will correspond to vowels.
*/

function encode(string) {
  let result = "";
  for(const char of string) {
    switch(char) {
      case 'a': result += 1; break;
      case 'e': result += 2; break;
      case 'i': result += 3; break;
      case 'o': result += 4; break;
      case 'u': result += 5; break;
      default: result += char;
    }
  }
  return result;
}

function decode(string) {
  let result = "";
  for(const char of string) {
    switch(char) {
      case '1': result += 'a'; break;
      case '2': result += 'e'; break;
      case '3': result += 'i'; break;
      case '4': result += 'o'; break;
      case '5': result += 'u'; break;
      default: result += char;
    }
  }
  return result;
}

/* array mapping solution by lekowan:
const table = ['a', 'e', 'i', 'o', 'u']
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')
*/

/* regex solution by jacobb:
// turn vowels into numbers
function encode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}
*/

/* object mapping by xDranik:
function encode(string){
  var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
  return codeStringGivenMapping(string, vowelMapping);
}

function decode(string){
  var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
  return codeStringGivenMapping(string, vowelMapping); 
}

function codeStringGivenMapping(string, mapping){
  return string.split('').map(function(char){
    return mapping[char] || char;
  }).join(''); 
}
*/

// Testing
console.log(encode('hello'));  // 'h2ll4'
console.log(encode('How are you today?'));  // 'H4w 1r2 y45 t4d1y?'
console.log(encode('This is an encoding test.'));  // 'Th3s 3s 1n 2nc4d3ng t2st.'
console.log(decode('h2ll4'));  // 'hello'
console.log(decode('H4w 1r2 y45 t4d1y?'));  // 'How are you today?'
console.log(decode('Th3s 3s 1n 2nc4d3ng t2st.'));  // 'This is an encoding test.'
