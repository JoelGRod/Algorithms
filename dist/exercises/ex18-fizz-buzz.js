"use strict";
/**
 * FizzBuzz Logic problem.
 * Returns fizz with multiples of 3,
 * buzz with multiples of 5,
 * fizzbuzz with multiples of 3 and 5.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.printFizzBuzz = exports.fizzBuzz = void 0;
function fizzBuzz(digit) {
    if (!(digit % 3) && !(digit % 5))
        return "fizzbuzz";
    if (!(digit % 3))
        return "fizz";
    if (!(digit % 5))
        return "buzz";
    return digit;
}
exports.fizzBuzz = fizzBuzz;
function printFizzBuzz(digit) {
    for (let i = 1; i <= digit; i++) {
        console.log(fizzBuzz(i));
    }
}
exports.printFizzBuzz = printFizzBuzz;
