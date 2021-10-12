"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const charactersAppearsOnce = (text) => {
    const chars = text.toLowerCase().split("");
    // 1 - Create a char classifier
    const charMap = {};
    chars.map(char => {
        if (char in charMap)
            charMap[char]++;
        else
            charMap[char] = 1;
    });
    // 2 - Separate chars that appears once
    const result = [];
    for (let char in charMap) {
        if (charMap[char] === 1)
            result.push(char);
    }
    ;
    return [result, result[0]];
};
exports.default = charactersAppearsOnce;
