/*
Does the Triangle Fit into the Triangular Hole?
Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

Examples
doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true

doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true

doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false

doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false
Notes
Triangle fits if it has the same or smaller size as the hole.
The function should return false if the triangle with that dimensions is not possible.
*/

function doesTriangleFit(brick, hole) {
	const order = r => r.sort((a, b) => a - b);  // sort sides ascending
  const triCheck = r => r[0] + r[1] >= r[2];  // verify triangle inequality
  const insider = (x, y) => x[0] <= y[0] && x[1] <= y[1] && x[2] <= y[2];  // side for side fit?
  let b = order(brick);
  let h = order(hole);
  return triCheck(b) && triCheck(h) && insider(b, h);
}

// Testing
console.log(doesTriangleFit([1, 1, 1], [1, 1, 1]), true, "Same triangle")
console.log(doesTriangleFit([1, 1, 1], [2, 2, 2]), true, "Smaller triangle")
console.log(doesTriangleFit([1, 6, 8], [1, 6, 8]), false, "Not a triangle")
console.log(doesTriangleFit([12, 63, 42], [1, 6, 8]), false, "too small hole")
console.log(doesTriangleFit([3, 6, 8], [23, 63, 42]), true, "Hole is too big")
console.log(doesTriangleFit([3, 6, 8], [1, 10, 8]), false, "impossible hole")
