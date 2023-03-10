/* Codewars
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the 
average student in your class.

You receive an array with your peers' test scores. Now calculate the average 
and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For 
calculating the average point you may add your point to the given array!
*/

function betterThanAverage(classPoints, yourPoints) {
  let sumPoints = classPoints.reduce((a, b) => a + b) + yourPoints;  // add em up, include me
  let classAvg = sumPoints / ++classPoints.length;  // divide by class size, include me
  //console.log(`Class Average: ${classAvg} Dave Score: ${yourPoints}`);  // display check
  return classAvg < yourPoints;
}

// Testing
console.log(betterThanAverage([2, 3], 5)  === true ? 'Pass' : 'Fail');  
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 55) === false ? 'Pass' : 'Fail');
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69) === true ? 'Pass' : 'Fail');