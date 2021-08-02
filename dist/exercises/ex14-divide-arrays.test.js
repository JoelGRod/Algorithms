"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex14_divide_arrays_1 = require("./ex14-divide-arrays");
describe('Exercise 14', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const divider = 2;
    test('divideArray is defined', () => {
        expect(ex14_divide_arrays_1.divideArrays).toBeDefined();
    });
    test('divideArray returns divided two dimensional array', () => {
        expect(ex14_divide_arrays_1.divideArrays(list, divider)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11]]);
    });
});
