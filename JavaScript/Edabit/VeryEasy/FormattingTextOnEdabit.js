/* Formatting Text on Edabit
Edabit allows for markdown formatting, meaning that it's possible to format 
words by surrounding text with special characters. For example, to get bold 
text, you surround the text with double asterisks, like this **bold**.

Here is a list of the possible formatting options in Edabit and how to apply them:

**bold**
_italics_
`inline code`
~~strikethrough~~

Challenge
Given a string and a style character, return the newly formatted string. Style 
characters are single letters that represent the different types of formatting.

For the purposes of this challenge, the style characters are as follows:

"b" is for bold
"i" is for italics
"c" is for inline code
"s" is for strikethrough
Examples
mdFormat("Bold", "b") ➞ "**Bold**"

mdFormat("leaning text", "i") ➞ "_leaning text_"

mdFormat("Edabit", "c") ➞ "`Edabit`"

mdFormat("That's a strike!", "s") ➞ "~~That's a strike!~~"
Notes
Remember to format your comments! */
const md = {b:'**', i:'_', c:'`', s:'~~'};
const mdFormat = (word, s) => md[s] + word + md[s];


console.log(mdFormat("Bold", "b"), "**Bold**")
console.log(mdFormat("Italics", "i"), "_Italics_")
console.log(mdFormat("Code", "c"), "`Code`")
console.log(mdFormat("Ruby", "s"), "~~Ruby~~")
console.log(mdFormat("JavaScript", "b"), "**JavaScript**")
console.log(mdFormat("Python", "i"), "_Python_")
console.log(mdFormat("C++", "c"), "`C++`")
console.log(mdFormat("Strikethrough", "s"), "~~Strikethrough~~")