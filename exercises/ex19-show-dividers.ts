/**
 * Given a number prints all the dividers
 */

export function isDivisible(digit: number, divisor: number): boolean {
    return (digit % divisor === 0) ? true : false;
}

export function showDividers(digit: number): void {
    for(let i = 0; i <= digit; i++) {
        if(isDivisible(digit, i)) console.log(i);
    }
}