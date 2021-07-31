/**
 * Return an array with the common values between two arrays (no duplicates)
 */

 export function findCommonValues(firstList: number[], secondList: number[] ): number[] {

    const commonValues: number[] = firstList.filter( digit => secondList.includes(digit) );

    return Array.from(new Set(commonValues));

}

// export function findCommonValuesBad(firstList: number[], secondList: number[] ): number[] {

//     let numberSet: Set<number> = new Set();

//     for( let digit of firstList ) {
//         if(secondList.find(element => element === digit) !== undefined) numberSet.add(digit); 
//     }

//     return [...numberSet];

// }