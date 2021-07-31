/**
 * Return total odd numbers between two digits
 */

export function getOddNumbers(min: number, max: number): number {
    let counter: number = 0;

    for(let i = min; i <= max; i++) {
        if( i % 2 !== 0 ) counter++;
    }
    
    return counter;
}