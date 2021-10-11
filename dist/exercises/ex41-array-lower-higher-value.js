"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayLowerHigher = (numbers) => {
    const response = {
        lower: 0,
        higher: 0,
    };
    numbers.sort((a, b) => a - b);
    response.higher = numbers[numbers.length - 1];
    response.lower = numbers[0];
    return response;
};
exports.default = arrayLowerHigher;
