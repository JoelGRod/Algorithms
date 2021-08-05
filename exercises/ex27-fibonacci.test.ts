import { fibonacci } from './ex27-fibonacci';


describe("Exercise 27", () => {
    const digit: number = 10;
    test("fibonacci is defined", () => {
        expect(fibonacci).toBeDefined();
    });
    test("fibonacci is returns fibonacci secuence sum", () => {
        expect(fibonacci(digit)).toBe(143);
    });
});