/**
 * Recursive Digit Sum
 * SUPER DIGIT RECURSIVE
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
    n
      .toString()
      .split("")
      .map(Number)
      .reduce((accum, current) => accum + current, 0) * k;
  return result <= 9 ? result : superDigit(result, 1);
}
