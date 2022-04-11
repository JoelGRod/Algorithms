import { fizzBuzz } from '../main/ex18-fizz-buzz';

describe("Exercise 18", () => {
    const fizz: number = 3;
    const buzz: number = 5;
    const fizzbuzz: number = 15;
    test("fizzBuzz is defined", () => {
        expect(fizzBuzz).toBeDefined();
    });
    test("fizzBuzz returns fizz with multiples of 3", () => {
        expect(fizzBuzz(fizz)).toEqual("fizz");
    });
    test("fizzBuzz returns buzz with multiples of 5", () => {
        expect(fizzBuzz(buzz)).toEqual("buzz");
    });
    test("fizzBuzz returns fizzbuzz with multiples of 3 AND 5", () => {
        expect(fizzBuzz(fizzbuzz)).toEqual("fizzbuzz");
    });
});