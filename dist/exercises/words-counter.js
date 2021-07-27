"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countWords = void 0;
const text_chain = "Hola, esto es un texto de prueba mediante el cual se " +
    "pretende contar cada una de las palabras que tiene y " +
    "mostrar este conteo por la consola... Espero que te diviertas!";
function normalize(word) {
    return word.toLowerCase().replace(/[!.,]/g, '');
}
function countWords(text = text_chain) {
    let counterList = {};
    const wordsList = text.trim().split(' ');
    wordsList.map(word => {
        normalize(word) in counterList ?
            ++counterList[normalize(word)] :
            counterList[normalize(word)] = 1;
    });
    return counterList;
}
exports.countWords = countWords;
