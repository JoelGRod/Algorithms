import { checkCapicua } from './ex30-check-capicua-numbers';


describe("Exercise 30", () => {
    const digit: number = 2002;
    const digitNonCapicua: number = 2003;

    test('checkCapicua is defined', () => {
        expect(checkCapicua).toBeDefined();
    });
    test('checkCapicua returns true with capicua number', () => {
        expect(checkCapicua(digit)).toBe(true);
    });
    test('checkCapicua returns false with non capicua number', () => {
        expect(checkCapicua(digitNonCapicua)).toBe(false);
    });

});