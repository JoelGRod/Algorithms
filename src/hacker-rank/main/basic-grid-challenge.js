/**
 * Grid Challenge
 * ALPHABETIC ORDER IN GRID
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
