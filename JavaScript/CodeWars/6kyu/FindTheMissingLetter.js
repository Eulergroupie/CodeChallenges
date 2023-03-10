function findMissingLetter(array) {
  let r = [...array].map(x=>x.charCodeAt());
  for(let i = 0; i < array.length; i++) {
    if(r[i+1] != r[i] + 1)
      return String.fromCharCode(r[i] + 1);
  }
  return '';
}

console.log(findMissingLetter(["a","b","c","d","f"]));  // 'e'
console.log(findMissingLetter(["O","Q","R","S"]));  // 'P'