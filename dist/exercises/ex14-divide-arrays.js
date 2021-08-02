"use strict";
/**
 * Divides an array in subarrays
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.divideArrays = void 0;
function divideArrays(list, divisor) {
    let newList = new Array();
    while (list.length >= divisor) {
        newList.push(list.splice(0, divisor));
    }
    if (list.length)
        newList.push(list);
    return newList;
}
exports.divideArrays = divideArrays;
