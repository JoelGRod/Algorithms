import { isPalindrome } from '../main/ex3-palindrome';

describe('Exercise 3', () => {
    const palindrome: string = 'otto';
    const notPalindrome: string = 'Joel';
    test('isPalindrome is defined', () => {
        expect(isPalindrome).toBeDefined();
    });
    test('isPalindrome return true with palindrome', () => {
        expect(isPalindrome(palindrome)).toBeTruthy();
    });
    test('isPalindrome return false with non palindrome', () => {
        expect(isPalindrome(notPalindrome)).toBeFalsy();
    });
});