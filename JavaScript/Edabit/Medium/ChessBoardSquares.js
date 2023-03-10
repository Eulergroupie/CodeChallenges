/* Edabit
Create a function that takes a code of chess board square and return his color.

Alternative Text

Examples
chessBoard("a1") ➞ "black"

chessBoard("e5") ➞ "black"

chessBoard("d1") ➞ "white"
*/

/*
function chessBoard(pole) {
  [a, b] = pole;
	return [a, b].reduce((s, c) => s + c.charCodeAt(0), 0) % 2 ? 'white' : 'black';
}
*/

const chessBoard = p =>
 [...p].reduce((s, c) => s + c.charCodeAt(), 0) % 2 ? 'white' : 'black';


// Testing
console.log(chessBoard('a1'));  // 'black'
console.log(chessBoard('e5'));  // 'black'
console.log(chessBoard('d1'));  // 'white'
console.log(chessBoard('h8'));  // 'black'
