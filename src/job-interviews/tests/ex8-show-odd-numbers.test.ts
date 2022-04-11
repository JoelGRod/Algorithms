import { getOddNumbers } from '../main/ex8-show-odd-numbers';


describe('Exercise 8', () => {
    const min: number = 1;
    const max: number = 10;
    test('getOddNumbers id defined', () => {
        expect(getOddNumbers).toBeDefined();
    });
    test('getOddNumbers returns exact odd counter', () => {
        expect(getOddNumbers(min, max)).toBe(5);
    });
});