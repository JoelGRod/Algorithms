/**
 * Caesar Cypher
 * Julius Caesar protected his confidential information by
 * encrypting it using a cipher. Caesar's cipher shifts each
 * letter by a number of letters. If the shift takes you past
 * the end of the alphabet, just rotate back to the front of
 * the alphabet. In the case of a rotation by 3, w, x, y and z
 * would map to z, a, b and c.
 *
 * Original alphabet:      abcdefghijklmnopqrstuvwxyz
 * Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
 *
 * Sample Input
 * 11
 * middle-Outz
 * 2
 *
 * Sample Output
 * okffng-Qwvb
 */

function caesarCipher(s, k) {
  // Write your code here
  const cypher = {};
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  k = k % 26;

  for (let i = 0; i < alphabet.length; i++) {
    if (i + k < alphabet.length) {
      cypher[alphabet.charAt(i)] = alphabet.charAt(i + k);
    } else {
      cypher[alphabet.charAt(i)] = alphabet.charAt(i - 26 + k);
    }
  }

  return s
    .split("")
    .map((letter) => {
      if (
        letter.toUpperCase() === letter &&
        alphabet.includes(letter.toLowerCase())
      )
        return cypher[letter.toLowerCase()].toUpperCase();
      if (!alphabet.includes(letter)) return letter;
      return cypher[letter];
    })
    .join("");
}
