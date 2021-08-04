"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex19_show_dividers_1 = require("./ex19-show-dividers");
describe("Exercise 19", () => {
    const digit = 10;
    const divisorTrue = 5;
    const divisorFalse = 3;
    test("isDivisible is defined", () => {
        expect(ex19_show_dividers_1.isDivisible).toBeDefined();
    });
    test("isDivisible returns true with divisible value", () => {
        expect(ex19_show_dividers_1.isDivisible(digit, divisorTrue)).toBe(true);
    });
    test("isDivisible returns false with non divisible value", () => {
        expect(ex19_show_dividers_1.isDivisible(digit, divisorFalse)).toBe(false);
    });
});
