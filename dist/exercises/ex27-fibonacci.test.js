"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex27_fibonacci_1 = require("./ex27-fibonacci");
describe("Exercise 27", () => {
    const digit = 10;
    test("fibonacci is defined", () => {
        expect(ex27_fibonacci_1.fibonacci).toBeDefined();
    });
    test("fibonacci is returns fibonacci secuence sum", () => {
        expect(ex27_fibonacci_1.fibonacci(digit)).toBe(143);
    });
});
