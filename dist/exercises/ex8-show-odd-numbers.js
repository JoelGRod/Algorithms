"use strict";
/**
 * Return total odd numbers between two digits
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOddNumbers = void 0;
function getOddNumbers(min, max) {
    let counter = 0;
    for (let i = min; i <= max; i++) {
        if (i % 2 !== 0)
            counter++;
    }
    return counter;
}
exports.getOddNumbers = getOddNumbers;
