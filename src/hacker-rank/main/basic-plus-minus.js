/**
 * Plus Minus
 * Given an array of integers, calculate the ratios of its elements
 * that are positive, negative, and zero. Print the decimal value of
 * each fraction on a new line with 6 places after the decimal.
 *
 * Sample Input:
 * STDIN           Function
 * -----           --------
 * 6               arr[] size n = 6
 * -4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
 *
 * Sample Output:
 * 0.500000
 * 0.333333
 * 0.166667
 */

function plusMinus(arr) {
  // Write your code here
  const arrayLength = arr.length;
  let positive = 0,
    negative = 0,
    zeros = 0;
  arr.map((value) => {
    if (value > 0) positive++;
    if (value < 0) negative++;
    if (value === 0) zeros++;
  });
  console.log(
    (positive / arrayLength).toFixed(6) +
      "\n" +
      (negative / arrayLength).toFixed(6) +
      "\n" +
      (zeros / arrayLength).toFixed(6)
  );
}
