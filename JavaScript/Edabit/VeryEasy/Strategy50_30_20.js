/* Edabit
The 50-30-20 strategy is a simple way to budget, which involves spending 50%
 of after-tax income on needs, 30% after tax income on wants, and 20% after-tax
 income on savings or paying off debt.

Given the after-tax income as ati, what you are supposed to do is to make a 
 function that will return an object that shows how much a person needs to spend
 on needs, wants, and savings.

Examples
fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }
Notes
*/

function fiftyThirtyTwenty(ati) {
	let budget = {
    Needs: 0.5 * ati,
    Wants: 0.3 * ati,
    Savings: 0.2 * ati
  };
  return budget;
}

// Testing
console.log(fiftyThirtyTwenty(10000));  // {"Needs": 5000, "Wants": 3000, "Savings": 2000}
console.log(fiftyThirtyTwenty(50000));  // {"Needs": 25000, "Wants": 15000, "Savings": 10000}
console.log(fiftyThirtyTwenty(13450));  // {"Needs": 6725, "Wants": 4035, "Savings": 2690}
console.log(fiftyThirtyTwenty(27800));  // {"Needs": 13900, "Wants": 8340, "Savings": 5560}
console.log(fiftyThirtyTwenty(19000));  // {"Needs": 9500, "Wants": 5700, "Savings": 3800}
console.log(fiftyThirtyTwenty(17610));  // {"Needs": 8805, "Wants": 5283, "Savings": 3522}
console.log(fiftyThirtyTwenty(25000));  // {"Needs": 12500, "Wants": 7500, "Savings": 5000}
console.log(fiftyThirtyTwenty(100000));  // {"Needs": 50000, "Wants": 30000, "Savings": 20000}
console.log(fiftyThirtyTwenty(347100));  // {"Needs": 173550, "Wants": 104130, "Savings": 69420}