/**
 * Zig Zag Sequence
 * In this challenge, the task is to debug the existing code 
 * to successfully execute all provided test files.
 * 
 * Given an array of n distinct integers, transform the array 
 * into a zig zag sequence by permuting the array elements. 
 * A sequence will be called a zig zag sequence if the first k  
 * elements in the sequence are in increasing order and the last k  
 * elements are in decreasing order, where k=(n+1)/2. You need to find 
 * the lexicographically smallest zig zag sequence of the given array.
 * 
 * Example.
 * a = [2,3,5,1,4]
 * 
 * Now if we permute the array as [1,4,5,3,2], the result is 
 * a zig zag sequence.
 * Debug the given function findZigZagSequence to return the 
 * appropriate zig zag sequence for the given input array.
 */

// PYTHON 3
//  void findZigZagSequence(vector < int > a, int n){
//   sort(a.begin(), a.end());
//   int mid = (n + 1)/2;
//   swap(a[mid], a[n-1]);

//   int st = mid + 1;
//   int ed = n - 1;
//   while(st <= ed){
//       swap(a[st], a[ed]);
//       st = st + 1;
//       ed = ed + 1;
//   }
//   for(int i = 0; i < n; i++){
//       if(i > 0) cout << " ";
//       cout << a[i];
//   }
//   cout << endl;
// }


/**
 * Tower Breakers
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
