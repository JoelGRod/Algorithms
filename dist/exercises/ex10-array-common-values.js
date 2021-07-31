"use strict";
/**
 * Return an array with the common values between two arrays (no duplicates)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCommonValues = void 0;
function findCommonValues(firstList, secondList) {
    const commonValues = firstList.filter(digit => secondList.includes(digit));
    return Array.from(new Set(commonValues));
}
exports.findCommonValues = findCommonValues;
// export function findCommonValuesBad(firstList: number[], secondList: number[] ): number[] {
//     let numberSet: Set<number> = new Set();
//     for( let digit of firstList ) {
//         if(secondList.find(element => element === digit) !== undefined) numberSet.add(digit); 
//     }
//     return [...numberSet];
// }
