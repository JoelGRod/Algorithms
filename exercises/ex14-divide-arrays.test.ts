import { divideArrays } from "./ex14-divide-arrays";

describe('Exercise 14', () => {
    const list = [1,2,3,4,5,6,7,8,9,10,11];
    const divider: number = 2;
    test('divideArray is defined', () => {
        expect(divideArrays).toBeDefined();
    });
    test('divideArray returns divided two dimensional array', () => {
        expect(divideArrays(list, divider)).toEqual([ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11 ] ]);
    });
});