/**
 * FizzBuzz Logic problem.
 * Returns fizz with multiples of 3, 
 * buzz with multiples of 5, 
 * fizzbuzz with multiples of 3 and 5.
 */

export function fizzBuzz(digit: number): string | number {
    if(!(digit % 3) && !(digit % 5)) return "fizzbuzz";
    if(!(digit % 3)) return "fizz";
    if(!(digit % 5)) return "buzz";
    return digit;
}

export function printFizzBuzz(digit: number): void {
    for(let i = 1; i <= digit; i++) {
        console.log(fizzBuzz(i));
    }
}