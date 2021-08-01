"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex12_replace_specific_word_1 = require("./ex12-replace-specific-word");
describe('Exercise 12', () => {
    const text = "We need not to say BaD words because baD words are bad.";
    const word = "bad";
    test('censorWord is defined', () => {
        expect(ex12_replace_specific_word_1.censorWord).toBeDefined();
    });
    test('censorWord censor exact words', () => {
        expect(ex12_replace_specific_word_1.censorWord(text, word))
            .toBe('We need not to say [-CENSORED-] words because [-CENSORED-] words are [-CENSORED-].');
    });
});
