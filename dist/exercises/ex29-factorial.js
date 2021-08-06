"use strict";
/**
 * Given a number return the factorial.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorialRecursive = exports.factorial = void 0;
function factorial(digit) {
    let result = 1;
    for (let current = 2; current <= digit; current++) {
        result *= current;
    }
    return result;
}
exports.factorial = factorial;
function factorialRecursive(digit) {
    if (digit <= 1)
        return 1;
    return factorialRecursive(digit - 1) * digit;
}
exports.factorialRecursive = factorialRecursive;
