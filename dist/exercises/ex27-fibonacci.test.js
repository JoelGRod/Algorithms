"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex27_fibonacci_1 = require("./ex27-fibonacci");
describe("Exercise 27", () => {
    const digit = 10;
    test("fibonacci is defined", () => {
        expect(ex27_fibonacci_1.fibonacci).toBeDefined();
    });
    test("fiboRecursive is defined", () => {
        expect(ex27_fibonacci_1.fiboRecursive).toBeDefined();
    });
    test("memoizedFibo is defined", () => {
        expect(ex27_fibonacci_1.memoizedFibo).toBeDefined();
    });
    test("fibonacci returns correct fibonacci sequence number", () => {
        expect(ex27_fibonacci_1.fibonacci(digit)).toBe(55);
    });
    test("fiboRecursive returns correct fibonacci sequence number", () => {
        expect(ex27_fibonacci_1.fiboRecursive(digit)).toBe(55);
    });
    test("memoizedFibo returns correct fibonacci sequence number", () => {
        expect(ex27_fibonacci_1.memoizedFibo(digit)).toBe(55);
    });
});
