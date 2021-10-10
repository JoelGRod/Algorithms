import { normalizeText } from "../shared/helpers/basic-helpers";

interface Response {
    vocals: number;
    consonants: number;
};

const getVocalsAndConsonants = (text: string): Response => {

    const counter: Response = {
        vocals: 0,
        consonants: 0
    };

    const letters = text
        .toLowerCase()
        .trim()
        .split('')
        .filter(letter => /[a-záéíóú]/i.test(letter));
    
    letters.map(letter => {
        if(/[aeiouáéíóú]/i.test(letter)) counter.vocals++;
        else if(/[^aeiouáéíóú]/.test(letter)) counter.consonants++;
    });

    return counter;
}

export default getVocalsAndConsonants;

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