/* Codewars
Your task, is to create a NxN spiral with a given size.

For example, spiral with size 5 should look like this:

00000
....0
000.0
0...0
00000
and with the size 10:

0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000
Return value should contain array of arrays, of 0 and 1, for example for given
 size 5 result should be:

[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Because of the edge-cases for tiny spirals, the size will be at least 5.

General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
*/

var spiralize = function(n) {
  var maze = [...Array(n)].map(x=>[...Array(n)].fill(0));  // make NxN matrix filled with zeroes
  var i=0, j=0, turns = 0; // y, x in 1st quad coordinates; max turns = n-1

  while(turns < n) {  // while you haven't done all of your turns
    if(shouldGo(i, j, n, turns, maze))   // if you should move forward...
      [i, j] = advance(i, j, turns, maze);  // then go
    else 
      turns++;  // otherwise turn right
  }
  maze[i][j] = 1;  // calculated in advance, one more step
  return maze;
}

function shouldGo(i, j, n, turns, maze) {
  switch(turns % 4) {  // depending on direction as well as inner vs outer, go based on border or trail
    case 0: return turns < 3 ? j + 1 < n : maze[i][j+2] == 0;  // first three are outer shell and depend on borders
    case 1: return turns < 3 ? i + 1 < n : maze[i+2][j] == 0;  // after that, look ahead two spaces for trail
    case 2: return turns < 3 ? j - 1 > -1 : maze[i][j-2] == 0;
    case 3: return turns < 3 ? i - 1 > -1 : maze[i-2][j] == 0;
    default: return false;
  }
}

function advance(i, j, turns, maze) {
  maze[i][j] = 1;  // leave mark, then calculate next
  j += Math.round(Math.cos(turns * Math.PI / 2));  // -1, 0, +1 depending on direction,
  i += Math.round(Math.sin(turns * Math.PI / 2));  // and direction depends on turns
  return [i, j];
}

function showMap(r) {
  for(let x of r)
    console.log(x);
}

// Testing
showMap(spiralize(1));
showMap(spiralize(2));
showMap(spiralize(3));
showMap(spiralize(4));
showMap(spiralize(5));
showMap(spiralize(8));
showMap(spiralize(15));