/**
 * Two players are playing a game of Tower Breakers!
 * Player  always moves first, and both players always play
 * optimally.The rules of the game are as follows:
 *
 * Initially there are n towers.
 * Each tower is of height m.
 * The players move in alternating turns.
 * In each turn, a player can choose a tower of height x and
 * reduce its height to y, where 1 <= y < x and y evenly x divides .
 * If the current player is unable to make a move, they lose the game.
 * Given the values of n and m, determine which player will win. If the
 * first player wins, return 1. Otherwise, return 2.
 *
 * Sample Input
 * STDIN   Function
 * -----   --------
 * 2       t = 2
 * 2 2     n = 2, m = 2
 * 1 4     n = 1, m = 4
 *
 * Sample Output
 * 2
 * 1
 */

function towerBreakers(n, m) {
  // Write your code here
  if (m === 1) return 2;
  return n % 2 === 0 ? 2 : 1;
}

/**
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
