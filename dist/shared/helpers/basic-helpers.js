"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharMap = exports.printTextListResults = exports.normalizeText = void 0;
function normalizeText(text) {
    return text.toLowerCase().replace(/[!.,]/g, '').trim();
}
exports.normalizeText = normalizeText;
function printTextListResults(resultsList) {
    resultsList.map(result => console.log(result));
}
exports.printTextListResults = printTextListResults;
function getCharMap(text) {
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
    return charMap;
}
exports.getCharMap = getCharMap;
