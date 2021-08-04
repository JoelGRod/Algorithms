import { fizzBuzz } from './ex18-fizz-buzz';

describe("Exercise 18", () => {
    const digit: number = 10;
    test("fizzBuzz is defined", () => {
        expect(fizzBuzz).toBeDefined();
    });
    test("fizzBuzz returns correct array", () => {
        expect(fizzBuzz(digit)).toEqual("buzz");
    });
});