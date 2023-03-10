/* Edabit
Point Series 1: Skeleton
Write a class called Point that represents a point in two-dimensional. It
should have the following constructor:

constructor(x, y)
It should have the following properties:

x

y
It should have the following methods:

toString()
Returns a string representation of this point, as [x=1, y=2].
*/
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `[x=${this.x}, y=${this.y}]`;
  }
}

// Testing
console.log((new Point(1,2)).x == 1 ? 'Pass' : 'Fail: wrong x');
console.log((new Point(1,2)).y == 2 ? 'Pass' : 'Fail: wrong y');
console.log((new Point(1,2)).toString());  // "[x=1, y=2]"