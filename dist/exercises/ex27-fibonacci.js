"use strict";
/**
 * Returns the fibonacci sequence sum
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacci = void 0;
function fibonacci(digit) {
    let fiboList = [0, 1];
    for (let i = 2; i <= digit; i++) {
        fiboList[i] = fiboList[i - 1] + fiboList[i - 2];
    }
    return fiboList.reduce((acumulator, digit) => acumulator += digit, 0);
}
exports.fibonacci = fibonacci;
