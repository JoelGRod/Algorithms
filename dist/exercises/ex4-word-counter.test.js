"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex4_word_counter_1 = require("./ex4-word-counter");
describe('Exercise 4', () => {
    const text = "Hi this is an example text, text, text.";
    const word = " Text";
    const wrongWord = "test";
    test('countEspecificWord is defined', () => {
        expect(ex4_word_counter_1.countEspecificWord).toBeDefined();
    });
    test('countEspecificWord returns exact word counter', () => {
        expect(ex4_word_counter_1.countEspecificWord(text, word)).toBe(3);
    });
    test('countEspecificWord returns 0 if word don\'t match', () => {
        expect(ex4_word_counter_1.countEspecificWord(text, wrongWord)).toBe(0);
    });
});
