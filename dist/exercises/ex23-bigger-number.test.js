"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex23_bigger_number_1 = require("./ex23-bigger-number");
describe("Exercise 23", () => {
    const digitOne = 16;
    const digitTwo = 10;
    const digitThree = 16;
    test("findBigger is defined", () => {
        expect(ex23_bigger_number_1.findBigger).toBeDefined();
    });
    test("findSmaller is defined", () => {
        expect(ex23_bigger_number_1.findSmaller).toBeDefined();
    });
    test("printBiggerSmaller is defined", () => {
        expect(ex23_bigger_number_1.printBiggerSmaller).toBeDefined();
    });
    test("findBigger returns bigger number", () => {
        expect(ex23_bigger_number_1.findBigger(digitOne, digitTwo)).toBe(16);
    });
    test("findSmaller returns smaller number", () => {
        expect(ex23_bigger_number_1.findSmaller(digitOne, digitTwo)).toBe(10);
    });
    test("printBiggerSmaller returns correct string", () => {
        expect(ex23_bigger_number_1.printBiggerSmaller(digitOne, digitTwo)).toBe("Bigger number is: 16 \nSmaller number is: 10");
    });
    test("printBiggerSmaller returns correct string when are equals", () => {
        expect(ex23_bigger_number_1.printBiggerSmaller(digitOne, digitThree)).toBe("The numbers are of the same value");
    });
});
