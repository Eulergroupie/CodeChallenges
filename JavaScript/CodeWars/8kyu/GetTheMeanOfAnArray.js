function getAverage(marks){
  console.log(marks);
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

console.log(getAverage([...Array(11).keys()].slice(1)));  // an array from 1 to 10