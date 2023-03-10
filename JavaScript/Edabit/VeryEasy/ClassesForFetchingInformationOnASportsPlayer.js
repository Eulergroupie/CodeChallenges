/* Edabit
Create a class that takes the following four arguments for a particular
 football player:

name
age
height
weight
Also, create three functions for the class that returns the following 
strings:

getAge() returns "name is age age"
getHeight() returns "name is heightcm"
getWeight() returns "name weighs weightkg"
Examples
 p1 = new Player("David Jones", 25, 175, 75)

 p1.getAge() ➞ "David Jones is age 25"
 p1.getHeight() ➞ "David Jones is 175cm"
 p1.getWeight() ➞ "David Jones weighs 75kg"
Notes
name will be passed in as a string and age, height and weight will be 
integers.
*/
class Player {
	constructor(name, age, height, weight) {
		this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
	}
	
	getAge() {
		return `${this.name} is age ${this.age}`;
	}

	getHeight() {
		return `${this.name} is ${this.height}cm`;
	}
		
	getWeight() {
		return `${this.name} weighs ${this.weight}kg`;
	}
}		

let player1 = new Player('Patrick Mahomes', 24, 188, 104);
let player2 = new Player('Jimmy Garoppolo', 28, 188, 102);
let player3 = new Player('Julio Jones', 31, 191, 100);

// Testing
console.log(player1.getAge());
console.log(player1.getHeight());
console.log(player1.getWeight());