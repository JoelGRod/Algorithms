/**
 * Given a number prints all the dividers
 */

export function isDivisible(digit: number, divisor: number): boolean {
    if(digit % divisor === 0) return true;
    return false;
}

export function showDividers(digit: number): void {
    for(let i = 0; i <= digit; i++) {
        if(isDivisible(digit, i)) console.log(i);
    }
}