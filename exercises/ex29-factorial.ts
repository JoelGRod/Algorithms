/**
 * Given a number return the factorial.
 */

export function factorial(digit: number): number {

    let result: number = 1;

    for(let current = 2; current <= digit; current++) {
        result *= current;
    }

    return result;
}

export function factorialRecursive(digit: number): number {
    
    if(digit <= 1) return 1;

    return factorialRecursive(digit - 1) * digit;

}