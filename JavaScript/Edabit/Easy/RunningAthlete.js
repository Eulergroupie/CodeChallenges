/* Edabit
No description.
Guess the code from test cases.
*/

function runningAthlete(act, txt) {
  result = '';
	for(let i = 0; i < act.length; i++) {
    if(txt[i] === '_') 
      result += act[i] === 'run' ? '_' : 'x';
    else 
      result += act[i] === 'jump' ? '|' : '/';
  }
  return result;
}

// Testing
console.log(runningAthlete(["run","jump","run","jump","run"],"_|_|_"));  // "_|_|_"
console.log(runningAthlete(["run","jump","run","run","run"],"_|_|_"));  // "_|_/_"
console.log(runningAthlete(["run","run","run","run","run"],"_|_|_"));  // "_/_/_"
console.log(runningAthlete(["jump","jump","jump","jump","jump"],"_|_|_"));  // "x|x|x"
console.log(runningAthlete(["jump","run","jump","run","jump"],"_|_|_"));  // "x/x/x"
console.log(runningAthlete(["run","run","run","run","run","run","run","run","run","run"],"||||||||||"));  // "//////////"
console.log(runningAthlete(["jump","jump","jump","jump","jump","jump","jump","jump","jump","jump"],"__________"));  // "xxxxxxxxxx"