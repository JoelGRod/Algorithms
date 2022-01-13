import { countVowels } from "./ex17-count-vowels";

describe('Exercise 17', () => {
    const text: string = "pablito clavo un clavito";
    test('countVowels is defined', () => {
        expect(countVowels).toBeDefined();
    });
    test('countVowels returns correct vowels number', () => {
        expect(countVowels(text)).toBe(9);
    });

});