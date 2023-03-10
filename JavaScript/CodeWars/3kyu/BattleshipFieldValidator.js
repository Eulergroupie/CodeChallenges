/* Codewars
Write a method that takes a field for well-known board game "Battleship" as an
argument and returns true if it has a valid disposition of ships, false 
otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in
the array are numbers, 0 if the cell is free and 1 if occupied by ship.

Battleship (also Battleships or Sea Battle) is a guessing game for two players.
Each player has a 10x10 grid containing several "ships" and objective is to 
destroy enemy's forces by targetting individual cells on his field. The ship 
occupies one or more cells in the grid. Size and number of ships may differ 
from version to version. In this kata we will use Soviet/Russian version of the
game.


Before the game begins, players set up the board and place the ships 
accordingly to the following rules:
There must be single battleship (size of 4 cells), 2 cruisers (size 3),
3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are
not allowed, as well as missing ships.
Each ship must be a straight line, except for submarines, which are just
single cell.

The ship cannot overlap or be in contact with any other ship, neither by edge
nor by corner.

This is all you need to solve this kata. If you're interested in more 
information about the game, visit this link.
*/
function displayField(field) {
  for(let row of field) {
    console.log(row);
  }
}

function showGrid(grid) {
  tempGrid = []; 
  for(let row of grid) {
    let tempRow = "";
    for(let spot of row) {
      if(spot === 1) tempRow += ' * ';
      else tempRow += '   ';
    }
    tempGrid.push(tempRow);
  }
  for(let row of tempGrid) 
    console.log(row);
}

function checkShips(grid) {
  let ones = [];  // list of ordered pairs (r, c), describing locations of 1 in the 10x10 matrix 
  let shipID = [0, 0, 0, 0];  // [battleships, cruisers, destroyers, subs] ship counts
  for(let r = 1; r <= 10; r++) {
    for(let c = 1; c <= 10; c++) {
      if(grid[r][c] === 1) {
        if(grid[r-1][c-1] === 1 || grid[r-1][c+1] === 1 ||  // cut corners
           grid[r+1][c-1] === 1 || grid[r+1][c+1] === 1 ) return false;
        if(ones.filter(x => x[0]==r && x[1]==c).length == 1) continue;
        else ones.push([r, c]);
        let [vert, horz] = [grid[r+1][c], grid[r][c+1]];
        if(vert === 0 && horz === 0) shipID[3]++; // found sub
        if(vert === 1) {  // two units long, vertically?
          ones.push([r+1, c]);
          if(grid[r+2][c] === 1) {  // three units long, vertically?
            ones.push([r+2, c]);
            if(grid[r+3][c] === 1) {  // four units long, vertically?
              ones.push([r+3, c]);
              if(grid[r+4][c] === 1) return false;  // no ship longer than 4
              else shipID[0]++;  // found battleship*/
            }
            else shipID[1]++;  // found cruiser
          }
          else shipID[2]++;  // found destroyer
        }
        if(horz === 1) {  // two units long, horizontally?
          ones.push([r, c+1]);
          if(grid[r][c+2] === 1) {  // three units long, horizontally?
            ones.push([r, c+2]);
            if(grid[r][c+3] === 1) {  // four units long, horizontally?
              ones.push([r, c+3]);
              if(grid[r][c+4] === 1) return false;  // no ship longer than 4
              else shipID[0]++;  // found battleship
            }
            else shipID[1]++;  // found cruiser
          }
          else shipID[2]++;  // found destroyer
        }
      }
    }
  }
  if(ones.length != 20) return false;
  return shipID[0]==1 && shipID[1]==2 && shipID[2]==3 && shipID[3]==4;
}

function validateBattlefield(field) {
  let grid = [...field];  // create copy to modify and scan
  
  // make border of zeros
  const zeros = Array(10).fill(0); 
  grid.unshift([...zeros]);
  grid.push([...zeros]);
  for(let row of grid) {
    row.unshift(0);
    row.push(0);
  }
  return checkShips(grid);
}

// Testing
console.log(validateBattlefield(
[ [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],  // true
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ]) ? 'Pass' : 'Fail: should pass');

console.log(validateBattlefield(
[ [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],  // true
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 0] ]) ? 'Pass' : 'Fail: should pass');

console.log(validateBattlefield(
[ [1, 1, 0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 1, 0],  // true
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0] ]) ? 'Pass' : 'Fail: should pass');

console.log(validateBattlefield(
[ [1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],  // fail, 19 spots
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ]) ? 'Fail: spot count' : 'Pass');

console.log(validateBattlefield(
[ [1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],  // fail, adjacent connections, non-linear shape
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ]) ? 'Fail: adjacent or non-linear' : 'Pass');

console.log(validateBattlefield(
[ [1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],  // fail, corner connection
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ]) ? 'Fail: corner connect' : 'Pass');

console.log(validateBattlefield(
[ [1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],  // fail, only one destroyer, six subs
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1] ]) ? 'Fail: ship count' : 'Pass');

console.log(validateBattlefield(
[ [1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],  // fail, no battleship, three cruisers, four destroyers, three subs
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0] ]) ? 'Fail: ship count' : 'Pass');
