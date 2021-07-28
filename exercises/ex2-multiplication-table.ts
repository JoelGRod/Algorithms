/**
 * Given a number return its complete multiplication table.
 */

export function multiplyNumbers(digit: number): string[] {
    let multiplicationResults: string[] = [];

    multiplicationResults.push(`Multiplication table of ${digit}`);

    for(let i = 1; i <= 10; i++) {
        multiplicationResults.push(`${ i } x ${ digit } = ${ i * digit }`);
    }

    return multiplicationResults;
}