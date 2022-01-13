/**
 * Find the most used char from a string
 */

import { getCharMap } from "../helpers/basic-helpers";

export function findMostUsedChar(text: string): string {
    
    let charMap = getCharMap(text);
    
    let maxChar: string = "";

    for(let char in charMap) {
        if(maxChar === "" || charMap[maxChar] < charMap[char]) maxChar = char;
    }

    return maxChar;

}