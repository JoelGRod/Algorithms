import { countEspecificWord } from '../main/ex4-word-counter';

describe('Exercise 4', () => {

    const text: string = "Hi this is an example text, text, text.";
    const word: string = " Text";
    const wrongWord: string = "test";

    test('countEspecificWord is defined', () => {
        expect(countEspecificWord).toBeDefined();
    });
    test('countEspecificWord returns exact word counter', () => {
        expect(countEspecificWord(text, word)).toBe(3);
    });
    test('countEspecificWord returns 0 if word don\'t match', () => {
        expect(countEspecificWord(text, wrongWord)).toBe(0);
    });
});