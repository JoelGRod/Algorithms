"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex9_invert_number_1 = require("./ex9-invert-number");
describe('Exercise 9', () => {
    const digit = 59;
    test('invertNumber is defined', () => {
        expect(ex9_invert_number_1.invertNumber).toBeDefined();
    });
    test('invertNUmber really inverts the number', () => {
        expect(ex9_invert_number_1.invertNumber(digit)).toBe(95);
    });
});
