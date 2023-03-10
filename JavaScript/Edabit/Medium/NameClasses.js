/* Edabit
Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

An attribute called fullname which returns the first and last names.
A attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
Remember to allow the attributes fname and lname to be accessed individually as well.

Examples
a1 = new Name("john", "SMITH")
a1.fname ➞ "John"

a1.lname ➞ "Smith"

a1.fullname ➞ "John Smith"

a1.initials ➞ "J.S"
Notes
Make sure only the first letter of each name is capitalised.
Check the Resources tab for some helpful tutorials on JavaScript classes.
*/
class Name {
	constructor(fname, lname) {
    this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
    this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
  }
  get fullname() {
    return this.fname + ' ' + this.lname;
  }
  get initials() {
    return this.fname[0] + '.' + this.lname[0];
  }
}

// Testing
let a1 = new Name('john', 'SMITH');
let a2 = new Name('sARah', 'fRolliE');

console.log(a1.fname);
console.log(a1.lname);
console.log(a1.fullname);
console.log(a1.initials);

console.log(a2.fname);
console.log(a2.lname);
console.log(a2.fullname);
console.log(a2.initials);