"use strict";
/**
 * Given a string determinate if is palindrome or not (return true or false).
 * string.trim() string.toLowerCase() string.split() array.reverse() array.join()
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
function isPalindrome(word) {
    const wordNormalized = word.trim().toLowerCase();
    const reverseWord = wordNormalized.split('').reverse().join('');
    return (wordNormalized === reverseWord);
}
exports.isPalindrome = isPalindrome;
