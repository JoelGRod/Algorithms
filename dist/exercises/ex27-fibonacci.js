"use strict";
/**
 * Returns the fibonacci sequence sum
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoizedFibo = exports.fiboRecursive = exports.fibonacci = void 0;
// General Fibonacci O(n)
function fibonacci(digit) {
    let fiboList = [0, 1];
    for (let i = 2; i <= digit; i++) {
        fiboList[i] = fiboList[i - 1] + fiboList[i - 2];
    }
    return fiboList[digit];
}
exports.fibonacci = fibonacci;
// Recursive Fibonacci O(2^n)
function fiboRecursive(digit) {
    if (digit <= 1)
        return digit; // Base Case
    return fiboRecursive(digit - 1) + fiboRecursive(digit - 2); // Recursive Call
}
exports.fiboRecursive = fiboRecursive;
// Recursive memoized fibonacci O(n) with stacks problems
let memo = [];
function memoizedFibo(digit) {
    if (memo[digit] !== undefined)
        return memo[digit]; // If calculus already done, return it
    if (digit <= 1) { // Base Case
        memo[digit] = digit;
        return digit;
    }
    ;
    memo[digit] = memoizedFibo(digit - 1) + memoizedFibo(digit - 2); // Recursive Call
    return memo[digit];
}
exports.memoizedFibo = memoizedFibo;
