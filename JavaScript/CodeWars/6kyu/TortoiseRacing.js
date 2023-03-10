/* Codewars
 Two tortoises named A and B must run a race. A starts with an average speed
 of 720 feet per hour. Young B knows she runs faster than A, and furthermore
 has not finished her cabbage.

 When she starts, at last, she can see that A has a 70 feet lead but B's speed
 is 850 feet per hour. How long will it take B to catch A?

 More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's 
 speed, integer > 0) and a lead g (integer > 0) how long will it take B to
 catch A?

 The result will be an array [hour, min, sec] which is the time needed in 
 hours, minutes and seconds (round down to the nearest second) or a string in
 some languages.

 If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C,
 Go, Nim, Pascal, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

 Examples:
 (form of the result depends on the language)

race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
 Note:
 See other examples in "Your test cases".

 ** Hints for people who don't know how to convert to hours, minutes, seconds:

 Tortoises don't care about fractions of seconds
 Think of calculation by hand using only integers (in your code use or 
 simulate integer division)
 or Google: "convert decimal time to hours minutes seconds"
*/


// using seconds
const race = (v1, v2, g) => {
  return v1 >= v2 ? null : hms((g * 3600 / (v2 - v1)).toFixed(6));
}

// convert decimal seconds to rounded [hours, minutes, seconds]
const hms = (secs, hours = secs / 3600, mins = ((hours % 1) * 60).toFixed(4)) =>
  [Math.floor(hours), Math.floor(mins), Math.floor((mins % 1) * 60)];



// using hours
/*
const race = (v1, v2, g) => v1 >= v2 ? null : hms(g / (v2 - v1));

// convert decimal hours to rounded [hours, minutes, seconds]
const hms = (hours, mins = (hours % 1) * 60) => 
  [Math.floor(hours), Math.floor(mins), Math.round((mins % 1) * 60)];
*/

// solution from GiacomoSorbi
/*
function race(v1, v2, g){
  let time=g/(v2-v1);
  return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
}
*/

// Testing
console.log(race(720, 850, 70));  // [0, 32, 18]
console.log(race(80, 91, 37));  // [3, 21, 49]
console.log(race(80, 100, 40));  // [2, 0, 0]
console.log(race(820, 850, 550)); // [18, 20, 0]
