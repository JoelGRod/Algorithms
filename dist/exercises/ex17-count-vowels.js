"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countVowels = void 0;
function countVowels(text) {
    let vowels = text.match(/[aeiou]/gi);
    if (vowels)
        return vowels.length;
    return 0;
}
exports.countVowels = countVowels;
