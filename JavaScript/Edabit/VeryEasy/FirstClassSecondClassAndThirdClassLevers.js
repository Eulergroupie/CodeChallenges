/*
Levers are simple machines with a rigid beam and a fulcrum. From the picture 
 below, you can see that there are 3-types of levers: first class, second class 
 and third class.

In a first class lever, the fulcrum is situated in the middle with the effort 
 and the load being positioned opposite of each other.
In a second class lever, the fulcrum is situated in the right with the effort 
 on the left and the load in the middle.
In a third class lever, the fulcrum is situated in the left with the effort 
 being in the middle and the load being on the right.


Given an array that contains the fulcrum "f", the effort "e", and the load "l",
 write a function that determines whether or not the array shows a first class 
 lever, second class lever, or a third class lever.

Examples
determineLever(["e", "f", "l"]) ➞ "first class lever"

determineLever(["e", "l", "f"]) ➞ "second class lever"

determineLever(["f", "e", "l"]) ➞ "third class lever"
Notes
A pair of scissors is a first class lever, a nutcracker is a second class lever
 and a broom is a third class lever.
 */

const determineLever = r => 
  (r[0] == 'e' ? r[1] == 'f' ? "first" : "second" : "third") + " class lever";

// Testing
console.log(determineLever(['e','f','l']))  // first class lever
console.log(determineLever(['e','l','f']))  // second class lever
console.log(determineLever(['f','e','l']))  // third class lever
