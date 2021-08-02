

export function findMostUsedChar(text: string): string {
    
    let charMap: { [key: string]: number } = {};

    text.trim()
        .toLowerCase()
        .replace(/[\s.!?¿¡]/g, "")
        .split('')
        .forEach( char => {
        if(char in charMap) ++charMap[char];
        else charMap[char] = 1;
    });
    
    let maxChar: string = "";

    for(let char in charMap) {
        if(maxChar === "" || charMap[maxChar] < charMap[char]) maxChar = char;
    }

    return `The most used char is: ${maxChar}`;

}