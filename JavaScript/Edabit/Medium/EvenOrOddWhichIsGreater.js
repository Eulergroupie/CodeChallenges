/* Edabit
Create a function to determine if the sum of all the individual even digits are
 greater than the sum of all the individual odd digits in a string of numbers.

If the sum of odd numbers is greater than the sum of even numbers, return "Odd
 is greater than Even".
If the sum of even numbers is greater than the odd numbers, return "Even is
 greater than Odd".
If the sum of both even and odd numbers are equal, return "Even and Odd are the
 same".
Examples
evenOrOdd("22471") ➞ "Even and Odd are the same"

evenOrOdd("213613") ➞ "Even and Odd are the same"

evenOrOdd("23456") ➞ "Even is greater than Odd"
Notes
The input will be a string of numbers.
*/

function evenOrOdd(str) {
  let Odd = 0, Even = 0;
  [...str].map(d => d % 2 ? Odd += +d : Even += +d);
	if(Odd > Even) 
    return 'Odd is greater than Even';
  if(Odd < Even) 
    return 'Even is greater than Odd';
  return 'Even and Odd are the same';
}

// Testing
console.log(evenOrOdd('12345') === 'Odd is greater than Even')
console.log(evenOrOdd('143') === 'Even and Odd are the same')
console.log(evenOrOdd('2221') === 'Even is greater than Odd')
console.log(evenOrOdd('23456') === 'Even is greater than Odd')
console.log(evenOrOdd('4321') === 'Even is greater than Odd')
console.log(evenOrOdd('3245') === 'Odd is greater than Even')
console.log(evenOrOdd('14256') === 'Even is greater than Odd')
console.log(evenOrOdd('11234') === 'Even is greater than Odd')
console.log(evenOrOdd('1734') === 'Odd is greater than Even')
console.log(evenOrOdd('145') === 'Odd is greater than Even')
console.log(evenOrOdd('22471') === 'Even and Odd are the same')
console.log(evenOrOdd('213613') === 'Even and Odd are the same')
console.log(evenOrOdd('23456') === 'Even is greater than Odd')
console.log(evenOrOdd('9738') === 'Odd is greater than Even')
console.log(evenOrOdd('34522') === 'Even and Odd are the same')
console.log(evenOrOdd('12378') === 'Odd is greater than Even')
console.log(evenOrOdd('45228') === 'Even is greater than Odd')
console.log(evenOrOdd('4455') === 'Odd is greater than Even')
console.log(evenOrOdd('6721') === 'Even and Odd are the same')
console.log(evenOrOdd('92184') === 'Even is greater than Odd') 
console.log(evenOrOdd('12') === 'Even is greater than Odd')
console.log(evenOrOdd('123') === 'Odd is greater than Even')
console.log(evenOrOdd('112') === 'Even and Odd are the same')
console.log(evenOrOdd('124') === 'Even is greater than Odd')