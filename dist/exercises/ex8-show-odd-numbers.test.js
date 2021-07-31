"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex8_show_odd_numbers_1 = require("./ex8-show-odd-numbers");
describe('Exercise 8', () => {
    const min = 1;
    const max = 10;
    test('getOddNumbers id defined', () => {
        expect(ex8_show_odd_numbers_1.getOddNumbers).toBeDefined();
    });
    test('getOddNumbers returns exact odd counter', () => {
        expect(ex8_show_odd_numbers_1.getOddNumbers(min, max)).toBe(5);
    });
});
