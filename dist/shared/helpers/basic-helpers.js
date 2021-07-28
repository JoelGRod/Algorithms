"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTextListResults = exports.normalizeText = void 0;
function normalizeText(text) {
    return text.toLowerCase().replace(/[!.,]/g, '').trim();
}
exports.normalizeText = normalizeText;
function printTextListResults(resultsList) {
    resultsList.map(result => console.log(result));
}
exports.printTextListResults = printTextListResults;
