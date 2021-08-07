"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex33_squared_numbers_array_1 = require("./ex33-squared-numbers-array");
describe("Exercise 33", () => {
    const numberList = ["Hello", "John", 2, 5, 10, "Peter"];
    test("getSquaredList is defined", () => {
        expect(ex33_squared_numbers_array_1.getSquaredList).toBeDefined();
    });
    test("getSquaredList returns array to power", () => {
        expect(ex33_squared_numbers_array_1.getSquaredList(numberList)).toEqual([4, 25, 100]);
    });
});
