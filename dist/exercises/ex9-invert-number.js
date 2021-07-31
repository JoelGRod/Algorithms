"use strict";
/**
 * Invert a number and return it: 59 -> 95
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.invertNumber = void 0;
function invertNumber(digit) {
    return parseInt(digit.toString().split('').reverse().join(''));
}
exports.invertNumber = invertNumber;
