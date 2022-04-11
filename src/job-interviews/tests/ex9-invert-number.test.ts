import { invertNumber } from '../main/ex9-invert-number';

describe('Exercise 9', () => {
    const digit: number = 59;

    test('invertNumber is defined', () => {
        expect(invertNumber).toBeDefined();
    });
    test('invertNUmber really inverts the number', () => {
        expect(invertNumber(digit)).toBe(95);
    });
});