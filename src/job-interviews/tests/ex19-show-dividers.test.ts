import { isDivisible } from '../main/ex19-show-dividers';

describe("Exercise 19", () => {
    const digit: number = 10;
    const divisorTrue: number = 5;
    const divisorFalse: number = 3;
    test("isDivisible is defined", () => {
        expect(isDivisible).toBeDefined();
    });
    test("isDivisible returns true with divisible value", () => {
        expect(isDivisible(digit, divisorTrue)).toBe(true);
    });
    test("isDivisible returns false with non divisible value", () => {
        expect(isDivisible(digit, divisorFalse)).toBe(false);
    });
});