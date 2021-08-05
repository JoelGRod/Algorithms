/**
 * Ex 25: Given a number array and a number, return true if the array 
 * values are a permutation of number, false otherwise.
 */

/**
 * Problems with this solution:
 * 1- The array must be ordered.
 * 2- The array needs to be of exact length.
*/
export function isPermutation(digitList: number[], digit: number): boolean {

    for(let i = 1; i <= digit; i++) {
        if(digitList[i - 1] !== i || digitList.length !== digit) return false;
    }

    return true;
}

/**
 * Problems with this solution:
 * 1- The aray does not have to be ordered (maybe this is not a problem).
 * 2- The array length can be greater than the entered digit.
*/

export function isPermitationAlt(digitList: number[], digit: number): boolean {
    for(let i = 0; i < digit; i++) {
        if(digitList.indexOf(i + 1) < 0) return false;
    }
    return true;
}