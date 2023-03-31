/* Finding Nemo
You're given a string of words. You need to find the word "Nemo", and return 
a string like this: "I found Nemo at [the order of the word you find Nemo]!".

If you can't find Nemo, return "I can't find Nemo :(".

Examples
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

findNemo("Nemo is me") ➞ "I found Nemo at 1!"

findNemo("I Nemo am") ➞ "I found Nemo at 2!"
Notes
! , ? . are always separated from the last word.
Nemo will always look like Nemo, and not NeMo or other capital variations.
Nemo's, or anything that says Nemo with something behind it, doesn't count as 
Finding Nemo.
If there are multiple Nemo's in the sentence, only return the first one. */

function findNemo(sentence) {
	const words = sentence.split(' ');
    for(let i = 0; i < words.length; i++) {
        if(/^Nemo$/.test(words[i]))
            return `I found Nemo at ${i + 1}!`;
    }
    return "I can't find Nemo :(";
} 

console.log(findNemo("I am Ne mo Nemo !"), "I found Nemo at 5!");
console.log(findNemo("N e m o is NEMO NeMo Nemo !"), "I found Nemo at 8!");
console.log(findNemo("I am Nemo's dad Nemo senior ."), "I found Nemo at 5!");
console.log(findNemo("Oh, hello !"), "I can't find Nemo :(");
console.log(findNemo("Is it Nemos, Nemona, Nemoor or Garfield?"), "I can't find Nemo :(");
console.log(findNemo("Nemo is a clown fish, he has white and orange stripes. Nemo , come back!"), "I found Nemo at 1!");