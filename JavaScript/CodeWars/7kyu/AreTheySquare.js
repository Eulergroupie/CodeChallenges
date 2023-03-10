const isSquare = r => isNaN(r) ? r.filter(x => x ** 0.5 % 1 == 0).length == r.length : undefined;

console.log(isSquare([1,4,9,16]));
console.log(isSquare([3,4,7,9]));
console.log(isSquare([]));