"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asterisksTriangle = (digit) => {
    const width = (digit * 2) - 1;
    let result = "";
    for (let row = 1; row <= digit; row++) {
        let paintedRow = "";
        let whiteSpaces = (digit - row) * 2;
        paintedRow += " ".repeat(whiteSpaces / 2);
        paintedRow += "*".repeat(width - whiteSpaces);
        paintedRow += " ".repeat(whiteSpaces / 2);
        result += `${paintedRow}\n`;
    }
    return result;
};
exports.default = asterisksTriangle;
