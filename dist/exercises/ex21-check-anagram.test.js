"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex21_check_anagram_1 = require("./ex21-check-anagram");
describe("Exercise 21", () => {
    const textOne = "Sergio";
    const textTwo = "Riesgo";
    const textThree = "Cosa";
    test("isAnagram is defined", () => {
        expect(ex21_check_anagram_1.isAnagram).toBeDefined();
    });
    test("isAnagram returns true when second word is an anagram", () => {
        expect(ex21_check_anagram_1.isAnagram(textOne, textTwo)).toBe(true);
    });
    test("isAnagram returns false when second word is not an anagram", () => {
        expect(ex21_check_anagram_1.isAnagram(textOne, textThree)).toBe(false);
    });
});
