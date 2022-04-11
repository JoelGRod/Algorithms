import { findCommonValues } from '../main/ex10-array-common-values';

describe('Exercise 10', () => {
    const firstList: number[] = [1, 5, 3, 4, 5];
    const secondList: number[] = [7, 5, 10, 4, 5];
    test('findCommonValues is defined', () => {
        expect(findCommonValues).toBeDefined();
    });
    test('findCommonValues returns correct set', () => {
        expect(findCommonValues(firstList, secondList)).toStrictEqual([5, 4]);
    });

});