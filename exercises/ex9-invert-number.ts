/**
 * Invert a number and return it: 59 -> 95
 */

export function invertNumber(digit: number): number {
    return parseInt(
        digit.toString().split('').reverse().join('')
        ) * Math.sign(digit);
}