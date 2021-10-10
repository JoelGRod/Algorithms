"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const getVocalsAndConsonants = (text) => {
    const counter = {
        vocals: 0,
        consonants: 0
    };
    const letters = text
        .toLowerCase()
        .trim()
        .split('')
        .filter(letter => /[a-záéíóú]/i.test(letter));
    letters.map(letter => {
        if (/[aeiouáéíóú]/i.test(letter))
            counter.vocals++;
        else if (/[^aeiouáéíóú]/.test(letter))
            counter.consonants++;
    });
    return counter;
};
exports.default = getVocalsAndConsonants;
// const getVocalsAndConsonants = (text: string): Response => {
//     const counter: Response = {
//         vocals: 0,
//         consonants: 0
//     };
//     const letters = normalizeText(text).split('');
//     letters.map(letter => {
//         if(/[aeiouáéíóú]/.test(letter)) counter.vocals++;
//         else if(/[^aeiouáéíóú \d]/.test(letter)) counter.consonants++;
//     });
//     return counter;
// }
