/**
 * Count the Words from a string.
 * We use string.split, string.toLowerCase, string.replace, string.trim and array.map
 */

import { normalizeText } from "../shared/helpers/basic-helpers";

const text_chain: string = "Hola, esto es un texto de prueba mediante el cual se " +
    "pretende contar cada una de las palabras que tiene y " +
    "mostrar este conteo por la consola... Espero que te diviertas!";

// O(n)
export function countWords( text: string = text_chain ) {

    let counterMap: { [ key: string ]: number } = {};
    const wordsList = text.trim().split(' ');

    wordsList.map( word => {
        normalizeText(word) in counterMap ? 
            ++counterMap[normalizeText(word)] : 
            counterMap[normalizeText(word)] = 1;
    } );

    return counterMap;
}