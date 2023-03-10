/* Codewars
Pete likes to bake some cakes. He has some recipes and ingredients. 
Unfortunately he is not good in maths. Can you help him to find out, how many
 cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available 
ingredients (also an object) and returns the maximum number of cakes Pete can
 bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb
   of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not
    present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, 
  {sugar: 500, flour: 2000, milk: 2000}); 
*/

function cakes(recipe, ingredients) {
  let maxQuant = Infinity, thisQuant = Infinity;
  for(let item in recipe) {
    if(item in ingredients && ingredients[item] >= recipe[item]) {
      thisQuant = Math.floor(ingredients[item]/recipe[item]);  
    }  
    else {
      return 0;
    }
    if(thisQuant < maxQuant) {
      maxQuant = thisQuant;
    }
  }
  return maxQuant;
}

// Testing
console.log(cakes({flour: 500, sugar: 200, eggs: 1},
   {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));  // 2
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
   {sugar: 500, flour: 2000, milk: 2000}));  // 0
console.log(cakes({"cocoa":0,"nuts":28,"pears":92},
{"cream":6600,"oil":6900,"eggs":5400,"pears":4500,"butter":3900,"cocoa":3400,
"apples":6400,"crumbles":8200,"sugar":6000,"nuts":5700,"flour":8000,
"chocolate":2900,"milk":4500} ));  // 0?