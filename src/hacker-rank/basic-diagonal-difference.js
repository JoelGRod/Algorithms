/**
 * Diagonal Difference
 * Given a square matrix, calculate the absolute difference
 * between the sums of its diagonals.
 *
 * For example, the square matrix  arr is shown below:
 * 1 2 3
 * 4 5 6
 * 9 8 9
 *
 * Sample Input
 * 3
 * 11 2 4
 * 4 5 6
 * 10 8 -12
 *
 * Sample Output
 * 15
 *
 * Explanation
 *
 * The primary diagonal is:
 * 11
 *    5
 *      -12
 *
 * Sum across the primary diagonal: 11 + 5 - 12 = 4
 * The secondary diagonal is:
 *      4
 *    5
 * 10
 *
 * Sum across the secondary diagonal: 4 + 5 + 10 = 19
 * Difference: |4 - 19| = 15
 */

function diagonalDifference(arr) {
  // Write your code here
  let diagOne = 0,
    diagTwo = 0;
  for (let i = 0; i < arr.length; i++) {
    diagOne += arr[i][i];
    arr[i].reverse();
    diagTwo += arr[i][i];
  }
  return Math.abs(diagOne - diagTwo);
}
