/**
 * Given a string determinate if is palindrome or not (return true or false).
 * string.trim() string.toLowerCase() string.split() array.reverse() array.join()
 */

export function isPalindrome( word: string ): boolean {
    const wordNormalized: string = word.trim().toLowerCase();
    const reverseWord: string = wordNormalized.split('').reverse().join('');

    return wordNormalized === reverseWord;
}
