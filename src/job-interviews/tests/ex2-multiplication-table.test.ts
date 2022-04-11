import { multiplyNumbers } from '../main/ex2-multiplication-table';

describe('Exercise 2', () => {
    const digit: number = 5;
    test('Multiply numbers is defined', () => {
        expect(multiplyNumbers).toBeDefined();
    });
    test('Multiply numbers array has a length of 11', () => {
        expect(multiplyNumbers(digit)).toHaveLength(11);
    });
    test('Multiply numbers return string array', () => {
        expect(multiplyNumbers(digit)).toBeInstanceOf(Array);
    });
});