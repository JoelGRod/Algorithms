"use strict";
/**
 * Ex 25: Given a number array and a number, return true if the array
 * values are a permutation of number, false otherwise.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPermitationAlt = exports.isPermutation = void 0;
/**
 * Problems with this solution:
 * 1- The array must be ordered.
 * 2- The array needs to be of exact length.
*/
function isPermutation(digitList, digit) {
    for (let i = 1; i <= digit; i++) {
        if (digitList[i - 1] !== i || digitList.length !== digit)
            return false;
    }
    return true;
}
exports.isPermutation = isPermutation;
/**
 * Problems with this solution:
 * 1- The aray does not have to be ordered (maybe this is not a problem).
 * 2- The array length can be greater than the entered digit.
*/
function isPermitationAlt(digitList, digit) {
    for (let i = 0; i < digit; i++) {
        if (digitList.indexOf(i + 1) < 0)
            return false;
    }
    return true;
}
exports.isPermitationAlt = isPermitationAlt;
