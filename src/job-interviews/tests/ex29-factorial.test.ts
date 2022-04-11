import { factorial, factorialRecursive } from '../main/ex29-factorial';


describe("Exercise 29", () => {
    const digit: number = 5;
    const digitZero: number = 0;

    test("factorial is defined", () => {
        expect(factorial).toBeDefined();
    });
    test("factorialRecursive is defined", () => {
        expect(factorialRecursive).toBeDefined();
    });
    test("factorial returns correct value", () => {
        expect(factorial(digit)).toBe(120);
    });
    test("factorialRecursive returns correct value", () => {
        expect(factorialRecursive(digit)).toBe(120);
    });
    test("factorial with digit 0 returns 1", () => {
        expect(factorial(digitZero)).toBe(1);
    });
    test("factorialRecursive with digit 0 returns 1", () => {
        expect(factorialRecursive(digitZero)).toBe(1);
    });
});