/*
Seven Segment Display
Create a function that takes a single Hexadecimal number as an argument and returns the equivalent six-digit binary number to light the display. Consider the six-digit binary number as an incoming input from a serial port. The segment display is a common cathode segment display that means you need to give a logical 1 to light up each segment.

Alternative Text

Examples
toDisplay(0x1) ➞ 0x06
// [dp, g, f, e, d, c, b, a] = [0, 0, 0, 0, 0, 1, 1, 0]

toDisplay(0x8) ➞ 0x7F
// [dp, g, f, e, d, c, b, a] = [0, 1, 1, 1, 1, 1, 1, 1]

toDisplay(0x0) ➞ 0x3F
// [dp, g, f, e, d, c, b, a] = [0, 0, 1, 1, 1, 1, 1, 1]
Notes
Bit order is as follows MSB [dp, g, f, e, d, c, b, a] LSB.
This is something that comes up in FPGA work a lot, where you have to make some kind of conversion between numerical values and bits controlling hardware. These conversions often have no simple algorithm and require hard coding.
If you do hard code this challenge you can try to determine the correct values by yourself but in industry if you can just look up a reference, you do. In this case the code tests have all the required values.
*/

function toDisplay(hexIn) {
 let Seg7 = [0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71];
 return Seg7[hexIn];
}

// Testing
console.log(toDisplay(0x0), 0x3F) // 0
console.log(toDisplay(0x1), 0x06) // 1 right side
console.log(toDisplay(0x2), 0x5B) // 2
console.log(toDisplay(0x3), 0x4F) // 3
console.log(toDisplay(0x4), 0x66) // 4
console.log(toDisplay(0x5), 0x6D) // 5
console.log(toDisplay(0x6), 0x7D) // 6 top hook
console.log(toDisplay(0x7), 0x07) // 7 no middle slash
console.log(toDisplay(0x8), 0x7F) // 8
console.log(toDisplay(0x9), 0x6F) // 9 bottom hook
console.log(toDisplay(0xA), 0x77) // A Upper case
console.log(toDisplay(0xB), 0x7C) // b lower case
console.log(toDisplay(0xC), 0x39) // C Upper case
console.log(toDisplay(0xD), 0x5E) // d lower case
console.log(toDisplay(0xE), 0x79) // E Upper case
console.log(toDisplay(0xF), 0x71) // F Upper case

