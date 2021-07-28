import { countWords } from "./ex1-words-counter";

describe('Exercise 1', () => {
    const text: string = "Hi, my name is test, hi, this is a test";
    test('Count words is defined', () => {
        expect(countWords).toBeDefined();
    });
    test('Count the words from a string', () => {
        expect(countWords(text)).toEqual(
            { hi: 2, my: 1, name: 1, is: 2, test: 2, this: 1, a: 1, }
        );
    });
});