import { fibonacci, fiboRecursive, memoizedFibo } from '../main/ex27-fibonacci';


describe("Exercise 27", () => {
    const digit: number = 10;
    
    test("fibonacci is defined", () => {
        expect(fibonacci).toBeDefined();
    });
    test("fiboRecursive is defined", () => {
        expect(fiboRecursive).toBeDefined();
    });
    test("memoizedFibo is defined", () => {
        expect(memoizedFibo).toBeDefined();
    });
    test("fibonacci returns correct fibonacci sequence number", () => {
        expect(fibonacci(digit)).toBe(55);
    });
    test("fiboRecursive returns correct fibonacci sequence number", () => {
        expect(fiboRecursive(digit)).toBe(55);
    });
    test("memoizedFibo returns correct fibonacci sequence number", () => {
        expect(memoizedFibo(digit)).toBe(55);
    });
});