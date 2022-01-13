/**
 * Given a two numbers, define which is bigger and which is smaller
 */

// This is useless, Math.max... are declarative itself
export function findBigger(digitOne: number, digitTwo: number): number {
    return Math.max(digitOne, digitTwo);
}
export function findSmaller(digitOne: number, digitTwo: number): number {
    return Math.min(digitOne, digitTwo);
}

export function printBiggerSmaller(digitOne: number, digitTwo: number): string {
    return (digitOne === digitTwo) ? 
        "The numbers are of the same value" : 
        `Bigger number is: ${Math.max(digitOne, digitTwo)} \nSmaller number is: ${Math.min(digitOne, digitTwo)}`
}