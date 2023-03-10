/*
Return the Objects Keys and Values
Create a function that takes an object and returns the keys and values as
 separate arrays. Return the keys sorted alphabetically, and their
 corresponding values in the same order.

Examples
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]

Notes
Remember to sort the keys.
*/

function keysAndValues(obj) {
  /*
  let keys = [], values = [];
  Object.getOwnPropertyNames(obj).sort().forEach(key => {keys.push(key); values.push(obj[key]);});
	return [keys, values]
  */
  
  let keys = Object.keys(obj).sort();
  return [keys, keys.map(key => obj[key])]; 
}

console.log(...keysAndValues({a: 1, b: 2, c: 3}), ...[["a", "b", "c"], [1, 2, 3]])
console.log(...keysAndValues({b: "Microsoft", c: "Google", a: "Apple"}), ...[["a", "b", "c"], ["Apple", "Microsoft", "Google"]])
console.log(...keysAndValues({key1: true, key3: undefined, key2: false}), ...[["key1", "key2", "key3"], [true, false, undefined]])
console.log(...keysAndValues({1: null, 2: null, 3: null}), ...[["1", "2", "3"], [null, null, null]])
console.log(...keysAndValues({key1: "cat", key2: "dog", key3: null}), ...[["key1", "key2", "key3"], ["cat", "dog", null]])
