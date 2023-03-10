/* Edabit
Write a function that returns true if a year is a leap, otherwise return false.

A year is a "leap year" if it lasts 366 days, instead of 365 in a typical year.
 That extra day is added to the end of the shortest month, creating February 29.

A leap year occurs every four years, and will take place if the year is a 
 multiple of four. The exception to this is a year at the beginning of a century
 (for example, 1900 or 2000), where the year must be divisible by 400 to be a 
 leap year.

Look at the examples, and if you need help, look at the resources panel.

Examples
leapYear(1990) ➞ false

leapYear(1924) ➞ true

leapYear(2021) ➞ false
Notes
Do not overthink this challenge.
You can solve the problem with a few lines of code.
*/

// const leapYear = y => y % 4 == 0 && y % 100 != 0 || y % 400 == 0;

//const leapYear = y => !(y&3 || y&15 && !(y%25));  // fails 1900

// Testing
/*
console.log(leapYear(1850));  // false
console.log(leapYear(1565));  // false
console.log(leapYear(1920));  // true
console.log(leapYear(1924));  // true
console.log(leapYear(1928));  // true
console.log(leapYear(1940));  // true
console.log(leapYear(2021));  // false
console.log(leapYear(1900));  // false
console.log(leapYear(2000));  // true
*/

/*
function leapYear(year) {
  // 365.242189
	let days = 0.25 * year + 0.01 * year;
  console.log(year, days, !(days % 1));
	return !(days % 1);
}*/

function leapYear(year) {
  const r = !!(((year % 4 == 0) + (year % 100 == 0) + (year % 400 == 0)) % 2);
}

leapYear(2016);  // true
leapYear(1996);  // true
leapYear(1600);  // true
leapYear(2020);  // true
leapYear(2000);  // true
leapYear(2008);  // true
leapYear(1521);  // false
leapYear(1800);  // false
leapYear(2007);  // false
leapYear(2002);  // false
leapYear(1979);  // false
leapYear(2006);  // false

/*
function yearSim(year) {
  const delta = 0.242189;
  let deltaSum = 0;
  for(let i = 1; i <= year; i++) {
    deltaSum += delta;
    if(i % 4 == 0 && i % 100 != 0 || i % 400 == 0)
      deltaSum--;
  }
  console.log(year, deltaSum);
  return
}

yearSim(1);
yearSim(4);
yearSim(100);
yearSim(399);
yearSim(400);
yearSim(1521);
*/
