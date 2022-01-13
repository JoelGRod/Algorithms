import { censorWord } from "./ex12-replace-specific-word";

describe('Exercise 12', () => {
    const text: string = "We need not to say BaD words because baD words are bad.";
    const word: string = "bad";
    test('censorWord is defined', () => {
        expect(censorWord).toBeDefined();
    });
    test('censorWord censor exact words', () => {
        expect(censorWord(text, word))
        .toBe('We need not to say [-CENSORED-] words because [-CENSORED-] words are [-CENSORED-].');
    });
});