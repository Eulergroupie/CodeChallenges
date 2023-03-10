/* Codewars
You'll be given a string, and have to return the sum of all characters as an
 int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/
function uniTotal(s) {
  let t;
  if(typeof(s) == 'string')
    t = 0;
  else
    return null;

  for(let char of s)
    t += char.charCodeAt(0);
  return t;
}

// Testing
console.log(uniTotal());  // null
console.log(uniTotal(''));  // 0
console.log(uniTotal('a'));  // 97