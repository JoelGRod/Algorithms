/**
 * Returns the fibonacci sequence sum
 */

// General Fibonacci O(n)
export function fibonacci(digit: number): number {

    let fiboList: number[] = [0, 1];

    for(let i = 2; i <= digit; i++) {
        fiboList[i] = fiboList[i - 1] + fiboList[i - 2];
    }

    return fiboList[digit];

}

// Recursive Fibonacci
export function fiboRecursive(digit: number): number {

    if(digit <= 1) return digit;                                        // Base Case

    return fiboRecursive(digit - 1) + fiboRecursive(digit - 2);         // Recursive Call

}

// Recursive memoized fibonacci
let memo: number[] = [];

export function memoizedFibo(digit: number): number {

    if(memo[digit] !== undefined) return memo[digit];                   // If calculus already done, return it

    if(digit <= 1) {                                                    // Base Case
        memo[digit] = digit;
        return digit;
    };

    memo[digit] = memoizedFibo(digit - 1) + memoizedFibo(digit - 2);    // Recursive Call
    return memo[digit];
}