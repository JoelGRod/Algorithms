/**
 * Given a text, return text to lowercase if the number of 
 * lowercase letters is greater than uppercase letters
 */

export function toUpperOrLowerCase(text: string): string {
    
    let uppers: number | undefined = text.match(/[A-Z]/g)?.length;
    let lowers: number | undefined = text.match(/[a-z]/g)?.length;

    if(uppers === undefined) uppers = 0;
    if(lowers === undefined) lowers = 0;

    return uppers > lowers ? text.toUpperCase() : text.toLowerCase();
}