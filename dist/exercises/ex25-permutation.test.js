"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex25_permutation_1 = require("./ex25-permutation");
describe("Exercise 25", () => {
    const digitList = [1, 2, 3, 4, 5, 6];
    const digitListTwo = [1, 2, 3, 4, 6];
    const digit = 6;
    test("isPermutation is defined", () => {
        expect(ex25_permutation_1.isPermutation).toBeDefined();
    });
    test("isPermutation returns true when it is permutation", () => {
        expect(ex25_permutation_1.isPermutation(digitList, digit)).toBe(true);
    });
    test("isPermutation returns false when it is not permutation", () => {
        expect(ex25_permutation_1.isPermutation(digitListTwo, digit)).toBe(false);
    });
});
