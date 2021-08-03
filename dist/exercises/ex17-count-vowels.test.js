"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex17_count_vowels_1 = require("./ex17-count-vowels");
describe('Exercise 17', () => {
    const text = "pablito clavo un clavito";
    test('countVowels is defined', () => {
        expect(ex17_count_vowels_1.countVowels).toBeDefined();
    });
    test('countVowels returns correct vowels number', () => {
        expect(ex17_count_vowels_1.countVowels(text)).toBe(9);
    });
});
