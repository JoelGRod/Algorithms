"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex22_cut_text_1 = require("./ex22-cut-text");
describe("Exercise 22", () => {
    const text = "Hello world";
    const digit = 6;
    test("cutText is defined", () => {
        expect(ex22_cut_text_1.cutText).toBeDefined();
    });
    test("cutText returns correct cutted string", () => {
        expect(ex22_cut_text_1.cutText(text, digit)).toBe("Hello ");
    });
});
