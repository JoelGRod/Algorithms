/**
 * Min-Max Sum
 * Given five positive integers, find the minimum and maximum
 * values that can be calculated by summing exactly four
 * of the five integers. Then print the respective minimum
 * and maximum values as a single line of two space-separated long integers.
 *
 * Sample Input
 * 1 2 3 4 5
 * Sample Output
 * 10 14
 */

function miniMaxSum(arr) {
  // Write your code here
  const min = arr
    .sort((a, b) => a - b)
    .slice(0, 4)
    .reduce((prev, current) => prev + current);
  const max = arr
    .sort((a, b) => b - a)
    .slice(0, 4)
    .reduce((prev, current) => prev + current);

  console.log(`${min} ${max}`);
}
