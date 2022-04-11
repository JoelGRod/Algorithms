import { reverseString } from '../main/ex5-text-reverse-control-est';

describe('Exercise 5', () => {

    const text: string = "My son it\'s so beautiful and Happy Baby!!!";

    test('reverseString is defined', () => {
        expect(reverseString).toBeDefined();
    });
    test('reverseString returns reversed string', () => {
        expect(reverseString(text)).toBe("!!!ybaB yppaH dna lufituaeb os s'ti nos yM");
    });
});