/*
Capitalize by ASCII
Create a function that takes a string as input and capitalizes a letter if its
ASCII code is even and returns its lower case version if its ASCII code is odd.

Examples
asciiCapitalize("to be or not to be!") ➞ "To Be oR NoT To Be!"

asciiCapitalize("THE LITTLE MERMAID") ➞ "THe LiTTLe meRmaiD"

asciiCapitalize("Oh what a beautiful morning.") ➞ "oH wHaT a BeauTiFuL moRNiNg."
Notes
N/A
*/

function asciiCapitalize(str) {
  /*
	let result = '';
  for(let chr of str) {
    result += chr.charCodeAt(0) % 2 ? chr.toLowerCase() : chr.toUpperCase();
  }
  return result;
  */
 return [...str].reduce((s, x) => s + (x.charCodeAt(0) % 2 ? x.toLowerCase() : x.toUpperCase()), '');
}


//Testing
console.log(asciiCapitalize("Oh what a beautiful morning."), "oH wHaT a BeauTiFuL moRNiNg.")
console.log(asciiCapitalize("THE LITTLE MERMAID"), "THe LiTTLe meRmaiD")
console.log(asciiCapitalize("to be or not to be!"), "To Be oR NoT To Be!")
