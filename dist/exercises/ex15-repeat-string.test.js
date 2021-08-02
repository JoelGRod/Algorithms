"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex15_repeat_string_1 = require("./ex15-repeat-string");
describe("Exercise 15", () => {
    const text = "Hello";
    const repetition = 6;
    test("repeatString is defined", () => {
        expect(ex15_repeat_string_1.repeatString).toBeDefined();
    });
    test("repeatString returns a repeated string x number of times", () => {
        expect(ex15_repeat_string_1.repeatString(text, repetition)).toBe("HelloHelloHelloHelloHelloHello");
    });
});
