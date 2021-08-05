"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex26_upper_lower_case_1 = require("./ex26-upper-lower-case");
describe("Exercise 26", () => {
    const upperString = "THIS IS A TEst string";
    const lowerString = "This Is a Test string";
    test("toUpperOrLowerCase is defined", () => {
        expect(ex26_upper_lower_case_1.toUpperOrLowerCase).toBeDefined();
    });
    test("toUpperOrLowerCase returns uppercase string", () => {
        expect(ex26_upper_lower_case_1.toUpperOrLowerCase(upperString)).toBe("THIS IS A TEST STRING");
    });
    test("toUpperOrLowerCase returns lowercase string", () => {
        expect(ex26_upper_lower_case_1.toUpperOrLowerCase(lowerString)).toBe("this is a test string");
    });
});
