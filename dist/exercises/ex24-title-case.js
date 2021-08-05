"use strict";
/**
 * Given a string returns it converted to titlecase string.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTitleCase = exports.toTitleCaseRegExp = void 0;
function toTitleCaseRegExp(text) {
    return text.toLowerCase().replace(/\b\w/gi, (char) => char.toUpperCase());
}
exports.toTitleCaseRegExp = toTitleCaseRegExp;
function toTitleCase(text) {
    let charList = text.toLowerCase().split('');
    let lastChar = "";
    for (let i = 0; i < charList.length; i++) {
        if (i === 0 || lastChar === " ")
            charList[i] = charList[i].toUpperCase();
        lastChar = charList[i];
    }
    return charList.join('');
}
exports.toTitleCase = toTitleCase;
