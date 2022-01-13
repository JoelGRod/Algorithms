/**
 * Given an array return a new one with the first and last digit
 */

const getFirstAndLast = (numberArray: number[]): number[] | string => {
    if(numberArray.length <= 1) return "Not a valid number array";
    const newArray = [...numberArray];
    return [newArray.shift()!, newArray.pop()!];
}

export default getFirstAndLast;