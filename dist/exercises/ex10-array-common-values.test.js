"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex10_array_common_values_1 = require("./ex10-array-common-values");
describe('Exercise 10', () => {
    const firstList = [1, 5, 3, 4, 5];
    const secondList = [7, 5, 10, 4, 5];
    test('findCommonValues is defined', () => {
        expect(ex10_array_common_values_1.findCommonValues).toBeDefined();
    });
    test('findCommonValues returns correct set', () => {
        expect(ex10_array_common_values_1.findCommonValues(firstList, secondList)).toStrictEqual([5, 4]);
    });
});
