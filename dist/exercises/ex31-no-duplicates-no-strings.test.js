"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex31_no_duplicates_no_strings_1 = require("./ex31-no-duplicates-no-strings");
describe("Exercise 31", () => {
    const list = [5, 5, 10000, 56000, "hello", 45, "Hi", "SOme string", 87, 56000, 45];
    test("removeDuplicatesAndStrings is defined", () => {
        expect(ex31_no_duplicates_no_strings_1.removeDuplicatesAndStrings).toBeDefined();
    });
    test("removeDuplicatesAndStrings returns array without strings and duplicates", () => {
        expect(ex31_no_duplicates_no_strings_1.removeDuplicatesAndStrings(list)).toEqual([5, 10000, 56000, 45, 87]);
    });
});
