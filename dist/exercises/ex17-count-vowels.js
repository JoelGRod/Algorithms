"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countVowels = void 0;
function countVowels(text) {
    let vowels = text.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}
exports.countVowels = countVowels;
