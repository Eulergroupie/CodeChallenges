/*
How Many Days Between Two Dates
Create a function that takes two dates and returns the number of days between the first and second date.

Examples
getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
) ➞ 6


getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
) ➞ 3
// Dates may not all be in the same month/year.


getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
) ➞ 10
*/

function getDays(date1, date2) {
  const msperday = 1000 * 60 * 60 * 24;
	return (date2 - date1) / msperday;
}

// Testing
console.log(getDays(new Date('June 14, 2019'), new Date('June 20, 2019')), 6)
console.log(getDays(new Date('December 29, 2018'), new Date('January 1, 2019')), 3)
console.log(getDays(new Date('July 20, 2019'), new Date('July 30, 2019')), 10)
