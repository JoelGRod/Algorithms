/**
 * Lonely Integer
 * Given an array of integers, where all elements but one
 * occur twice, find the unique element.
 *
 * Example
 * arr = [1,2,3,4,3,2,1]
 * The unique element is 4
 */

function lonelyinteger(a) {
  // Write your code here
  const classifier = {};
  a.forEach((value) => {
    value in classifier ? classifier[value]++ : (classifier[value] = 1);
  });

  for (let value in classifier) if (classifier[value] === 1) return value;
}
