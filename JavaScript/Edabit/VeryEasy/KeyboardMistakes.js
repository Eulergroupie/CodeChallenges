/* Edabit
Character recognition software often makes mistakes when documents (especially
  old ones written with a typewriter) are digitized.

Your task is to correct the errors in the digitized text. You only have to 
handle the following mistakes:

A is misinterpreted as 4
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

Examples
keyboardMistakes("MUB45H1R") ➞ "MUBASHIR"

keyboardMistakes("DUBL1N") ➞ "DUBLIN"

keyboardMistakes("51NG4P0RE") ➞ "SINGAPORE"
*/

function keyboardMistakes(str) {
  let result = '';
	for(let char of str) {
    switch(char) {
      case '4':
        result += 'A';
        break;
      case '5':
        result += 'S';
        break;
      case '0':
        result += 'O';
        break;
      case '1':
        result += 'I';
        break;
      default:
        result += char;
    }   
  }
  return result;
} 

// Testing
console.log(keyboardMistakes("MUB45H1R") == "MUBASHIR" ? 'Pass' : 'Fail: MUB45H1R');   
console.log(keyboardMistakes("DUBL1N") == "DUBLIN" ? 'Pass' : 'Fail: DUBL1N');
console.log(keyboardMistakes("51NG4P0RE") == "SINGAPORE" ? 'Pass' : 'Fail: 51NG4P0RE');  
console.log(keyboardMistakes("P4K15T4N") == "PAKISTAN" ? 'Pass' : 'Fail: P4K15T4N');
console.log(keyboardMistakes("P4R15") == "PARIS" ? 'Pass' : 'Fail: P4R15');