"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex30_check_capicua_numbers_1 = require("./ex30-check-capicua-numbers");
describe("Exercise 30", () => {
    const digit = 2002;
    const digitNonCapicua = 2003;
    test('checkCapicua is defined', () => {
        expect(ex30_check_capicua_numbers_1.checkCapicua).toBeDefined();
    });
    test('checkCapicua returns true with capicua number', () => {
        expect(ex30_check_capicua_numbers_1.checkCapicua(digit)).toBe(true);
    });
    test('checkCapicua returns false with non capicua number', () => {
        expect(ex30_check_capicua_numbers_1.checkCapicua(digitNonCapicua)).toBe(false);
    });
});
