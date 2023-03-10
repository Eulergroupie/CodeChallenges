/* Edabit
Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

{other person name} is {older than / younger than / the same age as} me.

Examples
p1 = Person("Samuel", 24)
p2 = Person("Joel", 36)
p3 = Person("Lily", 24)
p1.compareAge(p2) ➞ "Joel is older than me."

p2.compareAge(p1) ➞ "Samuel is younger than me."

p1.compareAge(p3) ➞ "Lily is the same age as me."
Notes
Check out the Resources tab for some helpful tutorials on JavaScript classes!
If you're really stuck, check out the Solutions tab for answers. 
*/
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
    const d = this.age - other.age;  // delta    
    const comparedTo = (d < 0) ? 'older than' :
                       (d > 0) ? 'younger than' : 'the same age as'; 
    return `${other.name} is ${comparedTo} me.`;
	}
}

// Testing
p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)

console.log(p1.compareAge(p2));  // "Joel is older than me."
console.log(p1.compareAge(p3));  // "Lily is the same age as me."

console.log(p2.compareAge(p1));  // "Samuel is younger than me."
console.log(p2.compareAge(p3));  // "Lily is younger than me."

console.log(p3.compareAge(p1));  // "Samuel is the same age as me."
console.log(p3.compareAge(p2));  // "Joel is older than me."