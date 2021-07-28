"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex2_multiplication_table_1 = require("./ex2-multiplication-table");
describe('Exercise 2', () => {
    const digit = 5;
    test('Multiply numbers is defined', () => {
        expect(ex2_multiplication_table_1.multiplyNumbers).toBeDefined();
    });
    test('Multiply numbers array has a length of 11', () => {
        expect(ex2_multiplication_table_1.multiplyNumbers(digit)).toHaveLength(11);
    });
    test('Multiply numbers return string array', () => {
        expect(ex2_multiplication_table_1.multiplyNumbers(digit)).toBeInstanceOf(Array);
    });
});
