/* Edabit
Create a function which takes an array of instances from the class IceCream and returns the sweetness value of the sweetest icecream.

Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a sweetness value of 1, and the sweetness values for the flavors are as follows:

Flavors	Sweetness Value
Plain	0
Vanilla	5
ChocolateChip	5
Strawberry	10
Chocolate	10
You'll be given instance properties in the order flavor, numSprinkles.

Examples
ice1 = IceCream("Chocolate", 13)         // value of 23
ice2 = IceCream("Vanilla", 0)           // value of 5
ice3 = IceCream("Strawberry", 7)        // value of 17
ice4 = IceCream("Plain", 18)             // value of 18
ice5 = IceCream("ChocolateChip", 3)      // value of 8

sweetestIcecream([ice1, ice2, ice3, ice4, ice5]) ➞ 23

sweetestIcecream([ice3, ice1]) ➞ 23

sweetestIcecream([ice3, ice5]) ➞ 17
Notes
Remember to only return the sweetness value.
IceCream class is provided (check Tests tab).
*/
class IceCream {
	constructor(flavor, numSprinkles) {
		this.flavor = flavor
		this.numSprinkles = numSprinkles
	}
}

function sweetestIcecream(orders) {
  const creamySweetness = {
    Plain: 0,
    Vanilla: 5, ChocolateChip: 5,
    Strawberry: 10, Chocolate: 10
  }
  return Math.max(...orders.map(icecream =>
       creamySweetness[icecream['flavor']] + icecream['numSprinkles']));
}

// Testing
ice1 = new IceCream("Chocolate", 13)
ice2 = new IceCream("Vanilla", 0)
ice3 = new IceCream("Strawberry", 7)
ice4 = new IceCream("Plain", 18)
ice5 = new IceCream("ChocolateChip", 3)
ice6 = new IceCream("Chocolate", 23)
ice7 = new IceCream("Strawberry", 0)
ice8 = new IceCream("Plain", 34)
ice9 = new IceCream("Plain", 81)
ice10 = new IceCream("Vanilla", 12)

console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));  // 23