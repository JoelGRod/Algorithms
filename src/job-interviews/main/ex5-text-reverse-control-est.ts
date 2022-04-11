/**
 * Given a string reverse it using control structures only.
 */

export function reverseString(text: string): string {
    
    let reversedText: string = "";

    // for(let i = 0; i <= text.length - 1; i++) {
    //     reversedText = text[i] + reversedText; 
    // }

    for(let char of text) {
        reversedText = char + reversedText;
    }

    return reversedText;
}
