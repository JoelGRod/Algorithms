/**
 * Divides an array in subarrays
 */

export function divideArrays(list: any[], divisor: number): any[][] {

    let newList: any[][] = new Array();

    while(list.length >= divisor) {
        newList.push(list.splice(0, divisor));
    }

    if(list.length) newList.push(list);

    return newList;

}