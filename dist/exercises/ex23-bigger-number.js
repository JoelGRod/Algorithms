"use strict";
/**
 * Given a two numbers, define which is bigger and which is smaller
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.printBiggerSmaller = exports.findSmaller = exports.findBigger = void 0;
// This is useless, Math.max... are declarative itself
function findBigger(digitOne, digitTwo) {
    return Math.max(digitOne, digitTwo);
}
exports.findBigger = findBigger;
function findSmaller(digitOne, digitTwo) {
    return Math.min(digitOne, digitTwo);
}
exports.findSmaller = findSmaller;
function printBiggerSmaller(digitOne, digitTwo) {
    return (digitOne === digitTwo) ?
        "The numbers are of the same value" :
        `Bigger number is: ${Math.max(digitOne, digitTwo)} \nSmaller number is: ${Math.min(digitOne, digitTwo)}`;
}
exports.printBiggerSmaller = printBiggerSmaller;
