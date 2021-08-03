"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMostUsedChar = void 0;
const basic_helpers_1 = require("../shared/helpers/basic-helpers");
function findMostUsedChar(text) {
    let charMap = basic_helpers_1.getCharMap(text);
    let maxChar = "";
    for (let char in charMap) {
        if (maxChar === "" || charMap[maxChar] < charMap[char])
            maxChar = char;
    }
    return maxChar;
}
exports.findMostUsedChar = findMostUsedChar;
