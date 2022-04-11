

export function countVowels(text: string): number {

    let vowels = text.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
    
}