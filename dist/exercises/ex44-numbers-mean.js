"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getMean = (numbers) => {
    return numbers.reduce((previous, current) => previous + current) / numbers.length;
};
exports.default = getMean;
