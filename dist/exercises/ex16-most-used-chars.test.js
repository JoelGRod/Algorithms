"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex16_most_used_chars_1 = require("./ex16-most-used-chars");
describe("Exercise 16", () => {
    const text = "Most used worde ise... ie donte knowe";
    test("findMostUsedChar is defined", () => {
        expect(ex16_most_used_chars_1.findMostUsedChar).toBeDefined();
    });
    test("findMostUsedChar is defined", () => {
        expect(ex16_most_used_chars_1.findMostUsedChar(text)).toBe("e");
    });
});
