/**
 * Given a square grid of characters in the range ascii[a-z],
 * rearrange elements of each row alphabetically, ascending.
 * Determine if the columns are also in ascending alphabetical
 * order, top to bottom. Return YES if they are or NO if they are not.
 *
 * Example
 * grid = ['abc', 'ade', 'efg']
 * The grid is illustrated below.
 * a b c
 * a d e
 * e f g
 * The rows are already in alphabetical order.
 * The columns a a e, b d f and c e g are also in alphabetical order,
 * so the answer would be YES. Only elements within the same row can
 * be rearranged. They cannot be moved to a different row.
 *
 * Sample Input
 * STDIN   Function
 * -----   --------
 * 1       t = 1
 * 5       n = 5
 * ebacd   grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
 * fghij
 * olmkn
 * trpqs
 * xywuv
 *
 * Sample Output
 * YES
 *
 * Explanation
 * The 5x5 grid in the  test case can be reordered to
 * abcde
 * fghij
 * klmno
 * pqrst
 * uvwxy
 *
 * This fulfills the condition since the rows 1, 2, ..., 5
 * and the columns 1, 2, ..., 5 are all alphabetically sorted.
 */

function gridChallenge(grid) {
  // Write your code here
  const texts = grid.map((el) => {
    return el.split("").sort().join("");
  });
  for (let row in texts) {
    if (row == 0) continue;
    for (let col in texts[row]) {
      if (texts[row][col] < texts[row - 1][col]) return "NO";
    }
  }
  return "YES";
}

/**
 * We define super digit of an integer x using the following rules:
 * Given an integer, we need to find the super digit of the integer.
 *
 * If x has only 1 digit, then its super digit is x.
 * Otherwise, the super digit of x is equal to the super digit of
 * the sum of the digits of x.
 *
 * For example, the super digit of 9875 will be calculated as:
 * 	super_digit(9875)   	9+8+7+5 = 29
 * 	super_digit(29) 	2 + 9 = 11
 * 	super_digit(11)		1 + 1 = 2
 * 	super_digit(2)		= 2
 *
 * Example
 * n = 9875
 * k = 4
 * The number p is created by concatenating the string n k times so the initial:
 * p = 9875987598759875
 *     superDigit(p) = superDigit(9875987598759875)
 *                   9+8+7+5+9+8+7+5+9+8+7+5+9+8+7+5 = 116
 *     superDigit(p) = superDigit(116)
 *                   1+1+6 = 8
 *     superDigit(p) = superDigit(8)
 */

function superDigit(n, k) {
  // Write your code here
  const result =
    n.toString()
     .split("")
     .map(Number)
     .reduce((accum, current) => accum + current, 0) * k;
  return result <= 9 ? result : superDigit(result, 1);
}
