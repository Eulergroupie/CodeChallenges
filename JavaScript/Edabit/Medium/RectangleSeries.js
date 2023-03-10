/* Edabit
Rectangle Series 1: Skeleton
Write a class called Rectangle that represents a rectangular two-dimensional
 region. It should have the following constructor:

constructor(x, y, width, height)
Constructs a new rectangle whose top-left corner is specified by the given
 coordinates and with the given width and height.
It should have the following properties:

x

y

width

height
It should have the following methods:

toString()
Returns a string representation of this rectangle,
 as [x=1, y=2, width=3, height=4].
*/

// Rectangle Class
class Rectangle {
  constructor(x, y, width, height) {
    [this.x, this.y, this.width, this.height] = [x, y, width, height];
  }
  toString() {
    return `[x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}]`;
  }
}
