"use strict";
/**
 * Given a text and a search word, replace each occurrence of the word with CENSORED.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.censorWord = void 0;
function censorWord(text = "", word = "") {
    if (!text && !word)
        return "No text and search word added";
    if (!text)
        return "No text added";
    if (!word)
        return "No search word added";
    const re = new RegExp(word, 'gi');
    return text.replace(re, '[-CENSORED-]');
}
exports.censorWord = censorWord;
