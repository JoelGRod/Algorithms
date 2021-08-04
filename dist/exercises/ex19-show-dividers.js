"use strict";
/**
 * Given a number prints all the dividers
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.showDividers = exports.isDivisible = void 0;
function isDivisible(digit, divisor) {
    if (digit % divisor === 0)
        return true;
    return false;
}
exports.isDivisible = isDivisible;
function showDividers(digit) {
    for (let i = 0; i <= digit; i++) {
        if (isDivisible(digit, i))
            console.log(i);
    }
}
exports.showDividers = showDividers;
