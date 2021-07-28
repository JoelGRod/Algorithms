"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex1_words_counter_1 = require("./ex1-words-counter");
describe('Exercise 1', () => {
    const text = "Hi, my name is test, hi, this is a test";
    test('Count words is defined', () => {
        expect(ex1_words_counter_1.countWords).toBeDefined();
    });
    test('Count the words from a string', () => {
        expect(ex1_words_counter_1.countWords(text)).toEqual({ hi: 2, my: 1, name: 1, is: 2, test: 2, this: 1, a: 1, });
    });
});
