/**
 * Returns the fibonacci sequence sum
 */

export function fibonacci(digit: number): number {

    let fiboList: number[] = [0, 1];

    for(let i = 2; i <= digit; i++) {
        fiboList[i] = fiboList[i - 1] + fiboList[i - 2];
    }

    return fiboList.reduce((acumulator, digit) => acumulator += digit, 0);

}