"use strict";
/**
 * Given a text, return text to lowercase if the number of
 * lowercase letters is greater than uppercase letters
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperOrLowerCaseAlt = exports.toUpperOrLowerCase = void 0;
function toUpperOrLowerCase(text) {
    var _a, _b;
    let uppers = (_a = text.match(/[A-Z]/g)) === null || _a === void 0 ? void 0 : _a.length;
    let lowers = (_b = text.match(/[a-z]/g)) === null || _b === void 0 ? void 0 : _b.length;
    if (uppers === undefined)
        uppers = 0;
    if (lowers === undefined)
        lowers = 0;
    return uppers > lowers ? text.toUpperCase() : text.toLowerCase();
}
exports.toUpperOrLowerCase = toUpperOrLowerCase;
function toUpperOrLowerCaseAlt(text) {
    let upper = 0, lower = 0;
    // const regexUpper = new RegExp('[A-Z]', 'g');
    // const regexlower = new RegExp('[a-z]', 'g');
    for (let char of text) {
        if (/[A-Z]/.test(char))
            upper++;
        if (/[a-z]/.test(char))
            lower++;
    }
    return upper > lower ? text.toUpperCase() : text.toLowerCase();
}
exports.toUpperOrLowerCaseAlt = toUpperOrLowerCaseAlt;
