/* Edabit
Roll the Dice
Las Vegas style dice have 6 sides numbered 1 to 6. When rolling 2 dice, a six
is 5 times more likely than a two because a six can be rolled 5 different ways
(1 + 5, 5 + 1, 2 + 4, 4 + 2, 3 + 3), while a two can only be rolled 1 way (1 + 1).

Create a function that accepts two arguments:the number of dice rolled, and the
 outcome of the roll. The function returns the number of possible combinations
  that could produce that outcome. The number of dice can vary from 1 to 6.

For the example given above:

diceRoll(2, 6) would return 5
diceRoll(2, 2) would return 1
Examples
diceRoll(1, 3) ➞ 1

diceRoll(2, 5) ➞ 4
// 1 + 4, 4 + 1, 2 + 3, 3 + 2

diceRoll(3, 4) ➞ 3
// 1 + 1 + 2, 1 + 2 + 1, 2 + 1 + 1

diceRoll(4, 18) ➞ 80

diceRoll(6, 20) ➞ 4221
Notes
1 + 5 and 5 + 1 are distinct combinations because die #1 can show 1 while die
 #2 can show 5, or die #1 can show 5 while die #2 can show 1.
*/

/*
// Dave's brute force
function diceRoll(die, outcome) {
  let sum1, sum2, sum3, sum4, sum5, sum6;
  sum1 = sum2 = sum3 = sum4 = sum5 = sum6 = 0;
  
  for(let n = 1; n <= 6; n++) 
    for(let m = 1; m <= 6; m++) 
      for(let l = 1; l <= 6; l++) 
        for(let k = 1; k <= 6; k++) 
          for(let j = 1; j <= 6; j++) 
            for(let i = 1; i <= 6; i++) {
              if(die == 6 && (i + j + k + l + m + n) == outcome)
                sum6++;
              else if(die == 5 && i == 1 && (j + k + l + m + n) == outcome)
                sum5++;
              else if(die == 4 && i == 1 && j == 1 && (k + l + m + n) == outcome)
                sum4++;
              else if(die == 3 && i == 1 && j == 1 && k == 1 && (l + m + n) == outcome)
                sum3++;
              else if(die == 2 && i == 1 && j == 1 && k == 1 && l == 1 && (m + n) == outcome)         
                sum2++;
              else if(die == 1 && i == 1 && j == 1 && k == 1 && l == 1 && m == 1 && n == outcome)
                sum1++;
            }
  switch(die) {          
    case 1: return sum1;
    case 2: return sum2;
    case 3: return sum3;
    case 4: return sum4;
    case 5: return sum5;
    default: return sum6;
  }
} */

// mbbentley
function diceRoll(dice, target) {
	if (dice === 1)
    return +(target >= 1 && target <= 6);
	dice--;
	let poss = 0;
	for (let i = 1; i <= 6; i++)
		if (target - i >= dice && target - i <= dice * 6)
			poss += diceRoll(dice, target - i);
	return poss;
}

// Testing
console.log(diceRoll(1, 6));  //, 1)
console.log(diceRoll(2, 2));  //, 1)
console.log(diceRoll(2, 9));  //, 4)
console.log(diceRoll(3, 7));  //, 15) 
console.log(diceRoll(3, 18));  //, 1)
console.log(diceRoll(4, 11));  //, 104)
console.log(diceRoll(4, 21));  //, 20)
console.log(diceRoll(5, 6));  //, 5)
console.log(diceRoll(5, 26));  //, 70)
console.log(diceRoll(6, 6));  //, 1)
console.log(diceRoll(6, 21));  //, 4332)
console.log(diceRoll(6, 31));  //, 252)