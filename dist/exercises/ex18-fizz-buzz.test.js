"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex18_fizz_buzz_1 = require("./ex18-fizz-buzz");
describe("Exercise 18", () => {
    const fizz = 3;
    const buzz = 5;
    const fizzbuzz = 15;
    test("fizzBuzz is defined", () => {
        expect(ex18_fizz_buzz_1.fizzBuzz).toBeDefined();
    });
    test("fizzBuzz returns fizz with multiples of 3", () => {
        expect(ex18_fizz_buzz_1.fizzBuzz(fizz)).toEqual("fizz");
    });
    test("fizzBuzz returns buzz with multiples of 5", () => {
        expect(ex18_fizz_buzz_1.fizzBuzz(buzz)).toEqual("buzz");
    });
    test("fizzBuzz returns fizzbuzz with multiples of 3 AND 5", () => {
        expect(ex18_fizz_buzz_1.fizzBuzz(fizzbuzz)).toEqual("fizzbuzz");
    });
});
