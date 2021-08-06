"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex29_factorial_1 = require("./ex29-factorial");
describe("Exercise 29", () => {
    const digit = 5;
    const digitZero = 0;
    test("factorial is defined", () => {
        expect(ex29_factorial_1.factorial).toBeDefined();
    });
    test("factorialRecursive is defined", () => {
        expect(ex29_factorial_1.factorialRecursive).toBeDefined();
    });
    test("factorial returns correct value", () => {
        expect(ex29_factorial_1.factorial(digit)).toBe(120);
    });
    test("factorialRecursive returns correct value", () => {
        expect(ex29_factorial_1.factorialRecursive(digit)).toBe(120);
    });
    test("factorial with digit 0 returns 1", () => {
        expect(ex29_factorial_1.factorial(digitZero)).toBe(1);
    });
    test("factorialRecursive with digit 0 returns 1", () => {
        expect(ex29_factorial_1.factorialRecursive(digitZero)).toBe(1);
    });
});
