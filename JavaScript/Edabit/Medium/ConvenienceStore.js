/*
Convenience Store
Given a total due and an array representing the amount of change in your
 pocket, determine whether or not you are able to pay for the item. Change
 will always be represented in the following order: quarters, dimes, nickels,
 pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since
 having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you
 6.25 + 2 + .25 + 0 = 8.50.

Examples
changeEnough([2, 100, 0, 0], 14.11) ➞ false

changeEnough([0, 0, 20, 5], 0.75) ➞ true

changeEnough([30, 40, 20, 5], 12.55) ➞ true

changeEnough([10, 0, 0, 50], 3.85) ➞ false

changeEnough([1, 0, 5, 219], 19.99) ➞ false
Notes
quarter: 25 cents / $0.25
dime: 10 cents / $0.10
nickel: 5 cents / $0.05
penny: 1 cent / $0.01
*/

function changeEnough(change, amountDue) {
	let remaining = amountDue * 100;
  let [quarters, dimes, nickels, pennies] = change;
  while(remaining > 24 && quarters-- > 0)
    remaining -= 25;
  while(remaining > 9 && dimes-- > 0) 
    remaining -= 10;
  while(remaining > 4 && nickels-- > 0) 
    remaining -= 5;
  while(remaining > 0 && pennies-- > 0) 
    remaining--;
  return remaining === 0;
}

console.log(changeEnough([2, 100, 0, 0], 14.11), false);
console.log(changeEnough([0, 0, 20, 5], 0.75), true);
console.log(changeEnough([30, 40, 20, 5], 12.55), true);
console.log(changeEnough([10, 0, 0, 50], 13.85), false);
console.log(changeEnough([1, 0, 5, 219], 19.99), false);
console.log(changeEnough([1, 0, 2555, 219], 127.75), true);
console.log(changeEnough([1, 335, 0, 219], 35.21), true);

