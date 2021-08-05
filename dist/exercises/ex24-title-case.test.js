"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex24_title_case_1 = require("./ex24-title-case");
describe("Exercise 24", () => {
    const text = "this is a test string";
    test("toTitleCase is defined", () => {
        expect(ex24_title_case_1.toTitleCase).toBeDefined();
    });
    test("toTitleCase returns a title case string", () => {
        expect(ex24_title_case_1.toTitleCase(text)).toBe("This Is A Test String");
    });
});
