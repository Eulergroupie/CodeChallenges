/* Codewars
You're writing code to control your town's traffic lights. You need a function 
to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the 
current state of the light and returns a string representing the state the 
light should change to.

For example, update_light('green') should return 'yellow'.
*/

function updateLight(current) {
  switch(current) {
    case 'green': return 'yellow';
    case 'yellow' : return 'red';
    case 'red': return 'green';
  }
  return -1;
}

// Testing
console.log(updateLight('green') == 'yellow' ? 'Pass' : 'Fail: green');
console.log(updateLight('yellow') == 'red' ? 'Pass' : 'Fail: yellow');
console.log(updateLight('red') == 'green' ? 'Pass' : 'Fail: red');