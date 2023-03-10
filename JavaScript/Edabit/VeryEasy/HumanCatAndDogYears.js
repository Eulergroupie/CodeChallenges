/* Edabit
Mubashir has a cat and a dog. He purchased both of them at the same time humanYears ago.

Create a function which takes an argument of humanYears and returns [humanYears, catYears, dogYears] array.

Human Years
Human Years >= 1
Human Years are whole numbers only.
Cat Years
15 cat years for first year.
+9 cat years for second year.
+4 cat years for each year after that.
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
Examples
calculateYears(1) ➞ [1, 15, 15]

calculateYears(2) ➞ [2, 24, 24]

calculateYears(10) ➞ [10, 56, 64]
*/

// O(1) ... old school
/*
function calculateYears(humanYears) {
	let catYears, dogYears;
	switch(humanYears) {
		case 1:
			catYears = 15;
			dogYears = 15;
			break;
		case 2:
			catYears = 24;
			dogYears = 24;
			break;
		default:
			catYears = 24 + (humanYears - 2) * 4;
			dogYears = 24 + (humanYears - 2) * 5;
	}
	return [humanYears, catYears, dogYears];
}*/

// recursive
/*
const calculateYears = humanYears =>
  [humanYears, critterYears(humanYears, 4), critterYears(humanYears, 5)];

function critterYears(years, adj) {
  if(years < 2) return 15;
  if(years == 2) return 9 + critterYears(years - 1, adj);
  return adj + critterYears(years - 1, adj);
}
*/

// code golf
calculateYears = h => [h, c(h, 4), c(h, 5)]

c = (y, a) => y < 2 ? 15 : y < 3 ? 24 : a + c(y - 1, a)

// Testing
console.log(calculateYears(1));  // [1,15,15]
console.log(calculateYears(2));  // [2,24,24]
console.log(calculateYears(10));  // [10,56,64]
console.log(calculateYears(20));  // [20,96,114]
console.log(calculateYears(65));  // [65,276,339]
console.log(calculateYears(43));  // [43,188,229]
console.log(calculateYears(100));  // [100,416,514]

