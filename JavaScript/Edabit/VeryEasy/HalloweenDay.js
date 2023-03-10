/*
Create a function that takes date in the format yyyy/mm/dd as an input and
 returns "Bonfire toffee" if the date is October 31, else return "toffee".

Examples
halloween(new Date("2013/10/31")) ➞ "Bonfire toffee"

halloween(new Date("2012/07/31")) ➞ "toffee"

halloween(new Date("2011/10/12")) ➞ "toffee"
*/

function halloween(dt) {
  let result = '';
  if(dt.getMonth() == 9 && dt.getDate() == 31)
    result = 'Bonfire ';
	return result + 'toffee';
}

//Testing
console.log(halloween(new Date("2013/10/31")));
console.log(halloween(new Date("2012/07/31")));
console.log(halloween(new Date("2015/10/31")));
console.log(halloween(new Date("2011/10/12")));
console.log(halloween(new Date("2008/10/11")));
