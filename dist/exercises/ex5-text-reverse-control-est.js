"use strict";
/**
 * Given a string reverse it using control structures only.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = void 0;
function reverseString(text) {
    let reversedText = "";
    for (let i = 0; i <= text.length - 1; i++) {
        reversedText = text[i] + reversedText;
    }
    return reversedText;
}
exports.reverseString = reverseString;
