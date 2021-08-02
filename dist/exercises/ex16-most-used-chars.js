"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMostUsedChar = void 0;
function findMostUsedChar(text) {
    let charMap = {};
    text.trim()
        .toLowerCase()
        .replace(/[\s.!?¿¡]/g, "")
        .split('')
        .forEach(char => {
        if (char in charMap)
            ++charMap[char];
        else
            charMap[char] = 1;
    });
    let maxChar = "";
    for (let char in charMap) {
        if (maxChar === "" || charMap[maxChar] < charMap[char])
            maxChar = char;
    }
    return `The most used char is: ${maxChar}`;
}
exports.findMostUsedChar = findMostUsedChar;
