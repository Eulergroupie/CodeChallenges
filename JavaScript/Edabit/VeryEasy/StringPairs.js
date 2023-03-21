/* String Pairs
Create a function that takes a string str and returns an array of two-paired 
characters. If the string has an odd number of characters, add an asterisk * 
in the final pair.

See the below examples for a better understanding:

Examples
stringPairs("mubashir") ➞ ["mu", "ba", "sh", "ir"]

stringPairs("edabit") ➞ ["ed", "ab", "it"]

stringPairs("airforces") ➞ ["ai", "rf", "or", "ce", "s*"]
Notes
Return [] if the given string is empty. */

function stringPairs(str) {
	const result = [];
    for(let i = 0; i < str.length; i+=2) {
        result.push(str[i] + (i == str.length - 1 ? '*' : str[i+1]));
    }
    return result;
}

console.log(stringPairs("abcdef"), ["ab", "cd", "ef"])
console.log(stringPairs("abcdefg"), ["ab", "cd", "ef", "g*"])
console.log(stringPairs(""), [])
console.log(stringPairs("pak"), ["pa", "k*"])
console.log(stringPairs("mubashir"), ["mu", "ba", "sh", "ir"])
console.log(stringPairs("edabit"), ["ed", "ab", "it"])
console.log(stringPairs("airforces"), ["ai", "rf", "or", "ce", "s*"])