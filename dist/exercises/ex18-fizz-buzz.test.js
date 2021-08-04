"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex18_fizz_buzz_1 = require("./ex18-fizz-buzz");
describe("Exercise 18", () => {
    const digit = 10;
    test("fizzBuzz is defined", () => {
        expect(ex18_fizz_buzz_1.fizzBuzz).toBeDefined();
    });
    test("fizzBuzz returns correct array", () => {
        expect(ex18_fizz_buzz_1.fizzBuzz(digit)).toEqual("buzz");
    });
});
