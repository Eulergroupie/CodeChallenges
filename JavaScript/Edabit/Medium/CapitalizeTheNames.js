/* Capitalize the Names
Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

Examples
capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]

capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
Notes
Don't change the order of the original array.
Notice in the second example above, "MABELLE" is returned as "Mabelle". */

/*const capMe = r =>
    r.map(x => [...x].reduce((s, c, i) => s + (i == 0 ? c.toUpperCase() : c.toLowerCase()), '')); */

const capMe = r => r.map(x => x.toLowerCase().replace(/^./, c => c.toUpperCase()));

console.log(capMe(['mavis', 'senaida', 'letty']), ['Mavis', 'Senaida', 'Letty'])
console.log(capMe(['samuel', 'MABELLE', 'letitia', 'meridith']), ['Samuel', 'Mabelle', 'Letitia', 'Meridith'])
console.log(capMe(['Slyvia', 'Kristal', 'Sharilyn', 'Calista']), ['Slyvia', 'Kristal', 'Sharilyn', 'Calista'])
console.log(capMe(['krisTopher', 'olIva', 'herminiA']), ['Kristopher', 'Oliva', 'Herminia'])
console.log(capMe(['luke', 'marsha', 'stanford']), ['Luke', 'Marsha', 'Stanford'])
console.log(capMe(['kara']), ['Kara'])
console.log(capMe(['mARIANN', 'jOI', 'gEORGEANN']), ['Mariann', 'Joi', 'Georgeann'])
