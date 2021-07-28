"use strict";
/**
 * Given a string and a search word determinate if this word appears in the string.
 * string.trim() string.split()
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.countEspecificWord = void 0;
const basic_helpers_1 = require("../shared/helpers/basic-helpers");
function countEspecificWord(text, wordToSearch) {
    const words = text.trim().split(' ');
    let counter = 0;
    words.map(word => {
        if (basic_helpers_1.normalizeText(word) === basic_helpers_1.normalizeText(wordToSearch))
            counter++;
    });
    return counter;
}
exports.countEspecificWord = countEspecificWord;
