/* Codewars
The following code is not giving the expected results. Can you figure out 
what the issue is?

The following is an example of data that would be passed in to the function.
*/
var data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]

console.log(getNames(data)); // should return ['Joe', 'Bill', 'Kate']

function getNames(data) {
  console.log(data.name, data.age);
  return data.map(x => x.name);
}
