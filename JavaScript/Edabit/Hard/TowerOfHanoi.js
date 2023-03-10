/* Edabit
There are three towers. The objective of the game is to move all the disks over
 to tower #3, but you can't place a larger disk onto a smaller disk. To play 
 the game or learn more about the Tower of Hanoi, check the Resources tab.

Tower of Hanoi

Create a function that takes a number discs as an argument and returns the 
minimum amount of steps needed to complete the game.

Examples
towerHanoi(3) ➞ 7

towerHanoi(5) ➞ 31

towerHanoi(0) ➞ 0
Notes
The amount of discs is always a positive integer.
1 disc can be changed per move.
*/

/*
A recursive algorithm for Tower of Hanoi can be driven as follows −

START
Procedure Hanoi(disk, source, dest, aux)

   IF disk == 1, THEN
      move disk from source to dest             
   ELSE
      Hanoi(disk - 1, source, aux, dest)     // Step 1
      move disk from source to dest          // Step 2
      Hanoi(disk - 1, aux, dest, source)     // Step 3
   END IF
   
END Procedure
STOP
*/

function towerHanoi(discs) {
  let source = [...Array(discs).keys()];
  let dest = [];
  let aux = [];
  let counter = [0];  // how many ring moves
  let order = [source, dest, aux];  // keeps track of towers inside functions
  //console.log(`a:[${source}], b:[${dest}], c:[${aux}]`);
  hanoi(discs, source, dest, aux, counter, order); 
  return counter[0];
}

function hanoi(disk, source, dest, aux, count, order) {
  if(disk<=0)
    return 0;
  if(disk==1) {
    dest.push(source.pop());  // move disk from source to destination
    //console.log(`a:[${order[0]}], b:[${order[1]}], c:[${order[2]}]`);
  }
  else {     
    hanoi(disk-1, source, aux, dest, count, order);    
    dest.push(source.pop());  // move disk from source to destination
    //console.log(`a:[${order[0]}], b:[${order[1]}], c:[${order[2]}]`); 
    hanoi(disk-1, aux, dest, source, count, order);     
  }
  ++count[0];
}

// Testing
console.log(towerHanoi(0));  // 0
console.log(towerHanoi(1));  // 1
console.log(towerHanoi(2));  // 3
console.log(towerHanoi(3));  // 7
console.log(towerHanoi(4));  // 15
console.log(towerHanoi(5));  // 31
console.log(towerHanoi(8));  // 255
console.log(towerHanoi(9));  // 511
console.log(towerHanoi(13));  // 8191
console.log(towerHanoi(19));  // 524287


