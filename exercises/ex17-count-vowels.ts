

export function countVowels(text: string): number {

    let vowels = text.match(/[aeiou]/gi);
    
    if(vowels) return vowels.length;
    return 0;
    
}