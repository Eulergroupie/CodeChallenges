/*
Caesar's Cipher
Julius Caesar protected his confidential information by encrypting it using a
cipher. Caesar's cipher (check Resources tab for more info) shifts each letter
by a number of letters. If the shift takes you past the end of the alphabet,
just rotate back to the front of the alphabet. In the case of a rotation by 3,
w, x, y and z would map to z, a, b and c.

Create a function that takes a string s (text to be encrypted) and an integer k
(the rotation factor). It should return an encrypted string.

Examples
caesarCipher("middle-Outz", 2) ➞ "okffng-Qwvb"

// m -> o
// i -> k
// d -> f
// d -> f
// l -> n
// e -> g
// -    -
// O -> Q
// u -> w
// t -> v
// z -> b

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)
➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

caesarCipher("A friend in need is a friend indeed", 20)
➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"
Notes
All test input will be a valid ASCII string.
*/

function caesarConvert(c, k) {
  let n = c.charCodeAt(0);
  if(n > 64 && n < 91) {
    return String.fromCharCode((n - 65 + k) % 26 + 65);
  } else if(n > 96 && n < 123) {
    return String.fromCharCode((n - 97 + k) % 26 + 97);
  } else {
    return c;
  }
}

// Testing caesarConvert
console.log(caesarConvert('m', 2), 'o');
console.log(caesarConvert('L', 5), 'Q');
console.log(caesarConvert('-', 2), '-');

function caesarCipher(s, k) {
  let result = '';
  for(c of s) {
    result += caesarConvert(c, k);
  }
  return result;
}

// Testing
console.log(caesarCipher("middle-Outz", 2), "okffng-Qwvb")
console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5), "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj")
console.log(caesarCipher("A friend in need is a friend indeed", 20), "U zlcyhx ch hyyx cm u zlcyhx chxyyx")
console.log(caesarCipher("A Fool and His Money Are Soon Parted.", 27), "B Gppm boe Ijt Npofz Bsf Tppo Qbsufe.")
console.log(caesarCipher("One should not worry over things that have already happened and that cannot be changed.", 49), "Lkb pelria klq tloov lsbo qefkdp qexq exsb xiobxav exmmbkba xka qexq zxkklq yb zexkdba.")
console.log(caesarCipher("Back to Square One is a popular saying that means a person has to start over, similar to: back to the drawing board.", 126), "Xwyg pk Omqwna Kja eo w lklqhwn owuejc pdwp iawjo w lanokj dwo pk opwnp kran, oeiehwn pk: xwyg pk pda znwsejc xkwnz.")
