"use strict";
/**
 * Count the Words from a string.
 * We use string.split, string.toLowerCase, string.replace, string.trim and array.map
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.countWords = void 0;
const basic_helpers_1 = require("../shared/helpers/basic-helpers");
const text_chain = "Hola, esto es un texto de prueba mediante el cual se " +
    "pretende contar cada una de las palabras que tiene y " +
    "mostrar este conteo por la consola... Espero que te diviertas!";
// O(n)
function countWords(text = text_chain) {
    let counterMap = {};
    const wordsList = text.trim().split(' ');
    wordsList.map(word => {
        basic_helpers_1.normalizeText(word) in counterMap ?
            ++counterMap[basic_helpers_1.normalizeText(word)] :
            counterMap[basic_helpers_1.normalizeText(word)] = 1;
    });
    return counterMap;
}
exports.countWords = countWords;
