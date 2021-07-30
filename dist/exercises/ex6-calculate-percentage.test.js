"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex6_calculate_percentage_1 = require("./ex6-calculate-percentage");
describe('Exercise 6', () => {
    const digit = 200;
    const percent = 20;
    test('calculatePercentage is defined', () => {
        expect(ex6_calculate_percentage_1.calculatePercentage).toBeDefined();
    });
    test('calculatePercentage returns exact percentage', () => {
        expect(ex6_calculate_percentage_1.calculatePercentage(digit, percent)).toBe(40);
    });
});
