/*Simple Circle Collision Detection
Create a function that returns true if the given circular areas are intersecting, otherwise return false. The circles are given as two arrays containing the values in the following order:

Radius of the circle.
Center position on the x-axis.
Center position on the y-axis.
Examples
isCircleCollision([10, 0, 0], [10, 10, 10]) ➞ true

isCircleCollision([1, 0, 0], [1, 10, 10]) ➞ false
Notes
You can expect useable input and positive radii.
The given coordinates are the centers of the circles.
We are looking for intersecting areas, not intersection outlines.
Check the Resources tab for help. */



/*
const isCircleCollision = (a, b) => {
    let [ra, xa, ya] = a;
    let [rb, xb, yb] = b;
    return ra + rb > ((xb - xa) ** 2 + (yb - ya) ** 2) ** (1 / 2);
}
*/
/*
const isCircleCollision = (a, b) => 
    a[0] + b[0] > ((b[1] - a[1]) ** 2 + (b[2] - a[2]) ** 2) ** (1 / 2);
*/

const isCircleCollision = (a, b) =>
    a[0] + b[0] > Math.hypot(b[1] - a[1], b[2] - a[2]);

console.log(isCircleCollision([10, 0, 0], [10, 10, 10]), true)
console.log(isCircleCollision([10, 0, 0], [5, 0, 0]), true)
console.log(isCircleCollision([1, 0, 0], [1, 0, 0]), true)
console.log(isCircleCollision([5, 0, 0], [5, 10, 10]), false)
console.log(isCircleCollision([1, 0, 0], [1, 10, 10]), false)
