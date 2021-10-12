"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTwoWordsValues = (words) => {
    return words.filter((word) => word.includes(" "));
};
exports.default = getTwoWordsValues;
