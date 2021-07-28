"use strict";
/**
 * Given a number return its complete multiplication table.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplyNumbers = exports.printResults = void 0;
function printResults(resultsList) {
    resultsList.map(result => console.log(result));
}
exports.printResults = printResults;
function multiplyNumbers(digit) {
    let multiplicationResults = [];
    multiplicationResults.push(`Multiplication table of ${digit}`);
    for (let i = 1; i <= 10; i++) {
        multiplicationResults.push(`${i} x ${digit} = ${i * digit}`);
    }
    return multiplicationResults;
}
exports.multiplyNumbers = multiplyNumbers;
