/* Codewars
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

function rps(player1, player2) {
  if(player1 === player2) return "Draw!";
  if(player1 === 'scissors' && player2 === 'paper' ||
     player1 === 'paper' && player2 === 'rock' ||
     player1 === 'rock' && player2 === 'scissors')
     return "Player 1 won!";
  if(player1 === 'scissors' && player2 === 'rock' ||
     player1 === 'paper' && player2 === "scissors" ||
     player1 === 'rock' && player2 === 'paper')
     return "Player 2 won!";
  return -1;
}

// Testing
console.log(rps('scissors', 'scissors') === 'Draw!' ? 'Pass' : 'Fail: (s, s)');
console.log(rps('paper', 'paper') === 'Draw!' ? 'Pass' : 'Fail: (p, p)');
console.log(rps('rock', 'rock') === 'Draw!' ? 'Pass' : 'Fail: (r, r)');
console.log(rps('scissors', 'paper') === 'Player 1 won!' ? 'Pass' : 'Fail: (s, p)');
console.log(rps('scissors', 'rock') === 'Player 2 won!' ? 'Pass' : 'Fail: (s, r)');
console.log(rps('paper', 'scissors') === 'Player 2 won!' ? 'Pass' : 'Fail: (p, s)');
console.log(rps('paper', 'rock') === 'Player 1 won!' ? 'Pass' : 'Fail: (p, r)');
console.log(rps('rock', 'scissors') === 'Player 1 won!' ? 'Pass' : 'Fail: (r, s)');
console.log(rps('rock', 'paper') === 'Player 2 won!' ? 'Pass' : 'Fail: (r, p)');