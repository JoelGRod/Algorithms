import { isPermutation } from "./ex25-permutation";


describe("Exercise 25", () => {
    const digitList: number[] = [1, 2, 3, 4, 5, 6];
    const digitListTwo: number[] = [1, 2, 3, 4, 6];
    const digit: number = 6;

    test("isPermutation is defined", () => {
        expect(isPermutation).toBeDefined();
    });
    test("isPermutation returns true when it is permutation", () => {
        expect(isPermutation(digitList, digit)).toBe(true);
    });
    test("isPermutation returns false when it is not permutation", () => {
        expect(isPermutation(digitListTwo, digit)).toBe(false);
    });
});