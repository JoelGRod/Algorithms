"use strict";
/**
 * Given a string and a number, returns the string with only the specified number of characters
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.cutText = void 0;
function cutText(text, length) {
    return (typeof text === "string" && typeof length === "number") ?
        text.substring(0, length) :
        "Invalid Input data";
}
exports.cutText = cutText;
