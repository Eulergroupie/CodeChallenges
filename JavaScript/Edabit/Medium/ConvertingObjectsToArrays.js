function toArray(obj) {
	return Object.entries(obj);
}

// Testing
console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ foo: 33, bar: 45, baz: 67 }));