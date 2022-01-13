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
