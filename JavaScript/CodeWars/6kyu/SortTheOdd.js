function sortArray(array) {
  let odds = []; evens = [];
  for(let el of array) {
    el % 2 ? odds.push(el) : evens.push(el);
  }
  odds = odds.sort((a, b) => a - b);
  let result = [];
  for(let el of array) {
    if(el % 2) 
      result.push(odds.shift());
    else 
      result.push(evens.shift());
  }
  return result;
}

console.log(sortArray([5,3,2,8,1,4]));  // [1, 3, 2, 8, 5, 4]