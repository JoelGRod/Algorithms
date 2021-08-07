"use strict";
/**
 * Given a number return true if capicua, false otherwise
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCapicua = void 0;
function checkCapicua(digit) {
    return digit === parseInt(digit.toString().split('').reverse().join(''))
        ? true : false;
}
exports.checkCapicua = checkCapicua;
