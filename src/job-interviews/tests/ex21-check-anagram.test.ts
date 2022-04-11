import { isAnagram } from '../main/ex21-check-anagram';


describe("Exercise 21", () => {
    const textOne = "Sergio";
    const textTwo = "Riesgo";
    const textThree = "Cosa";
    test("isAnagram is defined", () => {
        expect(isAnagram).toBeDefined();
    });
    test("isAnagram returns true when second word is an anagram", () => {
        expect(isAnagram(textOne, textTwo)).toBe(true);
    });
    test("isAnagram returns false when second word is not an anagram", () => {
        expect(isAnagram(textOne, textThree)).toBe(false);
    });
});