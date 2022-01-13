import { findBigger, findSmaller, printBiggerSmaller } from "./ex23-bigger-number";

describe("Exercise 23", () => {
    const digitOne: number = 16;
    const digitTwo: number = 10;
    const digitThree: number = 16;
    test("findBigger is defined", () => {
        expect(findBigger).toBeDefined();
    });
    test("findSmaller is defined", () => {
        expect(findSmaller).toBeDefined();
    });
    test("printBiggerSmaller is defined", () => {
        expect(printBiggerSmaller).toBeDefined();
    });
    test("findBigger returns bigger number", () => {
        expect(findBigger(digitOne, digitTwo)).toBe(16);
    });
    test("findSmaller returns smaller number", () => {
        expect(findSmaller(digitOne, digitTwo)).toBe(10);
    });
    test("printBiggerSmaller returns correct string", () => {
        expect(printBiggerSmaller(digitOne, digitTwo)).toBe("Bigger number is: 16 \nSmaller number is: 10");
    });
    test("printBiggerSmaller returns correct string when are equals", () => {
        expect(printBiggerSmaller(digitOne, digitThree)).toBe("The numbers are of the same value");
    });
});