/**
 * Given a number return return true if capicua, false otherwise
 */

export function checkCapicua(digit: number): boolean {

    return digit === parseInt(digit.toString().split('').reverse().join('')) 
        ? true : false;
}