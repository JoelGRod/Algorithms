import { calculatePercentage } from "../main/ex6-calculate-percentage";

describe('Exercise 6', () => {

    const digit: number = 200;
    const percent: number = 20;

    test('calculatePercentage is defined', () => {
        expect(calculatePercentage).toBeDefined();
    });
    test('calculatePercentage returns exact percentage', () => {
        expect(calculatePercentage(digit, percent)).toBe(40);
    });
});