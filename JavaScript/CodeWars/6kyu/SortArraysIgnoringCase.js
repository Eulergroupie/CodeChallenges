/* Codewars
Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/

sortme = function(names) {
  return names.sort(function (a,b) {  // compare function
    const smallA = toLower(a);  // make lowercase copies w/o changing original
    const smallB = toLower(b);
    if(smallA < smallB) return -1;  // compare lowercase copies
    if(smallB < smallA) return 1;
    return 0;
  });
}

// Make a lower case copy of a string
const toLower = s => [...s].map(y=>y.toLowerCase()).join('');

// Testing
console.log(sortme(["Hello", "there", "I'm", "fine"]));
console.log(sortme(["C", "d", "a", "B"]));