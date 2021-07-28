/**
 * Given a string and a search word determinate if this word appears in the string.
 * string.trim() string.split()
 */

import { normalizeText } from "../shared/helpers/basic-helpers";

export function countEspecificWord(text: string, wordToSearch: string): number {

    const words: string[] = text.trim().split(' ');
    let counter: number = 0;

    words.map( word => {
        if (normalizeText(word) === normalizeText(wordToSearch)) counter++;
    });

    return counter;
}