"use strict";
/**
 * Given an array return a new one with the first and last digit
 */
Object.defineProperty(exports, "__esModule", { value: true });
const getFirstAndLast = (numberArray) => {
    if (numberArray.length <= 1)
        return "Not a valid number array";
    const newArray = [...numberArray];
    return [newArray.shift(), newArray.pop()];
};
exports.default = getFirstAndLast;
