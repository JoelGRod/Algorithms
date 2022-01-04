/**
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

/**
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

/**
 * Given a time in 12-hour AM/PM format, convert it
 * to military (24-hour) time.
 * Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 *
 * Sample Input
 * 07:05:45PM
 * Sample Output
 * 19:05:45
 */

function timeConversion(s) {
  // Write your code here
  const formatted = s.includes("AM")
    ? s.replace(/AM/, " AM")
    : s.replace(/PM/, " PM");

  let [hours, minutes, secondsAndModifier] = formatted.split(":");
  const [seconds, modifier] = secondsAndModifier.split(" ");

  if (hours === "12") hours = "00";
  if (modifier === "PM") hours = parseInt(hours) + 12;

  return `${hours}:${minutes}:${seconds}`;
}

/**
 * Find the Median
 * [1,4,5,3,7,6,9] -> [1,3,4,5,6,7,9] -> 5
 */

function findMedian(arr) {
  // Write your code here
  const sorted = arr.sort((a, b) => a - b);
  return arr[(sorted.length - 1) / 2];
}

function findMedianExtra(arr) {
  // Write your code here
  const sorted = arr.sort((a, b) => a - b);
  return arr[parseInt(sorted.length / 2)];
}
