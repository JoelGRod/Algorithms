"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex3_palindrome_1 = require("./ex3-palindrome");
describe('Exercise 3', () => {
    const palindrome = 'otto';
    const notPalindrome = 'Joel';
    test('isPalindrome is defined', () => {
        expect(ex3_palindrome_1.isPalindrome).toBeDefined();
    });
    test('isPalindrome return true with palindrome', () => {
        expect(ex3_palindrome_1.isPalindrome(palindrome)).toBeTruthy();
    });
    test('isPalindrome return false with non palindrome', () => {
        expect(ex3_palindrome_1.isPalindrome(notPalindrome)).toBeFalsy();
    });
});
