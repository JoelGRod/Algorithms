"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const squareNumbers = (squareNumber) => {
    const squared = {};
    for (let i = 1; i <= squareNumber; i++) {
        squared[`${i} ^ 2`] = Math.pow(i, 2);
    }
    return squared;
};
exports.default = squareNumbers;
