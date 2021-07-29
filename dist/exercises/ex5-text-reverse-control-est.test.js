"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex5_text_reverse_control_est_1 = require("./ex5-text-reverse-control-est");
describe('Exercise 5', () => {
    const text = "My son it\'s so beautiful and Happy Baby!!!";
    test('reverseString is defined', () => {
        expect(ex5_text_reverse_control_est_1.reverseString).toBeDefined();
    });
    test('reverseString returns reversed string', () => {
        expect(ex5_text_reverse_control_est_1.reverseString(text)).toBe("!!!ybaB yppaH dna lufituaeb os s'ti nos yM");
    });
});
